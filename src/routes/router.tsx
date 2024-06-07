import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import ContactUs from "../pages/ContactUs";
import AboutUs from "../pages/AboutUs";
import Book from "../pages/book/[id]/Book";
import Login from "../pages/login/Login";
import ThemeContextProvider from "../context/ThemeContextProvider";
import { CssBaseline } from "@mui/material";
import Basket from "../pages/basket/Basket";
import Dashboard from "../pages/dashboard/Dashboard";


// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element = {<Layout/>}>        
//       <Route index element={<Home />} />
//       <Route path="/about" element={<AboutUs />} />
//       <Route path="/contact" element={<ContactUs />} />
//       <Route path="/book/:bookId" element={<Book />} />
//     </Route>
//   )
// )

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Layout/>}>        
//       <Route index element={<Home />} />
//       <Route path="/about" element={<AboutUs />} />
//       <Route path="/contact" element={<ContactUs />} />
//       <Route path="/book/:bookId" element={<Book />} />
//     </Route>
//   )
// )





export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/book/:bookId",
        element: <Book />,
      },
    ],
  },
  {
    path: "/login",
    element: (
      <ThemeContextProvider>
        <CssBaseline/>
        <Login />
      </ThemeContextProvider>
    ),
  },
  {
    path: "/basket",
    element: (
      <ThemeContextProvider>
        <CssBaseline/>
        <Basket />
      </ThemeContextProvider>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <ThemeContextProvider>
        <CssBaseline/>
        <Dashboard />
      </ThemeContextProvider>
    ),
  },
]);
