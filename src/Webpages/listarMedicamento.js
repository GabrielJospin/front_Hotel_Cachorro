import React, { useEffect, useState } from 'react';
import api from "../services/api.js";
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import Row from 'react-bootstrap/Row'


const ListarMedicamento = () => {

  const [medicamento, setFunc] = useState([]);

  const fetchDono = () => {
    api
    .get("/medicamento")
    .then((response) =>  setFunc(response.data))
    .catch((err) => {
      console.error("ops! ocorreu um erro" + err);
    });
  }

  useEffect(fetchDono, []);

  if (!medicamento) return null;

  return(
    <div>
      <div style={{display: 'flex', justifyContent: 'center', marginTop: '15px'}}>
        <h1 style={{width: '90vw'}}>Medicamentos</h1>
      </div>
      <div style={{display: 'flex', justifyContent: 'center', marginTop: '15px'}}>
        <div style={{width: '90vw', marginBottom: '15px'}}>
          <ListGroup>
          {medicamento.map(medicamento =>
          <ListGroup.Item>
            <Container>
              <Row>
                <Col>
                  <p>{medicamento.nome}</p>
                </Col>
                <Col style={{display: 'flex', justifyContent:'center', flexDirection: 'column'}}>
                <p>Fabricante: {medicamento.fabricante}</p>
                  <p>Registro: {medicamento.registro_federal}</p>
                </Col>
                  <Col style={{display: 'flex', justifyContent:'center', flexDirection: 'column'}}>
                <p>Circunstancia: {medicamento.circunstancia}</p>
                </Col>
              </Row>
            </Container>
          </ListGroup.Item>
          )}
          </ListGroup>
        </div>
      </div>
    </div>
  );
}

export default ListarMedicamento;