import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/Home"
import ApiKey from "@/pages/ApiKey"
import PrivateRoute from "@/components/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoute><Home/></PrivateRoute>,
  },
  {
    path: "key",
    element: <ApiKey/>
  }
]);

export default router