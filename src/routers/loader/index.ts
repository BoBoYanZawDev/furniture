import { authApi } from "@/api/index";
import {
  categoryTypeQuery,
  infinitePostsQuery,
  infiniteProductsQuery,
  onePostQuery,
  postsQuery,
  productsQuery,
  queryClient,
} from "@/api/query";
import useAuthStore, { Status } from "@/store/authStore";
import { redirect, type LoaderFunctionArgs } from "react-router";

// export const homeLoader = async () => {
//   try {
//     const products = await api.get("/user/products?limit=8");
//     const posts = await api.get("/user/posts/infinite?limit=3");

//     // const [products, posts] = await Promise.all([
//     //   api.get("/user/products?limit=8"),
//     //   api.get("/user/posts/infinite?limit=3"),
//     // ]);

//     return {
//       productsData: products.data,
//       postsData: posts.data,
//     };
//   } catch (e) {
//     console.log("Home Loader Error" + e);
//     throw e;
//   }
// };

export const homeLoader = async () => {
  await queryClient.ensureQueryData(postsQuery("?limit=3"));
  await queryClient.ensureQueryData(productsQuery("?limit=8"));
  return null;
};

export const loginLoader = async () => {
  try {
    const response = await authApi.get("/auth-check");
    if (response.status !== 200) {
      return null;
    }
    return redirect("/");
  } catch (e) {
    console.log("Login Loader Error" + e);
  }
};

export const otpLoader = async () => {
  const authStore = useAuthStore.getState();

  if (authStore.status !== Status.otp) {
    return redirect("/register");
  }
  return null;
};

export const confirmLoader = async () => {
  const authStore = useAuthStore.getState();

  if (authStore.status !== Status.confirm) {
    return redirect("/register");
  }
  return null;
};

export const blogInfiniteLoader = async () => {
  await queryClient.ensureInfiniteQueryData(infinitePostsQuery());
  return null;
};

export const postLoader = async ({ params }: LoaderFunctionArgs) => {
  const postId = params.postId ? Number(params.postId) : null;
  if (!postId) {
    throw new Error("No Post ID provided!");
  }
  await queryClient.ensureQueryData(postsQuery("?limit=6"));
  await queryClient.ensureQueryData(onePostQuery(postId));
  return { postId };
};

export const productLoader = async() => {
    await queryClient.ensureQueryData(categoryTypeQuery());
    await queryClient.prefetchInfiniteQuery(infiniteProductsQuery());
    return null;
}