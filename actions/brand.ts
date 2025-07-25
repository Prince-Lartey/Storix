"use server";

import { MetaPros } from "@/components/dashboard/blogs/blog-edit-form";
import { BrandFormProps } from "@/components/Forms/inventory/BrandForm";
import { UnitFormProps } from "@/components/Forms/inventory/UnitForm";
import { db } from "@/prisma/db";
import { revalidatePath } from "next/cache";

export async function createBrand(data: BrandFormProps) {
    try {
        const existingBrand = await db.brand.findFirst({
            where: {
                slug: data.slug,
                orgId: data.orgId,
            },
        });
        if (existingBrand) {
            return {
                status: 400,
                data: null,
                error: "Brand already exist",
            };
        }

        const newBrand = await db.brand.create({
            data: {
                name: data.name,
                slug: data.slug,
                orgId: data.orgId,
            },
        });

        revalidatePath("/dashboard/inventory/brands");
        return {
            status: 200,
            data: newBrand,
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

export async function getOrgBrands(orgId: string) {
    try {
        const brands = await db.brand.findMany({
            orderBy: {
                createdAt: "desc",
            },
            where: {
                orgId: orgId,
            },
        });
        
        return brands;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function deleteBrand(id: string) {
    try {
        const deleted = await db.brand.delete({
            where: {
                id,
            },
        });

        revalidatePath("/dashboard/inventory/brands");
        return {
            ok: true,
            data: deleted,
        };
    } catch (error) {
        console.log(error);
    }
}
