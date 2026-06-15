import api from "@/api/index";

export const homeLoader = async () => {
  try {
    const response  = await api.get("/user/products");
    return response.data ;
  } catch (e) {
    console.log("Home Loader Error" + e);
    throw e;
  }
};
