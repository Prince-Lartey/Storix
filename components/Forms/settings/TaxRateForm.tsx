"use client";

import { createTax } from "@/actions/tax";
import { createUnit } from "@/actions/units";
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
import { LayoutGrid, Loader2, Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export type TaxRateFormProps = {
    name: string;
    rate: number;
    orgId: string;
}

export function TaxRateForm({
    orgId,
}: {
    orgId: string
}) {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<TaxRateFormProps>({

    });
    const [err, setErr] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const saveTax = async (data: TaxRateFormProps) => {
        setLoading(true);
        data.orgId = orgId;
        data.rate = Number(data.rate);
        console.log(data);
        try {
            const res = await createTax(data);
            console.log(res);
            if (res.status !== 200) {
                setLoading(false);
                toast.error(res.error);
                setErr(res.error ?? "")
                return
            }
            setLoading(false)
            toast.success("Tax created successfully")
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
                        Create Tax
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
                        <CardTitle>Create New Tax</CardTitle>
                    </CardHeader>
                    <CardFooter className="flex flex-col gap-4">
                        <form onSubmit={handleSubmit(saveTax)} className="flex flex-col w-full gap-2">
                            <TextInput
                                register={register}
                                errors={errors}
                                label="Tax Title"
                                name="name"
                            />
                            <TextInput
                                register={register}
                                errors={errors}
                                label="Rate(%)"
                                name="rate"
                                type="number"
                                placeholder="e.g. 15"
                                toolTipText="Enter the tax rate in percentage"
                                unit="%"
                            />
                            {loading ? (
                                <Button disabled>
                                    <Loader2 className="animate-spin mr-2 h-4 w-4" />
                                    Please wait...
                                </Button>
                            ) : (
                                <Button>
                                    <Plus className="mr-2 h-4 w-4" /> Create Tax
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
