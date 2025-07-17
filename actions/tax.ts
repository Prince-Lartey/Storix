"use server";

import { MetaPros } from "@/components/dashboard/blogs/blog-edit-form";
import { UnitFormProps } from "@/components/Forms/inventory/UnitForm";
import { TaxRateFormProps } from "@/components/Forms/settings/TaxRateForm";
import { db } from "@/prisma/db";
import { revalidatePath } from "next/cache";

export async function createTax(data: TaxRateFormProps) {
    try {
        const newTax = await db.taxRate.create({
            data: {
                name: data.name,
                rate: data.rate,
                orgId: data.orgId,
            },
        });

        revalidatePath("/dashboard/settings/tax-rates");
        return {
            status: 200,
            data: newTax,
            error: null,
        };
    } catch (error) {
        console.log(error)
        return {
            status: 500,
            data: null,
            error: "Failed to create tax",
        };
    }
}

export async function getOrgTaxes(orgId: string) {
    try {
        const taxes = await db.taxRate.findMany({
            orderBy: {
                createdAt: "desc",
            },
            where: {
                orgId: orgId,
            },
        });
        
        return taxes;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function deleteTax(id: string) {
    try {
        const deleted = await db.taxRate.delete({
            where: {
                id,
            },
        });

        revalidatePath("/dashboard/settings/tax-rates");
        return {
            ok: true,
            data: deleted,
        };
    } catch (error) {
        console.log(error);
    }
}
