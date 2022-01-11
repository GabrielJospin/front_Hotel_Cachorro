import React, { Component } from 'react';
import api from "../services/api.js";
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { LinkContainer } from 'react-router-bootstrap';

class NovoDono extends Component {
  state = {
    nome: '',
    registro_federal: '',
    fabricante: ' ',
    circunstancia: ' ',
    enviado: false,
    resposta: ' ',
    erro: false
  }

  sendFunc = (e) => {
    e.preventDefault();
    api.post("/insert/clt", {
      nome: this.state.nome,
      registro_federal: this.state.registro_federal,
      fabricante: this.state.fabricante,
      circunstancia: this.state.circunstancia,

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
      nome_cli: event.target.value
    })
  }

  handleFabricante = event => {
    this.setState({
      sobrenome_cli: event.target.value
    })
  }

  handleCirc = event => {
    this.setState({
      data_nascimento: event.target.value
    })
  }
  handleReg = event => {
      this.setState({
        cpf_cliente: event.target.value
      })
    }


  render() {
    return(
      <div>
          <div style={{display: 'flex', justifyContent: 'center', marginTop: '15px'}}>
            <h1 style={{width: '90vw'}}>Inserir novo Medicamento</h1>
          </div>
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '15px'}}>
          {(this.state.enviado && !this.state.erro) && 
            <div>
              <Card style={{ width: '90vw' }}>
                <Card.Body>
                  <Card.Title>Seu Medicamento foi adicionado!</Card.Title>
                  <Card.Text>
                    Nome: {this.state.nome}
                  </Card.Text>
                  <LinkContainer to="/Medicamento">
                    <Card.Link>Ver todos os Medicamentos</Card.Link>
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
                    <Form.Label>Fabricante</Form.Label>
                    <Form.Control type="text" placeholder="fabricante" onChange={this.handleFabricante}/>
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group>
                    <Form.Label>Registro</Form.Label>
                    <Form.Control type="text" placeholder="regitro" onChange={this.handleReg}/>
                  </Form.Group>
                </Row>

                <Row>
                  <Form.Group>
                    <Form.Label>Circunstancia</Form.Label>
                    <Form.Control type="text" placeholder="circunstancia" onChange={this.handleCirc}/>
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

export default NovoDono;