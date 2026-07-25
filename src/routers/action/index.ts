import api, { authApi } from "@/api";
import { redirect } from "react-router";
import type { ActionFunctionArgs } from "react-router";
import { AxiosError } from "axios";
import useAuthStore, { Status } from "@/store/authStore";

export const loginAction = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const credentials = Object.fromEntries(formData);
  // const authData = {
  //   phone: formData.get("phone"),
  //   password: formData.get("password"),
  // };
  try {
    const response = await authApi.post("login", credentials);
    if (response.status !== 200) {
      return { error: response?.data?.message || "Login Failed!" };
    }
    // const baseUrl = import.meta.env.VITE_API_URL;
    // const response =await fetch(`${baseUrl}login`,{
    //   method :"POST",
    //   headers : {
    //     "Content-Type" : "application/json"
    //   },
    //   body : JSON.stringify(credentials),
    //   credentials : "include"
    // });

    const redirectTo = new URL(request.url).searchParams.get("redirect") || "/";
    return redirect(redirectTo);
  } catch (err) {
    if (err instanceof AxiosError) {
      return err.response?.data || { error: "Login Failed!" };
    }
    console.log("Login Api Error" + err);
    throw err;
  }
};

export const logoutAction = async () => {
  try {
    const response = await api.post("logout");
    if (response.status !== 200) {
      return { error: response.data || "Logout Failed!" };
    }
    return redirect("/login");
  } catch (err) {
    if (err instanceof AxiosError) {
      return err.response?.data || { error: "Logout Failed!" };
    }
    console.log("Logout Api Error" + err);
    throw err;
  }
};


export const registerAction = async ({ request }: ActionFunctionArgs) => {
  const authStore = useAuthStore.getState();
  const formData = await request.formData();
  const credentials = Object.fromEntries(formData);
  try {
    const response = await authApi.post("register", credentials);
    if (response.status !== 200) {
      return { error: response?.data?.message || "Register Failed!" };
    }
    const data = response.data ;
    authStore.setAuth(data.phone_no , data.token, Status.otp);

    return redirect("/register/otp");
  } catch (err) {
    if (err instanceof AxiosError) {
      return err.response?.data || { error: "Register Failed!" };
    }
    console.log("Login Api Error" + err);
    throw err;
  }
};
