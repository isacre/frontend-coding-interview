import { type RouteObject } from "react-router-dom";
import AllPhotosPage from "../../pages/all-photos";

const protectedRoutes: RouteObject[] = [
  {
    path: "/all-photos",
    element: <AllPhotosPage />,
  },
];

export default protectedRoutes;
