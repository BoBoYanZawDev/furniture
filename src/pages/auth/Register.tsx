import RegisterForm from "@/components/auth/RegisterForm";
import { Icons } from "@/components/icons";
import { siteConfig } from "@/configs/site";
import { Link } from "react-router";

function Register() {
  return (
    <div className="flex min-h-screen place-items-center">
      <Link
        to="/"
        className="text-foreground/80 hover:text-foreground transition-color fixed top-6 left-8 flex items-center text-lg font-bold tracking-tight"
      >
        <Icons.logo className="mr-2 size-6" aria-hidden="true" />
        <span>{siteConfig?.name}</span>
        <span className="sr-only">Home</span>
      </Link>
      <RegisterForm />
    </div>
  );
}

export default Register;
