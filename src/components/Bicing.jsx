import { useState } from "react";
import { Table, Button, Form } from "react-bootstrap";
import { TableBicing } from "./TableBicing";

export const Bicing = () => {
  const [click, setClick] = useState(false);
  const [number, setNumber] = useState(0);
  const handleClick = () => {
    setClick(true);
  };

  const handleNumber = (e) => {
    setNumber(e.target.value);
  };

  return (
    <>
      <div className="form-buscar">
        <Form.Control
          type="text"
          placeholder="¿Cuantas bicicletas buscas disponibles?"
          onChange={handleNumber}
        />
        <Button
          className="boton-buscar"
          variant="primary"
          onClick={handleClick}
        >
          Buscar
        </Button>
      </div>
      {click ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Estación</th>
              <th>Disponibles</th>
              <th>Libres</th>
              <th>Latitud</th>
              <th>Longitud</th>
              <th>Mapa</th>
            </tr>
          </thead>
          <TableBicing click={click} number={number} />
        </Table>
      ) : null}
    </>
  );
};
