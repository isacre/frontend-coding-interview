import { type RouteObject } from "react-router";
import SignInPage from "../../pages/sign-in";

const publicRoutes: RouteObject[] = [
  {
    path: "/",
    element: <SignInPage />,
  },
];

export default publicRoutes;
