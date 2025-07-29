"use client";

import { useState, useEffect } from "react";
import { format } from "date-fns";
import * as XLSX from "xlsx";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { BadgeCent, Car, DollarSign } from "lucide-react";
import { useSession } from "next-auth/react";
import {
  DataTable,
  Column,
  TableActions,
  EntityForm,
  ConfirmationDialog,
} from "@/components/ui/data-table";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useCreateItem, useDeleteItem, useOrgItems } from "@/hooks/useItemQueries";
import { BriefItemDTO, ItemCreateDTO } from "@/types/itemTypes";
import ImageUploadButton from "@/components/FormInputs/ImageUploadButton";

interface ItemListingProps {
  title: string;
  orgId: string;
}

// Form schema for editing/adding products
const productFormSchema = z.object({
    name: z.string().min(1, "Name is required"),
    sellingPrice: z.string().min(1, "Selling price is required"),
    sku: z.string().min(1, "SKU is required"),
    costPrice: z.string().min(1, "Cost price is required"),
});

type ProductFormValues = z.infer<typeof productFormSchema>;

export default function ItemListing({ title, orgId }: ItemListingProps) {
    // React Query hooks with Suspense - note that data is always defined
    const { items, refetch } = useOrgItems(orgId);
    const createItemMutation = useCreateItem();
    //   const updateProductMutation = useUpdateProduct();
    const deleteItemMutation = useDeleteItem();

    // Local state
    const [formDialogOpen, setFormDialogOpen] = useState(false);
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [isExporting, setIsExporting] = useState(false);
    const [currentProduct, setCurrentProduct] = useState<BriefItemDTO | null>(null);
    const [productToDelete, setProductToDelete] = useState<BriefItemDTO | null>(null);
    const [imageUrl, setImageUrl] = useState("https://lxw8hao0qb.ufs.sh/f/43HGwtyufPQgRXjUTpesd9co1Cv0ntbLVkT6lFqUafhBr8mQ");

    // Form for editing/adding products
    const form = useForm<ItemCreateDTO>({
        resolver: zodResolver(productFormSchema),
        defaultValues: {
            name: "",
            sellingPrice: 0,
            sku: "",
            costPrice: 0,
        },
    });

    // Update form when current product changes
    useEffect(() => {
        if (!currentProduct) {
            // Adding new - reset form
            form.reset({
                name: "",
                sellingPrice: 0,
                sku: "",
                costPrice: 0,
            });
        } else {
            // Editing existing - populate form
            form.reset({
                name: currentProduct.name,
                sellingPrice: currentProduct.sellingPrice,
            });
        }
    }, [currentProduct, form]);

    const { data: session } = useSession();

    // Format date function
    const formatDate = (date: Date | string) => {
        const dateObj = typeof date === "string" ? new Date(date) : date;
        return format(dateObj, "MMM dd, yyyy");
    };

    // Format currency
    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat("en-UG", {
        style: "currency",
        currency: "GHS",
        minimumFractionDigits: 0,
        }).format(amount);
    };

    // Export to Excel
    const handleExport = async (filteredProducts: BriefItemDTO[]) => {
        setIsExporting(true);
        try {
            // Prepare data for export
            const exportData = filteredProducts.map((product) => ({
                Name: product.name,
                Price: product.sellingPrice,
                "Sales Count": product.salesCount,
                "Total Sales": formatCurrency(product.salesTotal),
                "Date Added": formatDate(product.createdAt),
            }));

            // Create workbook and worksheet
            const worksheet = XLSX.utils.json_to_sheet(exportData);
            const workbook = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(workbook, worksheet, "Products");

            // Generate filename with current date
            const fileName = `Products_${format(new Date(), "yyyy-MM-dd")}.xlsx`;

            // Export to file
            XLSX.writeFile(workbook, fileName);

            toast.success("Export successful", {
                description: `Products exported to ${fileName}`,
            });
        } catch (error) {
            toast.error("Export failed", {
                description:
                error instanceof Error ? error.message : "Unknown error occurred",
            });
        } finally {
            setIsExporting(false);
        }
    };

    // Handle add new click
    const handleAddClick = () => {
        setCurrentProduct(null);
        setFormDialogOpen(true);
    };

    // Handle edit click
    // const handleEditClick = (product: Product) => {
    //     setCurrentProduct(product);
    //     setFormDialogOpen(true);
    // };

    // Handle delete click
    const handleDeleteClick = (product: BriefItemDTO) => {
        setProductToDelete(product);
        setDeleteDialogOpen(true);
    };

    // Handle form submission (edit or add)
    const onSubmit = async (data: ItemCreateDTO) => {
        if (!currentProduct) {
            // Add new product
            data.orgId = orgId;
            data.costPrice = Number(data.costPrice);
            data.sellingPrice = Number(data.sellingPrice);
            data.thumbnail = imageUrl;

            createItemMutation.mutate(data, {
                onSuccess: () => {
                    // Only close dialog after successful submission
                    setFormDialogOpen(false);
                    form.reset();
                    setImageUrl("https://lxw8hao0qb.ufs.sh/f/43HGwtyufPQgRXjUTpesd9co1Cv0ntbLVkT6lFqUafhBr8mQ");
                },
                onError: (error) => {
                    // Handle error case - keep dialog open
                    console.error('Failed to create item:', error);
                }
            });
        } else {
            // Edit existing product
            // updateProductMutation.mutate({
            //     id: currentProduct.id,
            //     data,
            // });
        }
    };


    // Handle confirming delete
    const handleConfirmDelete = () => {
        if (productToDelete) {
            deleteItemMutation.mutate(productToDelete.id, {
                onSuccess: () => {
                    // Only close dialog after successful submission
                    setDeleteDialogOpen(false);
                },
                onError: (error) => {
                    // Handle error case - keep dialog open
                    console.error('Failed to delete item:', error);
                }
            });
        }
    };

    // Calculate total products value
    const getTotalValue = (products: BriefItemDTO[]) => {
        return products.reduce((total, product) => {
            const price = product.sellingPrice
            return total + price;
        }, 0);
    };

    // Define columns for the data table
    const columns: Column<BriefItemDTO>[] = [
        {
            header: "Image",
            accessorKey: "thumbnail",
            cell: (row) => <img src={row.thumbnail ?? "/placeholder.png"} alt={row.name} className="w-10 h-10 rounded" />,
        },
        {
            header: "Name",
            accessorKey: "name",
            cell: (row) => <span className="font-medium">{row.name.length > 25 ? `${row.name.substring(0, 25)}...` : row.name}</span>,
        },
        {
            header: "Price",
            accessorKey: (row) => formatCurrency(row.sellingPrice),
        },
        {
            header: "Sales Count",
            accessorKey: "salesCount",
        },
        {
            header: "Total Sales",
            accessorKey: (row) => formatCurrency(row.salesTotal),
        },
        {
            header: "Date Added",
            accessorKey: (row) => formatDate(row.createdAt),
        },
    ];

    // Generate subtitle with total value
    const getSubtitle = (productCount: number, totalValue: number) => {
        return `${productCount} ${
            productCount === 1 ? "item" : "items"
        } | Total Value: ${formatCurrency(totalValue)}`;
    };

    return (
        <>
            <DataTable<BriefItemDTO>
                title={title}
                subtitle={
                    items.length > 0 ? getSubtitle(items.length, getTotalValue(items)) : undefined
                }
                data={items}
                columns={columns}
                keyField="id"
                isLoading={false} // With Suspense, we're guaranteed to have data
                onRefresh={refetch}
                actions={{
                    onAdd: handleAddClick,
                    onExport: handleExport,
                }}
                filters={{
                    searchFields: ["name"],
                    enableDateFilter: true,
                    getItemDate: (item) => item.createdAt,
                }}
                renderRowActions={(item) => (
                    <TableActions.RowActions
                        // onEdit={() => handleEditClick(item)}
                        onDelete={() => handleDeleteClick(item)}
                        isDeleting={
                            deleteItemMutation.isPending && productToDelete?.id === item.id
                        }
                    />
                )}
            />

            {/* Product Form Dialog */}
            <EntityForm
                size="md"
                open={formDialogOpen}
                onOpenChange={setFormDialogOpen}
                title={currentProduct ? "Edit item" : "Add New Item"}
                form={form}
                onSubmit={onSubmit}
                isSubmitting={ createItemMutation.isPending}
                // isSubmitting={
                //     createItemMutation.isPending || updateProductMutation.isPending
                // }
                submitLabel={currentProduct ? "Save Changes" : "Add Item"}
            >
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Item Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter item name" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="grid grid-cols-2 gap-3">
                    <FormField
                        control={form.control}
                        name="costPrice"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Cost Price</FormLabel>
                                <FormControl>
                                    <div className="relative">
                                        <BadgeCent className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                                        <Input placeholder="25,000" className="pl-8" {...field} />
                                    </div>
                                </FormControl>
                                <FormDescription>Enter the item cost in GHS</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="sellingPrice"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Selling Price</FormLabel>
                                <FormControl>
                                    <div className="relative">
                                        <BadgeCent className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                                        <Input placeholder="25,000" className="pl-8" {...field} />
                                    </div>
                                </FormControl>
                                <FormDescription>Enter the item price in GHS</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <div className="grid grid-cols-2 gap-3 items-center">
                    <FormField
                        control={form.control}
                        name="sku"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Item SKU</FormLabel>
                                <FormControl>
                                    <div className="relative">
                                        <Input placeholder="SKU-" className="" {...field} />
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                
                    <ImageUploadButton 
                        title="Item Image"
                        imageUrl={imageUrl} 
                        setImageUrl={setImageUrl} 
                        endpoint="itemImage"
                    />
                </div>
            </EntityForm>

            {/* Delete Confirmation Dialog */}
            <ConfirmationDialog
                open={deleteDialogOpen}
                onOpenChange={setDeleteDialogOpen}
                title="Delete Product"
                description={
                    productToDelete ? (
                        <>
                            Are you sure you want to delete{" "}
                            <strong>{productToDelete.name}</strong>?
                             This action cannot be undone.
                        </>
                    ) : (
                        "Are you sure you want to delete this product?"
                    )
                }
                onConfirm={handleConfirmDelete}
                isConfirming={deleteItemMutation.isPending}
                confirmLabel="Delete"
                variant="destructive"
            />
        </>
    );
}
