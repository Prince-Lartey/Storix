"use client";

import { createBrand } from "@/actions/brand";
import { createCategory } from "@/actions/categories";
import { createUnit } from "@/actions/units";
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

export type CategoryFormProps = {
    title: string;
    slug: string;
    description?: string;
    orgId: string;
    imageUrl?: string;
}

export function CategoryFormModal({
    orgId,
}: {
    orgId: string
}) {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<CategoryFormProps>({

    });
    const [err, setErr] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const saveBrand = async (data: CategoryFormProps) => {
        setLoading(true);
        data.orgId = orgId;
        data.slug = generateSlug(data.title)
        data.imageUrl = "/placeholder.png"

        try {
            const res = await createCategory(data);
            console.log(res);
            if (res.status !== 200) {
                setLoading(false);
                toast.error(res.error);
                setErr(res.error ?? "")
                return
            }
            setLoading(false)
            toast.success("Category created successfully")
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
                        Create Category
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
                        <CardTitle>Create New Category</CardTitle>
                    </CardHeader>
                    <CardFooter className="flex flex-col gap-4">
                        <form onSubmit={handleSubmit(saveBrand)} className="flex flex-col w-full gap-2">
                            <TextInput
                                register={register}
                                errors={errors}
                                label="Category Title"
                                name="title"
                            />
                            <TextArea
                                register={register}
                                errors={errors}
                                label="Description"
                                name="description"
                                isRequired={false}
                            />
                            {loading ? (
                                <Button disabled>
                                    <Loader2 className="animate-spin mr-2 h-4 w-4" />
                                    Please wait...
                                </Button>
                            ) : (
                                <Button>
                                    <Plus className="mr-2 h-4 w-4" /> Create Category
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
