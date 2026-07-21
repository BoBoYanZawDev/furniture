import api, { authApi } from "@/api";
import { redirect } from "react-router";
import type { ActionFunctionArgs } from "react-router";
import { AxiosError } from "axios";

export const loginAction = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const authData = {
    phone: formData.get("phone"),
    password: formData.get("password"),
  };
  try {
    const response = await authApi.post("login", authData);
    if (response.status !== 200) {
      return { error: response?.data?.message || "Login Failed!" };
    }
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
