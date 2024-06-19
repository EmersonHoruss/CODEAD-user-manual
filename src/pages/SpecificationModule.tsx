import List from "../components/list/List";
import Paragraph from "../components/paragraph/Paragraph";
import { optionsWithIcons } from "../components/sidenav/constants";
import Title3 from "../components/title3/Title3";
import PageTemplate from "./PageTemplate";

const SpecificationModule = () => {
  return (
    <PageTemplate option={optionsWithIcons.specificationModule}>
      <div className="w-full h-full flex flex-col">
        <Title3 title="Acerca del Módulo de Especificación" />
        <Paragraph>
          El módulo de especifición forma parte del backend generado por CODEAD,
          está ubicado en el módulo de especificación. Este módulo se encarga de
          darle la flexibilidad de hacer filtrados de acuerdo a un nuevo
          lenguaje que lo define el módulo de Especificación a través de los
          query params de una url, el query param para utilizar el módulo se
          llama "query".
        </Paragraph>

        <Title3 title="Predicado" />
        <Paragraph>
          El predicado es la mínima unidad para poder utilizar el módulo de
          especificación, y tiene la siguiente forma: <br />
          &lt;atributo&gt;&lt;&lt;operador&gt;&gt;&lt;valor&gt;.
          <br />
          <br />
          <List
            introduction="Descripción de las partes de un predicado en su forma más simple"
            list={[
              {
                key: "atributo",
                content:
                  "Toda propiedad es un candidato para ser un atributo, por ejemplo si mi entidad tiene el atributo fecha, hora, nombre, apellido; puedes usar cualquiera de ellos, si es una relación y quieres acceder a algún atributo de esa relación puedes hacerlo a través de un ., por ejemplo alumno.nombre.",
              },
              {
                key: "operador",
                content:
                  "Los operadores permite hacer el filtrado de una manera flexible, más abajo en la sección de operadores se describen y mencionan todos los oepradores soportados.",
              },
              {
                key: "valor",
                content: "Te permite filtrar de acuerdo a lo que tú desees.",
              },
            ]}
          />
          <br />
          El predicado también se pueden agrupar a través del símbolo de
          agrupación () o usando los operadores, ambas formas se verán más
          adelante en las secciones correspondientes.
        </Paragraph>

        <Title3 title="Conectores" />
        <Paragraph>
          Los conectore sirven para filtrar una entidad según los valores que
          deseemos y la funcionalidad del operador, la sintaxis para definir un
          operador es la siguiente :&lt;&lt;operador&gt;&gt;.
          <List
            introduction="Lista de conectores:"
            list={[
              {
                key: "eq",
                content:
                  "Abreviatura de equal, que significa igual. Este operador es utilizado para comprobar que el atributo sea igual al valor.",
              },
              {
                key: "ne",
                content:
                  "Abreviatura de not equal, que significa diferente. Este operador es utilizado para comprobar que el atributo no sea igual al valor.",
              },
              {
                key: "ct",
                content:
                  "Abreviatura de contains, que significa contiene. Este operador es utilizado para comprobar que el atributo contenga al valor.",
              },
              {
                key: "sw",
                content:
                  "Abreviatura de start with, que significa comenzar con. Este operador es utilizado para comprobar que el atributo empiece con el valor.",
              },
              {
                key: "ew",
                content:
                  "Abreviatura de end with, que significa terminar con. Este operador es utilizado para comprobar que el atributo termine con el valor.",
              },
              {
                key: "gt",
                content:
                  "Abreviatura de greater than, que significa más grande que. Este operador es utilizado para comprobar que el atributo sea más grande que el valor.",
              },
              {
                key: "lt",
                content:
                  "Abreviatura de less than, que significa más pequeño que. Este operador es utilizado para comprobar que el atributo sea más pequeño que el valor.",
              },
              {
                key: "ge",
                content:
                  "Abreviatura de greater and equal than, que significa más grande o igual que. Este operador es utilizado para comprobar que el atributo sea más grande o igual al valor.",
              },
              {
                key: "le",
                content:
                  "Abreviatura de less and equal than, que significa más pequeño o igual que. Este operador es utilizado para comprobar que el atributo sea más pequeño oigual al valor.",
              },
            ]}
          />
          <br />
          Con estos conectores podemos crear los siguiente predicados:
          nombre&lt;eq&gt;jaimito(con esto podemos obtener todas las entidades
          que tengan el nombre de jaimito), apellido&lt;ne&gt;perez(con esto
          podemos obtener todas entidades cuyo apellido sea diferente a perez),
          etc.
        </Paragraph>

        <Title3 title="Operadores" />
        <Paragraph>
          Los operadores sirven para concatenar predicados, la sintaxis para
          definir un operador es la siguiente :&lt;operador&gt;:.
          <List
            introduction="Lista de operadores:"
            list={[
              {
                key: "and",
                content: "Operador de conjunción.",
              },
              {
                key: "or",
                content: "Operador de disyunción.",
              },
            ]}
          />
          <br />
          Con estos operadores podemos crear los siguientes predicados:
          nombre&lt;eq&gt;jaimito:and:apellido&lt;ne&gt;perez (con esto podemos
          obtener todas las entidades cuyo nombre es jaimito y apellido es
          diferente a perez), nombre&lt;eq&gt;jaimito:or:apellido&lt;ne&gt;perez
          (con esto podemos obtener todas las entidades cuyo nombre es jaimito o
          el apellido es diferente a perez), etc.
        </Paragraph>

        <Title3 title="Agrupación" />
        <Paragraph>
          La agrupación se logra a través de los paréntesis: (), la utilización
          es la misma que con la lógica booleana. Por ejemplo:
          (nombre&lt;eq&gt;jaimito:and:apellido&lt;ne&gt;perez):or:(edad&lt;gt&gt;20:and:edad&lt;lt&gt;18)
          (con esto estamos diciendo que obtenga las entidades que tengan el
          nombre igual a jaimito y el apellido sea diferente a perez o también
          dentro del intérvalo de 20 y 18).
        </Paragraph>

        <Title3 title="Atributos Anidados" />
        <Paragraph>
          Una entidad no está sólo compuesto de atributos escalares sino también
          de relaciones entre otras entidades, si estamos interesados en filtrar
          la entidad padre por una propiedad de la entidad hija podemos hacerlo
          usando el punto. Por ejemplo: alumno.edad&lt;eq&gt;20(obtenemos todas
          las entidades padres cuya edad del alumno sea igual a 20).
        </Paragraph>
      </div>
    </PageTemplate>
  );
};

export default SpecificationModule;
