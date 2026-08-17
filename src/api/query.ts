import { keepPreviousData, QueryClient } from "@tanstack/react-query";
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

const fetchInfinitePosts = async ({ pageParam = null })  => {
  const query = pageParam ? `?limit=6&cursor=${pageParam}` : "?limit=6";
  const response = await api.get(`user/posts/infinite${query}`);
  return response.data;
};

export const infinitePostsQuery = () => ({
  queryKey: ["posts", "infinite"],
  queryFn: fetchInfinitePosts,
  initialPageParam: null, //start with no parm
  getNextPageParam: (lastPage: any) => lastPage.nextCursor ?? undefined,
  // getPreviousPageParam: (firstPage ,pages) => firstPage.prevCursor  ??  undefined
});

export const fetchOnePost = async (id: number) => {
  const response = await api.get(`/user/posts/${id}`);
  if (!response) {
    throw new Response("", {
      status: 404,
      statusText: "Not Found",
    });
  }
  return response.data;
};

export const onePostQuery = (id: number) => ({
  queryKey: ["posts", "detail", id],
  queryFn: () => fetchOnePost(id),
});

const fetchCategoryType = async (q = null) =>
  api.get(`/user/filter-type${q ?? ""}`).then((res) => res.data);

export const categoryTypeQuery = (q = null) => ({
  queryKey: ["category", "type", q],
  queryFn: () => fetchCategoryType(q),
});

type FetchInfiniteProductsType = {
  pageParam?: number | null;
  categories?: string | null;
  types?: string | null;
};

const fetchInfiniteProducts = async ({
  pageParam = null,
  categories = null,
  types = null,
}: FetchInfiniteProductsType) => {
  let q = pageParam ? `?limit9&cursor=${pageParam}` : "?limit9";
  if (categories) q += `&category=${categories}`;
  if (types) q += `&type=${types}`;
  const response = await api.get(`user/products${q}`);
  return response.data;
};

export const infiniteProductsQuery = (
  categories: string | null = null,
  types: string | null = null,
) => ({
  queryKey: ["products", "infinite", categories, types],
  queryFn: ({ pageParam }: { pageParam?: number | null }) =>
    fetchInfiniteProducts({ pageParam, categories, types }),
  initialPageParam: null, //start with no parm
  getNextPageParam: (lastPage: any) => lastPage.nextCursor ?? undefined,
  placeHolderData : keepPreviousData
  // getPreviousPageParam: (firstPage ,pages) => firstPage.prevCursor  ??  undefined
});
