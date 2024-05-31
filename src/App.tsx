import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer bodyClassName="toastBody"/>
    </>
  );
}

export default App;
