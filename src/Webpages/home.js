import React from 'react';
import Card from 'react-bootstrap/Card';

const Home = () => {

  return(
    <div>
      <div style={{display: 'flex', justifyContent: 'center', height: '90vh', alignItems: 'center' }}>
        <Card style={{ width: '90vw', height: '50vh' }}>
          <Card.Body>
            <Card.Title>Trabalho de Banco de Dados 1</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">ACH2004</Card.Subtitle>
            <Card.Text>
              Navegue pelo menu acima. Não se esqueça de conferir se o backend e o banco de dados estão rodando
              na sua máquina!
            </Card.Text>
            <Card.Text>
              <b>Autores</b> <br />
              Gabriel Medeiros Jospin - 11796020 <br/>
              Maria Eduarda Rodrigues Garcia - 11796621 <br/>
              Laís Garcia -  11270728 <br/>
              Gandhi Daiti Miyahara -  11207773 <br/>
              Fernanda Elimelek - 11208155 <br/>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Home;