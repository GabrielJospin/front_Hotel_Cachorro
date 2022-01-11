import React, { useEffect, useState } from 'react';
import api from "../services/api.js";
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import Row from 'react-bootstrap/Row'


const ListarDieta = () => {

  const [dieta, setFunc] = useState([]);

  const fetchDieta = () => {
    api
    .get("/dieta")
    .then((response) =>  setFunc(response.data))
    .catch((err) => {
      console.error("ops! ocorreu um erro" + err);
    });
  }

  useEffect(fetchDieta, []);

  if (!dieta) return null;

  return(
    <div>
      <div style={{display: 'flex', justifyContent: 'center', marginTop: '15px'}}>
        <h1 style={{width: '90vw'}}>Dietas</h1>
      </div>
      <div style={{display: 'flex', justifyContent: 'center', marginTop: '15px'}}>
        <div style={{width: '90vw', marginBottom: '15px'}}>
          <ListGroup>
          {dieta.map(dieta =>
          <ListGroup.Item>
            <Container>
              <Row>
                <Col>
                  <p>{dieta.comida}</p>
                </Col>
                <Col style={{display: 'flex', justifyContent:'center', flexDirection: 'column'}}>
                <p>Frequencia: {dieta.frequencia}</p>
                  <p>Restricoes: {dieta.restricoes}</p>
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

export default ListarDieta;