import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { ChakraProvider } from "@chakra-ui/react";

function Layout() {
  return (
    <ChakraProvider>
      <div className="flex flex-col  bg-gray-100 ">
        <Header />
        <main className="">
          <Outlet />
        </main>
        <Footer />
      </div>
    </ChakraProvider>
  );
}

export default Layout;
