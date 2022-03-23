import { useState, useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useMap } from "../hooks/useMap";

export const Mapa = () => {
  const [bici, setBici] = useState([]);
  const [MapaBicis] = useMap(bici);
  MapaBicis();

  useEffect(() => {
    const consultarApi = async () => {
      const url = "https://api.citybik.es/v2/networks/bicing";

      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      const arrayBicing = resultado.network.stations.map((bici) => {
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
  }, []);
  return (
    <>
      <MapContainer center={[41.3957813, 2.1787074]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapaBicis />
      </MapContainer>
    </>
  );
};
