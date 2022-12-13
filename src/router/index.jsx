import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/Home"
import ApiKey from "@/pages/ApiKey"
import PrivateRoute from "@/components/PrivateRoute";
import CityWeather from "@/pages/CityWeather";
import { cityLoader } from "./loaders";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoute><Home/></PrivateRoute>
  },
  {
    path: "key",
    element: <ApiKey/>
  },
  {
    path: "city/:cityId",
    element: <PrivateRoute><CityWeather/></PrivateRoute>,
    loader: ({ params }) => {
      return cityLoader(params.cityId);
    },
  }
]);

export default router