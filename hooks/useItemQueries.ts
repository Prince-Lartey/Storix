import { itemAPI } from "@/services/items";
import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { toast } from "sonner";

// Query keys for caching
export const itemKeys = {
    all: ["items"] as const,
    lists: () => [...itemKeys.all, "list"] as const,
    list: (filters: any) => [...itemKeys.lists(), { filters }] as const,
    filteredList: (dateFilter: any, searchQuery: string) => [...itemKeys.lists(), { dateFilter, searchQuery }] as const,
    details: () => [...itemKeys.all, "detail"] as const,
    detail: (id: string) => [...itemKeys.details(), id] as const,
};

export function useProducts() {
    // Get all products with standard loading states
    const {
        data: products = [],
        isLoading,
        isError,
        error,
        refetch,
    } = useQuery({
        queryKey: itemKeys.lists(),
        queryFn: itemAPI.getAll,
    });

  return {
    products,
    isLoading,
    isError,
    error,
    refetch,
  };
}

/**
 * Hook for fetching products with React Suspense
 * Use this when the component is wrapped in a Suspense boundary
 */
export function useSuspenseProducts() {
  // Get all products with Suspense (data is guaranteed to be defined)
  const { data: products, refetch } = useSuspenseQuery({
    queryKey: productKeys.lists(),
    queryFn: productAPI.getAll,
  });

  return {
    products,
    refetch,
  };
}

export function useProduct(id: string) {
  // Get a single product
  return useQuery({
    queryKey: productKeys.detail(id),
    queryFn: () => productAPI.getById(id),
    enabled: Boolean(id), // Only run if ID is provided
  });
}

export function useCreateProduct() {
  const queryClient = useQueryClient();

  // Create a new product
  return useMutation({
    mutationFn: (data: ProductPayload) => productAPI.create(data),
    onSuccess: () => {
      toast.success("Product added successfully");
      // Invalidate products list to trigger a refetch
      queryClient.invalidateQueries({ queryKey: productKeys.lists() });
    },
    onError: (error: Error) => {
      toast.error("Failed to add product", {
        description: error.message || "Unknown error occurred",
      });
    },
  });
}

export function useUpdateProduct() {
  const queryClient = useQueryClient();

  // Update an existing product
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateProductPayload }) =>
      productAPI.update(id, data),
    onSuccess: (data, variables) => {
      toast.success("Product updated successfully");
      // Invalidate specific product detail and list queries
      queryClient.invalidateQueries({
        queryKey: productKeys.detail(variables.id),
      });
      queryClient.invalidateQueries({ queryKey: productKeys.lists() });
    },
    onError: (error: Error) => {
      toast.error("Failed to update product", {
        description: error.message || "Unknown error occurred",
      });
    },
  });
}

export function useDeleteProduct() {
  const queryClient = useQueryClient();

  // Delete a product
  return useMutation({
    mutationFn: (id: string) => productAPI.delete(id),
    onSuccess: () => {
      toast.success("Product deleted successfully");
      // Invalidate products list to trigger a refetch
      queryClient.invalidateQueries({ queryKey: productKeys.lists() });
    },
    onError: (error: Error) => {
      toast.error("Failed to delete product", {
        description: error.message || "Unknown error occurred",
      });
    },
  });
}
