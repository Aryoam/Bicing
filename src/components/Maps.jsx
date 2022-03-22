import { useState } from "react";
import { Button } from "react-bootstrap";
import { ModalMap } from "./ModalMap";

export const Maps = ({ longitud, latitud }) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Ver Mapa
      </Button>

      <ModalMap
        show={modalShow}
        onHide={() => setModalShow(false)}
        longitud={longitud}
        latitud={latitud}
      />
    </>
  );
};
