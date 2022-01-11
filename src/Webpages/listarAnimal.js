import React, { useEffect, useState } from 'react';
import api from "../services/api.js";
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import Row from 'react-bootstrap/Row'


const ListarAnimal = () => {

  const [animal, setFunc] = useState([]);

  const fetchAnimal = () => {
    api
    .get("/animal")
    .then((response) =>  setFunc(response.data))
    .catch((err) => {
      console.error("ops! ocorreu um erro" + err);
    });
  }

  useEffect(fetchAnimal, []);

  if (!animal) return null;

  return(
    <div>
      <div style={{display: 'flex', justifyContent: 'center', marginTop: '15px'}}>
        <h1 style={{width: '90vw'}}>Animais</h1>
      </div>
      <div style={{display: 'flex', justifyContent: 'center', marginTop: '15px'}}>
        <div style={{width: '90vw', marginBottom: '15px'}}>
          <ListGroup>
          {animal.map(animal =>
          <ListGroup.Item>
            <Container>
              <Row>
                <Col>
                  <p>{animal.nome}</p>
                </Col>
                <Col style={{display: 'flex', justifyContent:'center', flexDirection: 'column'}}>
                <p>Data de Nascimento: {animal.data_nascimento}</p>
                  <p>Condicao: {animal.condicao_especial}</p>
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

export default ListarAnimal;