import { createItem, deleteItem, getOrgBriefItems, getOrgItems } from "@/actions/items";
import { ItemCreateDTO } from "@/types/itemTypes";


// Centralized API object for all product-related server actions
export const itemAPI = {
    getAllBrief: async (orgId: string) => {
        const res = await getOrgBriefItems(orgId);
        if (!res.success) {
            throw new Error(res.error || "Failed to fetch items");
        }
        return res.data.data;
    },

    create: async (data: ItemCreateDTO) => {
        const res = await createItem(data);
        if (!res.success) {
            throw new Error(res.error || "Failed to create product");
        }
        return res.data;
    },

    // update: async (id: string, data: UpdateProductPayload) => {
    //     const response = await editProduct(id, data);
    //     if (!response.success) {
    //         throw new Error(response.error || "Failed to update product");
    //     }
    //     return response.data;
    // },

    delete: async (id: string) => {
        const response = await deleteItem(id);
        if (!response.success) {
            throw new Error(response.error || "Failed to delete product");
        }
        return true;
    },
};
