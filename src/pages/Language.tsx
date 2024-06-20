import Paragraph from "../components/paragraph/Paragraph";
import { optionsWithIcons } from "../components/sidenav/constants";
import Title3 from "../components/title3/Title3";
import PageTemplate from "./PageTemplate";
import List from "../components/list/List";

const Language = () => {
  return (
    <PageTemplate option={optionsWithIcons.language}>
      <div className="w-full h-full flex flex-col">
        <Title3 title="Acerca de CODEAD Language" />
        <Paragraph>
          CODEAD Language es el lenguaje que usa el software CODEAD para definir
          las entidades. Las entidades están basadas en columnas, cada columna
          puede ser de dos tipos, campo y relación.
        </Paragraph>
        <Paragraph>
          La columna está conformado por tres secciones: las restricciones
          llamadas decoradores, el tipo de dato y el nombre de la columna. El
          tipo de dato puede ser los siguientes: byte, short, int, long, float,
          double, boolean, String y LocalDate, o el nombre de una entidad. Por
          cada tipo de dato existen una cantidad limitada de decoradores. Además
          el nombre de la columna debe seguir la nomenclatura Camel Case.
        </Paragraph>

        <Title3 title="Estructura de una Columna" />
        <Paragraph>
          Una columna sigue la siguiente estructura:
          &lt;Decorador&gt;&lt;TipoDato&gt;&lt;Identificador&gt;. <br />
          <List
            introduction="Ejemplos: "
            list={[
              {
                key: "Columna con decorador",
                content: "@Min(0) float precio",
              },
              {
                key: "Columna sin decorador",
                content: "float precio",
              },
            ]}
          />
        </Paragraph>

        <Title3 title="Estructura de un Decorador" />
        <Paragraph>
          Un decorador sigue la siguiente estructura:
          &lt;@NombreDecorador&gt;(&lt;Valor&gt;). <br />
          <List
            introduction="Ejemplos: "
            list={[
              { key: "Decorador con valor", content: "@Min(0)" },
              { key: "Decorador sin valor", content: "@Min" },
            ]}
          />
        </Paragraph>

        <Title3 title="Decoradores y su Relación con el Tipo de Dato" />
        <table className="text-left">
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Tipo de Dato</th>
              <th>Valores</th>
              <th>Mapeo a Nivel de DTO</th>
              <th>Mapeo a Nivel de Base de Datos</th>
            </tr>
          </thead>

          <tbody>
            {/* @Nullable */}
            <tr>
              <td>1</td>
              <td>@Nullable</td>
              <td>Todos los tipos de datos incluídos relaciones.</td>
              <td>
                Con valor: true o false. Ejemplo: @Nullable(true) o
                @Nullable(false)
                <br />
                Sin valor: por defecto es true. Ejemplo: @Nullable
              </td>
              <td>
                Con el valor true usa @NotNull <br />
                Con el valor false usa @Nullable
              </td>
              <td>
                Con el valor true usa @Column(nullable=true)
                <br />
                Con el valor false usa @Column(nullable=false)
              </td>
            </tr>

            {/* @Unique */}
            <tr>
              <td>2</td>
              <td>@Unique</td>
              <td>Todos los tipos de datos incluídos relaciones.</td>
              <td>
                Con valor: true o false. Ejemplo @Unique(true) o @Unique(false){" "}
                <br />
                Sin valor: por defecto es true. Ejemplo: @Unique{" "}
                <br /> Tip: Cuando el valor es falso este decorador será
                ignorado, porque no es necesario codificarlo para generar el
                backend. Por temas de usabilidad se ha considerado el valor true
                y false así como el @Nullable
              </td>
              <td>No</td>
              <td>
                Con el valor true usa @Column(unique=true)
                <br />
                Con el valor false usa @Column(unique=false)
              </td>
            </tr>

            {/* @Time */}
            <tr>
              <td>3</td>
              <td>@Time</td>
              <td>LocalDate</td>
              <td>
                Con valor: Future, FutureOrNow, Past y PastOrNow. Ejemplo:
                @Time(Future)
                <br />
                Sin valor: por defecto es FutureOrNow. Ejemplo: @Time
              </td>
              <td>
                Con el valor Future usa @Future
                <br />
                Con el valor FutureOrNow usa @FutureOrPresent <br />
                Con el valor Past usa @Past <br />
                Con el valor PastOrNow usa @PastOrPresent
              </td>
              <td>No</td>
            </tr>

            {/* @Min */}
            <tr>
              <td rowSpan={2}>4</td>
              <td rowSpan={2}>@Min</td>
              <td>String</td>
              <td>
                Con valor: cualquier entero, si es un negativo CODEAD convierte
                a positivo automáticamente. Ejemplo: @Min(10) o @Min(-10)
                <br />
                Sin valor: por defecto es 0. Ejemplo: @Min
              </td>
              <td>Con el valor numérico usa @Size(min = número)</td>
              <td>No</td>
            </tr>
            <tr>
              <td>byte, short, int, long, float y double</td>
              <td>
                Con valor: cualquier entero. Ejemplo: @Min(10) o @Min(-10)
                <br />
                Sin valor: por defecto es 0. Ejemplo: @Min
              </td>
              <td>Con el valor numérico usa @Min(número)</td>
              <td>No</td>
            </tr>

            {/* @Max */}
            <tr>
              <td rowSpan={2}>5</td>
              <td rowSpan={2}>@Max</td>
              <td>String</td>
              <td>
                Con valor: cualquier entero, si es un negativo CODEAD convierte
                a positivo automáticamente. Ejemplo: @Max(10) o @Max(-10)
                <br />
                Sin valor: por defecto es 255. Ejemplo: @Max
              </td>
              <td>Con el valor numérico usa @Size(max = número)</td>
              <td>Con el valor numérico usa @Column(length = número)</td>
            </tr>
            <tr>
              <td>byte, short, int, long, float y double</td>
              <td>
                Con valor: cualquier entero. Ejemplo: @Max(10) o @Max(-10){" "}
                <br />
                Sin valor: por defecto es 0. Ejempo: @Max
              </td>
              <td>Con el valor numérico usa @Max(número)</td>
              <td>No</td>
            </tr>

            {/* @NotBlank */}
            <tr>
              <td>6</td>
              <td>@NotBlank</td>
              <td>String</td>
              <td>
                Con valor: true o false. Ejemplo: @NotBlank(true) o
                @NotBlank(false) <br />
                Sin valor: por defecto es true. Ejemplo: @NotBlank
                <br /> Tip: Cuando el valor es falso este decorador será
                ignorado, porque no es necesario codificarlo para generar el
                backend. Por temas de usabilidad se ha considerado el valor true
                y false así como el @Nullable
              </td>
              <td>
                Con el valor de true usa @NotBlank <br />
                Con el valor de false no usa nada
              </td>
              <td>
                Con el valor de true usa @Column(nullable = false) <br />
                Con el valor de false usa @Column(nullable = true)
              </td>
            </tr>

            {/* @Integer */}
            <tr>
              <td>7</td>
              <td>@Integer</td>
              <td>float y double</td>
              <td>
                Con valor: cualquier entero, si es un negativo CODEAD convierte
                a positivo automáticamente. Ejemplo: @Integer(10) o
                @Integer(-10) <br />
                Sin valor: por defecto es 4. Ejemplo: @Integer
              </td>
              <td>Con el valor numérico usa @Digits(integer = número)</td>
              <td>
                Con el valor numérico usa @Column(precision = número + fraction)
              </td>
            </tr>

            {/* @Decimal */}
            <tr>
              <td>8</td>
              <td>@Decimal</td>
              <td>float y double</td>
              <td>
                Con valor: cualquier entero, si es un negativo CODEAD convierte
                a positivo automáticamente. Ejemplo: @Decimal(10) o
                @Decimal(-10) <br />
                Sin valor: por defecto es 2. Ejemplo: @Decimal
              </td>
              <td>Con el valor numérico usa @Decimal(fraction = número)</td>
              <td>Con el valor numérico usa @Column(fraction = número)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </PageTemplate>
  );
};

export default Language;
