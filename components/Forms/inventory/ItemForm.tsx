"use client";

import { createCategory } from "@/actions/categories";
import { createItem } from "@/actions/items";
import TextArea from "@/components/FormInputs/TextAreaInput";
import TextInput from "@/components/FormInputs/TextInput";
import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { generateSlug } from "@/lib/generateSlug";
import { LayoutGrid, Loader2, Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export type ItemFormProps = {
    name: string;
    slug: string;
    sku: string;
    costPrice: number;
    sellingPrice: number;
    orgId: string;
    thumbnail?: string;
}

export function ItemForm({
    orgId,
}: {
    orgId: string
}) {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<ItemFormProps>({

    });
    const [err, setErr] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const saveItem = async (data: ItemFormProps) => {
        setLoading(true);
        data.orgId = orgId;
        data.slug = generateSlug(data.name)
        data.sellingPrice = Number(data.sellingPrice);
        data.costPrice = Number(data.costPrice);
        data.thumbnail = "/placeholder.png"

        try {
            const res = await createItem(data);
            console.log(res);
            if (res.status !== 200) {
                setLoading(false);
                toast.error(res.error);
                setErr(res.error ?? "")
                return
            }
            setLoading(false)
            toast.success("Item created successfully")
            reset();
            window.location.reload();
        } catch (error) {
            setLoading(false);
            toast.error("Something went wrong");
            console.log(error);
        }
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button size="sm" className="h-8 gap-1">
                    <LayoutGrid className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                        Create Item
                    </span>
                    <span className="md:sr-only">Add</span>
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[625px]">
                <DialogHeader>
                    <DialogTitle></DialogTitle>
                </DialogHeader>
                <Card className="w-full ">
                    <CardHeader>
                        <CardTitle>Create New Item</CardTitle>
                    </CardHeader>
                    <CardFooter className="flex flex-col gap-4">
                        <form onSubmit={handleSubmit(saveItem)} className="flex flex-col w-full gap-2">
                            <TextInput
                                register={register}
                                errors={errors}
                                label="Item Name"
                                name="name"
                            />
                            <TextInput
                                register={register}
                                errors={errors}
                                label="Item SKU"
                                name="sku"
                            />
                            <div className="grid md:grid-cols-2 gap-4">
                                <TextInput
                                    register={register}
                                    errors={errors}
                                    label="Cost Price"
                                    name="costPrice"
                                />
                                <TextInput
                                    register={register}
                                    errors={errors}
                                    label="Selling Price"
                                    name="sellingPrice"
                                />
                            </div>
                            {loading ? (
                                <Button disabled>
                                    <Loader2 className="animate-spin mr-2 h-4 w-4" />
                                    Please wait...
                                </Button>
                            ) : (
                                <Button>
                                    <Plus className="mr-2 h-4 w-4" /> Create Item
                                </Button>
                            )}
                        </form>
                    </CardFooter>
                </Card>
                {/* <DialogFooter>
                <Button type="submit">Save changes</Button>
                </DialogFooter> */}
            </DialogContent>
        </Dialog>
    );
}
