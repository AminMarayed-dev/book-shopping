import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import ContactUs from "../pages/ContactUs";
import AboutUs from "../pages/AboutUs";
import Book from "../pages/book/[id]/Book";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Layout/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:'/about',
                element:<AboutUs/>
            },
            {
                path:'/contact',
                element:<ContactUs/>
            },
            {
                path:'/book/:bookId',
                element:<Book/>
            }
        ]
    }
])