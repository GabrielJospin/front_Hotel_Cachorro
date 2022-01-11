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
    nome_cli: '',
    sobrenome_cli: '',
    data_nascimento: '',
    endereco_id: 0,
    cpf_cliente: ' ',
    telefone: ' ',
    contato_emergencia: ' ',
    enviado: false,
    resposta: ' ',
    erro: false
  }

  sendFunc = (e) => {
    e.preventDefault();
    api.post("/insert/clt", {
      nome_cli: this.state.nome_cli,
      sobrenome_cli: this.state.sobrenome_cli,
      data_nascimento: this.state.data_nascimento,
      cpf_cliente: this.state.cpf_cliente,
      telefone: this.state.telefone,
      contato_emergencia: this.state.contato_emergencia,

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

  handleSobrenomeNome = event => {
    this.setState({
      sobrenome_cli: event.target.value
    })
  }

  handleData = event => {
    this.setState({
      data_nascimento: event.target.value
    })
  }
  handleCPF = event => {
      this.setState({
        cpf_cliente: event.target.value
      })
    }
  handleTel = event => {
      this.setState({
        telefone: event.target.value
      })
    }
  handleContato = event => {
      this.setState({
        contato_emergencia: event.target.value
      })
    }



  render() {
    return(
      <div>
          <div style={{display: 'flex', justifyContent: 'center', marginTop: '15px'}}>
            <h1 style={{width: '90vw'}}>Inserir novo Dono</h1>
          </div>
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '15px'}}>
          {(this.state.enviado && !this.state.erro) && 
            <div>
              <Card style={{ width: '90vw' }}>
                <Card.Body>
                  <Card.Title>Seu Dono foi adicionado!</Card.Title>
                  <Card.Text>
                    Nome: {this.state.nome}
                  </Card.Text>
                  <LinkContainer to="/dono">
                    <Card.Link>Ver todos os Donos</Card.Link>
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
                  <Col>
                    <Form.Group className="mb-3" controlId="valor">
                      <Form.Label>Sobrenome</Form.Label>
                      <Form.Control type="text" placeholder="Nome" onChange={this.handleSobrenomeNome}/>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Form.Group>
                    <Form.Label>Data de Nascimento</Form.Label>
                    <Form.Control type="text" placeholder="aaaa-mm-dd" onChange={this.handleData}/>
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group className="mb-3" controlId="valor">
                    <Form.Label>CPF</Form.Label>
                    <Form.Control type="text" placeholder="cpf" onChange={this.handleCPF}/>
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group className="mb-3" controlId="valor">
                    <Form.Label>Telefone</Form.Label>
                    <Form.Control type="text" placeholder="Telefone" onChange={this.handleTel}/>
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group className="mb-3" controlId="valor">
                    <Form.Label>Contato Emergencia</Form.Label>
                    <Form.Control type="text" placeholder="contato" onChange={this.handleContato}/>
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