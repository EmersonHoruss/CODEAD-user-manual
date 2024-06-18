import { createBrowserRouter } from "react-router-dom";
import { Root } from "../components/root/Root";
import { options } from "../components/sidenav/constants";
import NotFound404 from "../pages/NotFound404";
import Manual from "../pages/Manual";
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
        path: options.manual.path,
        element: <Manual />,
      },

      {
        path: `${options.examples.path}`,
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
