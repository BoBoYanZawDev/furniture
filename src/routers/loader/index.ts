import api, { authApi } from "@/api/index";
import { redirect } from "react-router";

export const homeLoader = async () => {
  try {
    const response = await api.get("/user/products");
    return response.data;
  } catch (e) {
    console.log("Home Loader Error" + e);
    throw e;
  }
};

export const loginLoader = async () => {
  try {
    const response = await authApi.get("/auth-check");
    if(response.status !== 200){
        return null;
    }
    return redirect('/');
  } catch (e) {
    console.log("Login Loader Error" + e);
  }
};
