import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import { Outlet } from "react-router";

function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <Header />
      <main className="flex-1 mt-20 px-4 lg:px-0">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default RootLayout;
