import { type RouteObject } from "react-router";
import AllPhotosPage from "../../pages/all-photos";

const protectedRoutes: RouteObject[] = [
  {
    path: "/all-photos",
    element: <AllPhotosPage />,
  },
];

export default protectedRoutes;
