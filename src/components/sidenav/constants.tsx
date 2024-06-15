import { IOption } from "./IOption";
import { IOptionWithIcon } from "./IOptionWithIcon";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import StartOutlinedIcon from "@mui/icons-material/StartOutlined";
import PanToolAltOutlinedIcon from "@mui/icons-material/PanToolAltOutlined";
import GridOnOutlinedIcon from "@mui/icons-material/GridOnOutlined";
import TranslateOutlinedIcon from "@mui/icons-material/TranslateOutlined";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";

export const idSideNav = "side-nav-codead";
export const idSideNavWrapper = "side-nav-wrapper-codead";
export const options: { [x: string]: IOption } = {
  home: { title: "Inicio", path: "" },
  gettingStarted: {
    title: "Comenzando",
    path: "comenzando",
  },
  uses: { title: "Usos", path: "usos" },
  examples: { title: "Ejemplos", path: "ejemplos" },
  language: { title: "Lenguaje", path: "lenguaje" },
  specificationModule: {
    title: "Módulo de Especificación",
    path: "modulo-de-especificacion",
  },
};
export const optionsWithIcons: { [x: string]: IOptionWithIcon } = {
  home: { title: "Inicio", path: "", icon: <HomeOutlinedIcon /> },
  gettingStarted: {
    title: "Comenzando",
    path: "comenzando",
    icon: <StartOutlinedIcon />,
  },
  uses: {
    title: "Usos",
    path: "comenzando/usos",
    icon: <PanToolAltOutlinedIcon />,
  },
  examples: {
    title: "Ejemplos",
    path: "comenzando/ejemplos",
    icon: <GridOnOutlinedIcon />,
  },
  language: {
    title: "Lenguaje",
    path: "lenguaje",
    icon: <TranslateOutlinedIcon />,
  },
  specificationModule: {
    title: "Módulo de Especificación",
    path: "modulo-de-especificacion",
    icon: <CircleOutlinedIcon />,
  },
};
