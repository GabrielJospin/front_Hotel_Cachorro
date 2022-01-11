import React, { Component } from 'react';
import api from "../services/api.js";
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { LinkContainer } from 'react-router-bootstrap';

class NovoAnimal extends Component {
  state = {
    nome: '',
    idDono: 0,
    idDieta: 0,
    data_nascimento: '',
    condicaoEspecial: 0,
    enviado: false,
    resposta: ' ',
    erro: false
  }

  sendFunc = (e) => {
    e.preventDefault();
    api.post("/insert/clt", {
      nome: this.state.nome,
      idDono: this.state.idDono,
      idDieta: this.state.idDieta,
      data_nascimento: this.state.data_nascimento,
      condicaoEspecial: this.state.condicaoEspecial
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


  handleNome = event => {
    this.setState({
      nome: event.target.value
    })
  }

  handlleIDdono = event => {
    this.setState({
      idDono: event.target.value
    })
  }
  handlleIDdieta = event => {
    this.setState({
      idDieta: event.target.value
    })
  }

  handleCondicao = event => {
    this.setState({
      condicaoEspecial: event.target.value
    })
  }


  handleData = event => {
    this.setState({
      data_nascimento: event.target.value
    })
  }


  render() {
    return(
      <div>
          <div style={{display: 'flex', justifyContent: 'center', marginTop: '15px'}}>
            <h1 style={{width: '90vw'}}>Inserir novo Animal</h1>
          </div>
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '15px'}}>
          {(this.state.enviado && !this.state.erro) && 
            <div>
              <Card style={{ width: '90vw' }}>
                <Card.Body>
                  <Card.Title>Seu Animal foi adicionado!</Card.Title>
                  <Card.Text>
                    Nome: {this.state.nome}
                  </Card.Text>
                  <LinkContainer to="/Animal">
                    <Card.Link>Ver todos os Animais</Card.Link>
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
                      <Form.Label>Nome</Form.Label>
                      <Form.Control type="text" placeholder="Nome" onChange={this.handleNome}/>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Form.Group>
                    <Form.Label>Dono</Form.Label>
                    <Form.Control type="number" placeholder="ID do Dono" onChange={this.handlleIDdono}/>
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group>
                    <Form.Label>Dieta</Form.Label>
                    <Form.Control type="number" placeholder="ID da Dieta" onChange={this.handlleIDdieta}/>
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group>
                    <Form.Label>Condição Especial</Form.Label>
                    <Form.Control type="number" placeholder="numero da condição" onChange={this.handleCondicao}/>
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group>
                    <Form.Label>Data de Nascimento</Form.Label>
                    <Form.Control type="text" placeholder="aaaa-mm-dd" onChange={this.handleData}/>
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

export default NovoAnimal;