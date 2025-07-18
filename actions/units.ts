"use server";

import { MetaPros } from "@/components/dashboard/blogs/blog-edit-form";
import { UnitFormProps } from "@/components/Forms/inventory/UnitForm";
import { db } from "@/prisma/db";
import { revalidatePath } from "next/cache";

export async function createUnit(data: UnitFormProps) {
    try {
        const newUnit = await db.unit.create({
            data: {
                name: data.name,
                symbol: data.symbol,
                orgId: data.orgId,
            },
        });

        revalidatePath("/dashboard/inventory/units");
        return {
            status: 200,
            data: newUnit,
            error: null,
        };
    } catch (error) {
        console.log(error)
        return {
            status: 500,
            data: null,
            error: "Failed to create unit",
        };
    }
}

export async function getOrgUnits(orgId: string) {
    try {
        const units = await db.unit.findMany({
            orderBy: {
                createdAt: "desc",
            },
            where: {
                orgId: orgId,
            },
        });
        
        return units;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function deleteUnit(id: string) {
    try {
        const deleted = await db.unit.delete({
            where: {
                id,
            },
        });

        revalidatePath("/dashboard/inventory/units");
        return {
            ok: true,
            data: deleted,
        };
    } catch (error) {
        console.log(error);
    }
}
