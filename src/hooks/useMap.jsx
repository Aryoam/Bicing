import { Marker, Popup } from "react-leaflet";

export const useMap = (bicicletas) => {
  const MapaBicis = () => (
    <>
      {bicicletas.map(
        ({ estacion, disponibles, libres, latitud, longitud }, key) => (
          <Marker position={[latitud, longitud]} key={key}>
            <Popup>
              <b>Estación: </b> {estacion}
              <br />
              <b>Bicicletas Disponibles:</b> {disponibles}
              <br />
              <b>Espacios de Estacionamiento:</b> {libres}
            </Popup>
          </Marker>
        )
      )}
    </>
  );
  return [MapaBicis];
};
