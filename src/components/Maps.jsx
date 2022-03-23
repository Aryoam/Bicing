import { useState } from "react";
import { Button } from "react-bootstrap";
import { ModalMap } from "./ModalMap";

export const Maps = ({ longitud, latitud, disponibles, libres, estacion }) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Mapa
      </Button>

      <ModalMap
        show={modalShow}
        onHide={() => setModalShow(false)}
        longitud={longitud}
        latitud={latitud}
        estacion={estacion}
        disponibles={disponibles}
        libres={libres}
      />
    </>
  );
};
