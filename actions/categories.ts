"use server";

import { CategoryFormProps } from "@/components/Forms/inventory/CategoryFormModal";
import { db } from "@/prisma/db";
import { CategoryProps } from "@/types/types";
import { revalidatePath } from "next/cache";

export async function createCategory(data: CategoryFormProps) {
    try {
        const existingCategory = await db.category.findUnique({
            where: {
                slug: data.slug,
                orgId: data.orgId,
            },
        });
        if (existingCategory) {
            return {
                status: 400,
                data: null,
                error: "Category already exist",
            };
        }
        const newCategory = await db.category.create({
            data: {
                title: data.title,
                slug: data.slug,
                description: data.description,
                orgId: data.orgId,
            },
        });
        // console.log(newCategory);
        revalidatePath("/dashboard/inventory/categories");
        return {
            status: 200,
            data: newCategory,
            error: null,
        };
    } catch (error) {
        console.log(error);
        return {
            status: 200,
            data: null,
            error: "Failed to create category",
        };
    }
}

export async function getOrgCategories(orgId: string) {
    try {
        const categories = await db.category.findMany({
            orderBy: {
                createdAt: "desc",
            },
            where: {
                orgId: orgId,
            },
        });
        
        return categories;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function getAllCategories() {
  try {
    const categories = await db.category.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return categories;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function updateCategoryById(id: string, data: CategoryProps) {
  try {
    const updatedCategory = await db.category.update({
      where: {
        id,
      },
      data,
    });
    revalidatePath("/dashboard/categories");
    return updatedCategory;
  } catch (error) {
    console.log(error);
  }
}

export async function getCategoryById(id: string) {
  try {
    const category = await db.category.findUnique({
      where: {
        id,
      },
    });
    return category;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteCategory(id: string) {
    try {
        const deletedCategory = await db.category.delete({
            where: {
                id,
            },
        });

        return {
            ok: true,
            data: deletedCategory,
        };
    } catch (error) {
        console.log(error);
    }
}

export async function createBulkCategories(categories: CategoryProps[]) {
  try {
    for (const category of categories) {
    //   await createCategory(category);
    }
  } catch (error) {
    console.log(error);
  }
}
