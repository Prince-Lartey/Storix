"use server";

import { api } from "@/config/axios";
import { db } from "@/prisma/db";
import { BriefItemsResponse, ItemCreateDTO } from "@/types/itemTypes";
import { CategoryProps } from "@/types/types";
import { revalidatePath } from "next/cache";

export async function createItem(data: ItemCreateDTO) {
    try {
        const res = await api.post("/items", data)
        
        const item = res.data
        return {
            status: 200,
            data: item,
            error: null,
        };
    } catch (error) {
        console.log(error);
        return {
            status: 500,
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

export async function getOrgBriefItems(orgId: string, params = {}): Promise<BriefItemsResponse> {
    try {
        const res = await api.get(`/organisation/${orgId}/brief-items`, {params})
        
        return res.data;
    } catch (error) {
        console.log(error);
        return {
            success: false,
            data: {
                data: [],
                pagination: {
                    total: 0,
                    pages: 0,
                    page: 0,
                    limit: 0,
                },
            },
            error: "Failed to get brief items",
        };
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
