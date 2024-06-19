import { IOption } from "./IOption";
import { IOptionWithIcon } from "./IOptionWithIcon";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import GridOnOutlinedIcon from "@mui/icons-material/GridOnOutlined";
import TranslateOutlinedIcon from "@mui/icons-material/TranslateOutlined";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";

export const idSideNav = "side-nav-codead";
export const idSideNavWrapper = "side-nav-wrapper-codead";
export const options: { [x: string]: IOption } = {
  home: { title: "Inicio", path: "" },
  manual: {
    title: "Manual",
    path: "manual",
  },
  examples: { title: "Ejemplos", path: "ejemplos" },
  language: { title: "Lenguaje", path: "lenguaje" },
  specificationModule: {
    title: "Módulo de Especificación",
    path: "modulo-de-especificacion",
  },
};
export const optionsWithIcons: { [x: string]: IOptionWithIcon } = {
  home: { title: "Inicio", path: "", icon: <HomeOutlinedIcon /> },
  manual: {
    title: "Manual",
    path: "manual",
    icon: <ArticleOutlinedIcon />,
  },
  examples: {
    title: "Ejemplos",
    path: "ejemplos",
    icon: <GridOnOutlinedIcon />,
  },
  language: {
    title: "CODEAD Language",
    path: "lenguaje",
    icon: <TranslateOutlinedIcon />,
  },
  specificationModule: {
    title: "Módulo de Especificación",
    path: "modulo-de-especificacion",
    icon: <CircleOutlinedIcon />,
  },
};
