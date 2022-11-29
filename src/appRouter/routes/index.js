import { AboutPage, Components, LandingPage } from "../../pages";
import { RequireAuth } from "./RequireAuth";

const authRoutes = [
  { name: "Home", path: "/", element: <LandingPage /> },

  { name: "Projects", path: "/projects", element: <div>projects</div> },
  {
    name: "How It Works",
    path: "/how-it-works",
    element: <div>how it works</div>,
  },
  { name: "features", path: "/features", element: <div>features</div> },
];

const dashBoardRoutes = [
  {
    name: "My Portfolio",
    path: "/my-portfolio",
    element: <div>My Portfolio</div>,
  },
];
export { authRoutes, dashBoardRoutes, RequireAuth };
