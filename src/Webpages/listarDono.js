import React, { useEffect, useState } from 'react';
import api from "../services/api.js";
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import Row from 'react-bootstrap/Row'


const ListarDono = () => {

  const [dono, setFunc] = useState([]);

  const fetchDono = () => {
    api
    .get("/dono")
    .then((response) =>  setFunc(response.data))
    .catch((err) => {
      console.error("ops! ocorreu um erro" + err);
    });
  }

  useEffect(fetchDono, []);

  if (!dono) return null;

  return(
    <div>
      <div style={{display: 'flex', justifyContent: 'center', marginTop: '15px'}}>
        <h1 style={{width: '90vw'}}>Donos</h1>
      </div>
      <div style={{display: 'flex', justifyContent: 'center', marginTop: '15px'}}>
        <div style={{width: '90vw', marginBottom: '15px'}}>
          <ListGroup>
          {dono.map(dono =>
          <ListGroup.Item>
            <Container>
              <Row>
                <Col>
                  <p>{dono.nome_cli} + {dono.sobrenome_cli}</p>
                </Col>
                <Col style={{display: 'flex', justifyContent:'center', flexDirection: 'column'}}>
                <p>Data de Nascimento: {dono.data_nascimento}</p>
                  <p>CPF: {dono.cpf_cliente}</p>
                </Col>
                  <Col style={{display: 'flex', justifyContent:'center', flexDirection: 'column'}}>
                <p>Telefone: {dono.telefone}</p>
                  <p>Contato: {dono.contato_emergencia}</p>
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

export default ListarDono;