import { Maps } from "../components/Maps";

export const useBicis = (bicicletas) => {
  const TableBicis = () => (
    <>
      {bicicletas.map(
        ({ estacion, disponibles, libres, latitud, longitud }, key) => (
          <tbody key={key}>
            <tr>
              <td>{estacion}</td>
              <td>{disponibles}</td>
              <td>{libres}</td>
              <td>{latitud}</td>
              <td>{longitud}</td>
              <td>{<Maps longitud={longitud} latitud={latitud} />}</td>
            </tr>
          </tbody>
        )
      )}
    </>
  );
  return [TableBicis];
};
