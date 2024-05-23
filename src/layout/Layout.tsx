import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="flex flex-col gap-4">
      <Header />
      <main className="lg:container mx-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
