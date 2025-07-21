"use server";

import { api } from "@/config/axios";
import { db } from "@/prisma/db";
import { ItemFormProps } from "@/types/itemTypes";
import { CategoryProps } from "@/types/types";
import { revalidatePath } from "next/cache";

export async function createItem(data: ItemFormProps) {
    try {
        const existingItem = await db.item.findUnique({
            where: {
                slug: data.slug,
                orgId: data.orgId,
            },
        });
        if (existingItem) {
            return {
                status: 400,
                data: null,
                error: "Item already exist",
            };
        }
        const newItem = await db.item.create({
            data,
        });
        // console.log(newItem);
        revalidatePath("/dashboard/inventory/items");
        return {
            status: 200,
            data: newItem,
            error: null,
        };
    } catch (error) {
        console.log(error);
        return {
            status: 200,
            data: null,
            error: "Failed to create item",
        };
    }
}

export async function getOrgItems(orgId: string, params = {}) {
    try {
        const res = await api.get(`/organisation/${orgId}/items`, {params})
        
        const items = res.data
        return items;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function getOrgBriefItems(orgId: string, params = {}) {
    try {
        const res = await api.get(`/organisation/${orgId}/brief-items`, {params})
        
        const items = res.data
        return items;
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

export async function deleteItem(id: string) {
    try {
        const deletedItem = await db.item.delete({
            where: {
                id,
            },
        });

        return {
            ok: true,
            data: deletedItem,
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
