import { createItem, getOrgBriefItems, getOrgItems } from "@/actions/items";
import { ItemCreateDTO } from "@/types/itemTypes";


// Centralized API object for all product-related server actions
export const itemAPI = {
    getAllBrief: async (orgId: string) => {
        const response = await getOrgBriefItems(orgId);
        if (!response.success) {
            throw new Error(response.error || "Failed to fetch items");
        }
        return response.data;
    },

    // create: async (data: ItemCreateDTO) => {
    //     const response = await createItem(data);
    //     if (!response.status || response.status !== 200) {
    //         throw new Error(response.error || "Failed to create product");
    //     }
    //     return response.data;
    // },

    // update: async (id: string, data: UpdateProductPayload) => {
    //     const response = await editProduct(id, data);
    //     if (!response.success) {
    //         throw new Error(response.error || "Failed to update product");
    //     }
    //     return response.data;
    // },

    // delete: async (id: string) => {
    //     const response = await deleteProduct(id);
    //     if (!response.success) {
    //         throw new Error(response.error || "Failed to delete product");
    //     }
    //     return true;
    // },
};
