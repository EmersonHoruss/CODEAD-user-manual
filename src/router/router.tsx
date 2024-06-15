import { createBrowserRouter } from "react-router-dom";
import { Root } from "../components/root/Root";
import { options } from "../components/sidenav/constants";
import NotFound404 from "../pages/NotFound404";
import GettingStarted from "../pages/GettingStarted";
import Uses from "../pages/Uses";
import Examples from "../pages/Examples";
import Language from "../pages/Language";
import SpecificationModule from "../pages/SpecificationModule";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound404 />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: options.gettingStarted.path,
        element: <GettingStarted />,
      },
      {
        path: `${options.gettingStarted.path}/${options.uses.path}`,
        element: <Uses />,
      },
      {
        path: `${options.gettingStarted.path}/${options.examples.path}`,
        element: <Examples />,
      },
      {
        path: options.language.path,
        element: <Language />,
      },
      {
        path: options.specificationModule.path,
        element: <SpecificationModule />,
      },
    ],
  },
]);

export default router;
