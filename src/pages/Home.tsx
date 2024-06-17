import { optionsWithIcons } from "../components/sidenav/constants";
import PageTemplate from "./PageTemplate";
import HourglassEmptyOutlinedIcon from "@mui/icons-material/HourglassEmptyOutlined";
import AutoFixHighOutlinedIcon from "@mui/icons-material/AutoFixHighOutlined";
import AccessibilityNewOutlinedIcon from "@mui/icons-material/AccessibilityNewOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";

const Home = () => {
  return (
    <PageTemplate option={optionsWithIcons.home}>
      <div className="w-full h-full flex flex-col">
        <span className="text-3xl font-semibold text-blue-500">
          Crea un backend con CODEAD
        </span>
        <p className="pt-4 pb-4 font-normal">
          CODEAD fue creado a partir de la palabra CODE que significa código y
          AD por las iniciales de sus creadores, A de Albiter Dionicio y D de
          David Perales. El objetivo es ofrecerte la ayuda de crear o generar un
          backend en segundos en Spring Boot 3 con las funcionalidades básicas
          de creación, lectura, actualización y eliminación lógica y física.
        </p>
        <div className="flex h-full justify-center">
          <img
            className="w-10/12 h-5/6"
            src="src/assets/images/CODEAD.JPG"
            alt="CODEAD presentación"
          />
        </div>

        <span className="text-3xl font-semibold text-blue-500 pt-10 pb-10">
          Por qué usar CODEAD
        </span>
        <div className="flex gap-4 pb-10">
          <div className="border rounded-md p-6 flex flex-col">
            <div className="w-fit h-fit flex items-center justify-center border border-blue-500 rounded-xl p-2 shadow-md">
              <HourglassEmptyOutlinedIcon className="text-blue-500" />
            </div>
            <span className="pt-4 pb-1 font-bold">Ahorra tiempo</span>
            <span>
              Genera un backend en segundos con las funcionalidades básicas de
              creación, lectura, actualización y eliminación tanto física como
              lógica.
            </span>
          </div>

          <div className="border rounded-md p-6 flex flex-col">
            <div className="w-fit h-fit flex items-center justify-center border border-blue-500 rounded-xl p-2 shadow-md">
              <AutoFixHighOutlinedIcon className="text-blue-500" />
            </div>
            <span className="pt-4 pb-1 font-bold">Mejora la calidad</span>
            <span>
              Genera un backend uniformizado aumentando la consistencia del
              código de esta forma mejora la legibilidad siguiendo las buenas
              prácticas.
            </span>
          </div>

          <div className="border rounded-md p-6 flex flex-col">
            <div className="w-fit h-fit flex items-center justify-center border border-blue-500 rounded-xl p-2 shadow-md">
              <AccessibilityNewOutlinedIcon className="text-blue-500" />
            </div>
            <span className="pt-4 pb-1 font-bold">Intutivo</span>
            <span>
              CODEAD está realizado para ser lo más fácil de entender sin contar
              con algún manual, los íconos y botones hablan por sí mismo.
            </span>
          </div>

          <div className="border rounded-md p-6 flex flex-col">
            <div className="w-fit h-fit flex items-center justify-center border border-blue-500 rounded-xl p-2 shadow-md">
              <ArticleOutlinedIcon className="text-blue-500" />
            </div>
            <span className="pt-4 pb-1 font-bold">Documentación</span>
            <span>
              Tiene buena documentación en detalle sobre sus usos y ejemplos,
              además complementa con descripción minuciosa de los componentes
              esenciales como el lenguaje CODEAD y la librería de utilidades,
              especificación.
            </span>
          </div>
        </div>

        <span className="text-3xl font-semibold text-blue-500 pt-10 pb-10">
          Tecnologías Principales
        </span>
        <div className="flex gap-4 pb-10 justify-center">
          <div className="rounded-xl w-16 h-16 p-1 flex items-center justify-center border-blue-500 border">
            <img src="src/assets/icons/react.svg" alt="react icon" />
          </div>
          <div className="rounded-xl w-16 h-16 p-1 flex items-center justify-center border-blue-500 border">
            <img src="src/assets/icons/typescript.svg" alt="typescript icon" />
          </div>
          <div className="rounded-xl w-16 h-16 p-1 flex items-center justify-center border-blue-500 border">
            <img
              src="src/assets/icons/spring-boot.svg"
              alt="spring-boot icon"
            />
          </div>
          <div className="rounded-xl w-16 h-16 p-1 flex items-center justify-center border-blue-500 border">
            <img src="src/assets/icons/java.svg" alt="java icon" />
          </div>
          <div className="rounded-xl w-16 h-16 p-1 flex items-center justify-center border-blue-500 border">
            <img src="src/assets/icons/git.svg" alt="git icon" />
          </div>
          <div className="rounded-xl w-16 h-16 p-1 flex items-center justify-center border-blue-500 border">
            <img src="src/assets/icons/github.svg" alt="github icon" />
          </div>
          <div className="rounded-xl w-16 h-16 p-1 flex items-center justify-center border-blue-500 border">
            <img src="src/assets/icons/postman.svg" alt="postman icon" />
          </div>
          <div className="rounded-xl w-16 h-16 p-1 flex items-center justify-center border-blue-500 border">
            <img src="src/assets/icons/css.svg" alt="css icon" />
          </div>
          <div className="rounded-xl w-16 h-16 p-1 flex items-center justify-center border-blue-500 border">
            <img src="src/assets/icons/html.svg" alt="html icon" />
          </div>
          <div className="rounded-xl w-16 h-16 p-1 flex items-center justify-center border-blue-500 border">
            <img
              src="src/assets/icons/tailwindcss.svg"
              alt="tailwindcss icon"
            />
          </div>
        </div>

        <span className="text-3xl font-semibold text-blue-500 pt-10 pb-10">
          Staff
        </span>
        <div className="flex gap-12 pb-10 justify-center">
          <div className="flex flex-col items-center">
            <img
              src="src/assets/images/david-perales.jpeg"
              alt="perfil de david perales"
              className="rounded-full w-32 h-32"
            />
            <span className="font-semibold pt-2">David Perales</span>
            <ul className="flex gap-4 text-sm">
              <li>Backend</li>
              <li>Frontend</li>
            </ul>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="src/assets/images/albiter-dionicio.jpg"
              alt="perfil de albiter dionicio"
              className="rounded-full w-32 h-32"
            />
            <span className="font-semibold pt-2">Albiter Dionicio</span>
            <ul className="flex gap-4 text-sm">
              <li>DevOps</li>
              <li>Tester</li>
            </ul>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default Home;
