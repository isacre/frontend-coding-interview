import { type RouteObject } from "react-router";
import SignInPage from "../../pages/SignIn";

const publicRoutes: RouteObject[] = [
  {
    path: "/",
    element: <SignInPage />,
  },
];

export default publicRoutes;
