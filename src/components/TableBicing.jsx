import { useEffect, useState } from "react";
import { useBicis } from "../hooks/useBicis.jsx";

export const TableBicing = ({ number }) => {
  const [bici, setBici] = useState([]);
  const [TableBicis] = useBicis(bici);

  TableBicis();

  useEffect(() => {
    const consultarApi = async () => {
      const url = "https://api.citybik.es/v2/networks/bicing";

      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      const arrayBicing = resultado.network.stations
        .filter((bici) => bici.free_bikes >= number * 1)
        .map((bici) => {
          return {
            estacion: bici.name,
            disponibles: bici.free_bikes,
            libres: bici.empty_slots,
            latitud: bici.latitude,
            longitud: bici.longitude,
          };
        });
      setBici(arrayBicing);
    };

    consultarApi();
  }, [number]);
  return <TableBicis />;
};
