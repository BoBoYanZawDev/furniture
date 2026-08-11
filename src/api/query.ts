import { QueryClient } from "@tanstack/react-query";
import api from ".";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      // retry: 1,
    },
  },
});

export const fetchProducts = async (q?: string) => {
  const response = await api.get(`/user/products${q ?? ""}`);
  return response.data;
};

export const productsQuery = (q?: string) => ({
  queryKey: ["products", q],
  queryFn: () => fetchProducts(q),
  keepPreviousData: true,
});

export const fetchPosts = async (q?: string) => {
  const response = await api.get(`user/posts/infinite${q ?? ""}`);
  return response.data;
};

export const postsQuery = (q?: string) => ({
  queryKey: ["posts", q],
  queryFn: () => fetchPosts(q),
  keepPreviousData: true,
});

