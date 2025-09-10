import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

// Define o componente Footer
function Footer() {
  return (
    <footer className="rodape-principal">
      <Container>
        <Row>
          {/* Coluna 1: Redes Sociais */}
          <Col md={4} className="coluna-rodape">
            <h5>Redes Sociais</h5>
            {/* Os 'a' são links. O '#' é um placeholder para o link real. */}
            <a href="#">Instagram</a>
            <a href="#">Instagram</a>
            <a href="#">Instagram (X)</a>
          </Col>

          {/* Coluna 2: Links Úteis */}
          <Col md={4} className="coluna-rodape">
            <h5>Links Úteis</h5>
            <a href="#">Sobre Nós</a>
            <a href="#">Contato</a>
            <a href="#">Política de Privacidade</a>
          </Col>

          {/* Coluna 3: Copyright */}
          <Col md={4} className="coluna-rodape">
            <h5>EVENTOS.SITE</h5>
            <p>&copy; 2025 - Todos os direitos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;