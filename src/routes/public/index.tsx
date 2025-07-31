import { type RouteObject } from "react-router-dom";
import SignInPage from "../../pages/sign-in";

const publicRoutes: RouteObject[] = [
  {
    path: "/",
    element: <SignInPage />,
  },
];

export default publicRoutes;
