import React from 'react';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'

class Header extends React.Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Hotel Bom pra cachorro</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Animais" id="basic-  nav-dropdown">
                <LinkContainer to="/animal">
                  <NavDropdown.Item>Listar Animais</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/novoAnimal">
                  <NavDropdown.Item>Novo Animal</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
              <NavDropdown title="Donos" id="basic-  nav-dropdown">
                <LinkContainer to="/dono">
                  <NavDropdown.Item>Listar Donos</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/novoDono">
                  <NavDropdown.Item>Novo Dono</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
               <NavDropdown title="Medicamentos" id="basic-  nav-dropdown">
                <LinkContainer to="/medicamento">
                  <NavDropdown.Item>Listar Medicamentos</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/novoMedicamento">
                  <NavDropdown.Item>Novo Medicamento</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
              <NavDropdown title="Dieta" id="basic-  nav-dropdown">
                <LinkContainer to="/dieta">
                  <NavDropdown.Item>Listar Medicamentos</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/novoDieta">
                  <NavDropdown.Item>Novo Medicamento</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Header;