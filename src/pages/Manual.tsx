import { optionsWithIcons } from "../components/sidenav/constants";
import PageTemplate from "./PageTemplate";
import Image from "../components/image/Image";
import Title3 from "../components/title3/Title3";
import Paragraph from "../components/paragraph/Paragraph";
import List from "../components/list/List";

const Manual = () => {
  return (
    <PageTemplate option={optionsWithIcons.manual}>
      <div className="w-full h-full flex flex-col">
        {/* Start */}
        <Title3 title="1.- Comenzando" />
        <Paragraph>
          Al dar click en{" "}
          <a
            href="https://generadorcodead.com/"
            className="font-semibold text-blue-500"
          >
            CODEAD
          </a>{" "}
          te redigirá a una página para que puedas utilizar la aplicación de
          generador de backend en Spring Boot 3, CODEAD.
        </Paragraph>
        <Image
          src="src/assets/images/manual/first-loading.JPG"
          alt="página inicial de la aplicación"
        />

        {/* Zones */}
        <Title3 title="2.- Partes de la aplicación" newZone={true} />
        <Paragraph>
          La aplicación está dividida en cuatro secciones funcionales, en la
          siguiente imágen puedes ver la división de las secciones:
        </Paragraph>
        <Image
          src="src/assets/images/manual/parts.JPG"
          alt="partes de la aplicación"
        />
        <List
          list={[
            {
              key: "Cabecera",
              content:
                "Se encuentra el logo de la aplicación y los botones de generar en forma de triágulo (play) y de iniciar un nuevo proyecto con forma de un círculo con una flecha.",
            },
            {
              key: "Barra de Navegación",
              content:
                "Se encuentran todas las opciones de la aplicación, el inicio, la metadata, el perfil y las entidades.",
            },
            {
              key: "Cuerpo",
              content:
                "En el cuerpo el usuario podrá interactuar y configurar todo lo necesario para generar el backend. Es la parte principal y central de la aplicación.",
            },
            {
              key: "Terminal",
              content:
                "En la terminal estará todos los reportes de la aplicación, estos incluyen datos de generación como lo que se está generando y el tiempo tomado. Además hay otra sección llamada Problemas, la cual informará cuando existan problemas.",
            },
          ]}
          introduction="Descripción de las secciones:"
        />

        {/* Metadata */}
        <Title3 title="3.- Configurar la metadata" newZone={true} />
        <Paragraph>
          Dar click en la opción llamada Metadata para configurar la metadata
          del backend que se desea generar. Después de dar click se mostrará la
          siguiente imagen:
        </Paragraph>
        <Image
          src="src/assets/images/manual/metadata.JPG"
          alt="formulario para la metadata"
        />
        <List
          list={[
            {
              key: "Grupo",
              content:
                "Este campo representa el identificador único del grupo o la organización que está desarrollando el proyecto. Generalmente, sigue el formato de un dominio invertido (como com.ejemplo).",
            },
            {
              key: "Artefacto",
              content:
                "Este campo define el identificador único del proyecto dentro del grupo. Es el nombre del archivo que se generará (sin la extensión). A menudo, es el nombre del proyecto o una versión abreviada del mismo.",
            },
            {
              key: "Nombre",
              content:
                "Este es el nombre completo del proyecto. Puede ser más descriptivo y legible que el artefacto. Este nombre se utiliza en varias configuraciones del proyecto y puede incluir espacios y mayúsculas.",
            },
            {
              key: "Descripción",
              content:
                "Proporciona una breve descripción del proyecto. Esto es útil para tener una idea rápida de lo que hace el proyecto o su propósito.",
            },
            {
              key: "Paquete",
              content:
                "Este es el nombre base del paquete Java que se usará para agrupar las clases del proyecto. Normalmente, es una combinación del grupo y el artefacto, y sigue la convención de dominio invertido.",
            },
          ]}
          introduction="Descripción de cada campo del formulario: "
        />

        {/* Profile */}
        <Title3 title="4.- Configurar el perfil" newZone={true} />
        <Paragraph>
          <p>
            Un perfil es la descripción de las propiedades de un entorno, los
            entornos pueden ser desarrollo, producción, testing, entre otros.
            Sin embargo, la configuración sólo se hará para un sólo entorno como
            primera versión de la aplicación, entorno de desarrollo. Al ir
            madurando la aplicación tendrá soporte para otros entornos.
          </p>
        </Paragraph>
        <Paragraph>
          <p>
            Dar click en la opción llamada Perfil para configurar el perfil del
            backend que se desea generar. Después de dar click se mostrará la
            siguiente imagen:
          </p>
        </Paragraph>
        <Image
          src="src/assets/images/manual/profile.JPG"
          alt="formulario para el perfil"
        />
        <Paragraph>
          <List
            list={[
              {
                key: "Url",
                content:
                  "La url de conexión a la base de datos del backend generado.",
              },
              {
                key: "Usuario",
                content:
                  "El usuario forma parte de las credenciales para el ingreso a la base de datos.",
              },
              {
                key: "Contraseña",
                content:
                  "La contraseña forma parte de las credenciales para el ingreso de la base de datos.",
              },
            ]}
            introduction="Descripción de los campos de la sección Base de Datos"
          />
        </Paragraph>
        <Paragraph>
          <List
            list={[
              {
                key: "DDL",
                content:
                  "Al utilizar Hibernate se puede configurar como será el arranque de nuestro backend, podemos requerir que por cada vez que encedamos el servidor se cree toda la base de datos sin ningún dato o configurarlo como deseemos. Existen opciones tales como: none, update, validate, create y create-drop",
              },
            ]}
            introduction="Descripción de los campos de la sección JPA"
          />
        </Paragraph>
        <List
          list={[
            {
              key: "Puerto",
              content:
                "Representa el puerto en el que nuestro backend estará disponible.",
            },
          ]}
          introduction="Descripción de los campos de la sección Servidor"
        />

        {/* Entities */}
        <Title3 title="5.- Crear las entidades" newZone={true} />
        <Paragraph>
          <p>
            Las entidades conforman todo el contenido del backend y son aquellas
            que seran usadas para generar los cruds por cada uno de ellas
            basándose en Modelo, Vista y Controlador. Podemos crear todas las
            entidades que necesitemos e ir interactuando con el editor de código
            y con la terminal para recibir feedback sobre los errores que
            cometemos.
          </p>
        </Paragraph>
        <Paragraph>
          <p>
            Al dar click en la flecha de las entidades se mostrará un ícono, así
            como se muestra en la siguiente imagen:
          </p>
        </Paragraph>
        <Image
          src="src/assets/images/manual/entities-open.JPG"
          alt="opción de entidades abierta"
        />
        <Paragraph>
          <p>
            Dar click en el nuevo ícono que ha aparecido al lado derecho de la
            opción Entidades. Se mostrará un input para escribir el nombre de la
            entidad, esta debe empezar con mayúscula y seguir la nomenclatura
            Pascal Case, debe ser además solo alfanumérico.
          </p>
        </Paragraph>
        <Image
          src="src/assets/images/manual/entity-creation.JPG"
          alt="creando entidad"
        />
        <Paragraph>
          <p>
            Después de crear la entidad, la aplicación cargará un editor de
            código, donde usaremos el lenguaje{" "}
            <a className="text-blue-600 font-semibold" href="/lenguaje">
              CODEAD Language
            </a>{" "}
            para poder escribir el contendio de nuestras entidades. La siguiente
            imagen muestra la entidad después de ser creada:
          </p>
        </Paragraph>
        <Image
          src="src/assets/images/manual/entity-created.JPG"
          alt="entidad creada"
        />
        <Paragraph>
          <p>
            Al escribir alguna sintaxis que no sea parte de{" "}
            <a className="text-blue-600 font-semibold" href="/lenguaje">
              CODEAD Language
            </a>{" "}
            obtendremos errores, estos errores los veremos en la sección de la
            terminal, específicamente en Problemas. La siguiente imagen muestra
            una entidad que no sigue la sintaxis del lenguaje:
          </p>
        </Paragraph>
        <Image
          src="src/assets/images/manual/entity-created-with-errors.JPG"
          alt="entidad con errores"
        />
        <Paragraph>
          <p>
            Cuando hemos respetado la sintaxis de{" "}
            <a className="text-blue-600 font-semibold" href="/lenguaje">
              CODEAD Language
            </a>{" "}
            no obtendremos ningún error. La siguiente imagen muestra una entidad
            que sigue la sintaxis del lenguaje:
          </p>
        </Paragraph>
        <Image
          src="src/assets/images/manual/entity-created-with-no-errors.JPG"
          alt="entidad sin errores"
        />

        {/* Generate */}
        <Title3 title="6.- Generar backend" newZone={true} />
        <Paragraph>
          Cuando ya hemos terminado las configuraciones de la metadata y el
          perfil y además hemos terminado de definir nuestras entidades
          estaremos listos para generar el backend. Para ello necesitamos
          ubicarnos en la sección de la cabecera, al final existen dos botones,
          damos click en el de la forma de triángulo y de esta forma empezará a
          generar. Ver la siguiente imagen:
        </Paragraph>
        <Image src="src/assets/images/manual/generate.JPG" alt="generar" />
        <Paragraph>
          Mientras está generando mostrará los resultados en la terminal. Ver
          las siguiente imagen:
        </Paragraph>
        <Image
          src="src/assets/images/manual/generate-results.JPG"
          alt="resultados de la generación"
        />

        {/* Start New Project */}
        <Title3 title="7.- Iniciar un nuevo backend" newZone={true} />
        <Paragraph>
          <p>
            Después de terminar de configurar y definir las entidades podemos
            iniciar un nuevo proyecto. Para esto nos ubicamos en la cabecera,
            hay un botón al final en forma de círculo con una flecha, le damos
            click veremos la siguiente imagen:
          </p>
        </Paragraph>
        <Image src="src/assets/images/manual/restart.JPG" alt="generar" />
        <Paragraph>
          <p>
            Le damos en ACEPTAR y finalmente tendremos un nuevo proyecto listo
            para ser configurado desde un inicio. Ver la siguiente imagen:
          </p>
        </Paragraph>
        <Image
          src="src/assets/images/manual/restart-result.JPG"
          alt="generar"
        />
      </div>
    </PageTemplate>
  );
};

export default Manual;
