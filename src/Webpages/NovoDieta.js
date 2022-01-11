import React, { Component } from 'react';
import api from "../services/api.js";
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { LinkContainer } from 'react-router-bootstrap';

class NovoDieta extends Component {
  state = {
    comida: '',
    frequencia: '',
    restricoes: ' ',
    enviado: false,
    resposta: ' ',
    erro: false
  }

  sendFunc = (e) => {
    e.preventDefault();
    api.post("/insert/clt", {
      comida: this.state.comida,
      frequencia: this.state.frequencia,
      restricoes: this.state.restricoes,

    }).then((response) =>
      this.setState({
        enviado: true,
        resposta: response,
        erro: false
      })
    ).catch((err) => {
      console.error("ops! ocorreu um erro" + err);
      this.setState({
        enviado: false,
        resposta: err,
        erro: true
      })
    })
  }


  handleComida = event => {
    this.setState({
      nome_cli: event.target.value
    })
  }

  handleFrequencia = event => {
    this.setState({
      sobrenome_cli: event.target.value
    })
  }

  handleDescricoes = event => {
    this.setState({
      data_nascimento: event.target.value
    })
  }



  render() {
    return(
      <div>
          <div style={{display: 'flex', justifyContent: 'center', marginTop: '15px'}}>
            <h1 style={{width: '90vw'}}>Inserir nova Dieta</h1>
          </div>
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '15px'}}>
          {(this.state.enviado && !this.state.erro) && 
            <div>
              <Card style={{ width: '90vw' }}>
                <Card.Body>
                  <Card.Title>Sua Dieta foi adicionada!</Card.Title>
                  <Card.Text>
                    Comida: {this.state.comida}
                  </Card.Text>
                  <LinkContainer to="/Dieta">
                    <Card.Link>Ver todas as dietas</Card.Link>
                  </LinkContainer>
                </Card.Body>
              </Card>
            </div>
          }
          {!this.state.enviado && 
            <Form onSubmit = {this.sendFunc} style={{width: '90vw', border: '1px solid rgba(0,0,0,.125)', padding: '1rem 1rem', borderRadius: '.25rem'}} >
              <Container style={{padding: '0', margin: 'auto 0'}}>
                <Row>
                  <Col>
                    <Form.Group className="mb-3" controlId="valor">
                      <Form.Label>Comida</Form.Label>
                      <Form.Control type="text" placeholder="Nome" onChange={this.handleComida}/>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Form.Group>
                    <Form.Label>Frequencia</Form.Label>
                    <Form.Control type="text" placeholder="Frequencia" onChange={this.handleFrequencia}/>
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group>
                    <Form.Label>Restrições</Form.Label>
                    <Form.Control type="text" placeholder="Restrições" onChange={this.handleReg}/>
                  </Form.Group>
                </Row>

              </Container>
              <Button variant="primary" type="submit" style={{marginTop: '15px'}}>
                Enviar
              </Button>
            </Form>
          }
        </div>
      </div>
    )
  }
}

export default NovoDieta;