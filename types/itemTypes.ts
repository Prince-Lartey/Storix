interface ApiResponse<T> {
    success: boolean;
    data: T;
    error?: string | null;
}

export type ItemCreateDTO = {
    name: string;
    slug: string;
    sku: string;
    costPrice: number;
    sellingPrice: number;
    orgId: string;
    thumbnail?: string;
}

export interface BriefItemDTO {
    id: string;
    name: string;
    slug: string;
    salesCount: number      
    salesTotal: number 
    thumbnail: string | null;
    createdAt: Date | string;
}

interface Pagination {
    total: number;
    page: number;
    limit: number;
    pages: number;
}

interface BriefItemsData {
    data: BriefItemDTO[];
    pagination: Pagination;
}
export type BriefItemsResponse = ApiResponse<BriefItemsData>;