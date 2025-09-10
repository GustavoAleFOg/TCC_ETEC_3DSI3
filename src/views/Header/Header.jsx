import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import logoAnimado from '../../assets/logo-animado.gif';
import './Header.css';

// Define o componente Header
function Header() {
  return (
    <header className="cabecalho-principal">
      <Navbar expand="lg">
        <Container>
          {/* Brand é a seção para o logo do site */}
          <Navbar.Brand href="#home" className="logo-site">
            ACONTECE AQUI
          </Navbar.Brand>
          
          {/* Botão de menu para telas pequenas */}
          <Navbar.Toggle aria-controls="menu-navegacao" />
          
          {/* Conteúdo do menu que será colapsado em telas menores */}
          <Navbar.Collapse id="menu-navegacao">
            {/* 'ms-auto' alinha os itens do menu à direita */}
            <Nav className="ms-auto d-flex align-items-center">
              <Nav.Link href="#shows">Shows</Nav.Link>
              <Nav.Link href="#teatro">Teatro</Nav.Link>
              <Nav.Link href="#festivais">Festivais</Nav.Link>

              {/* Botão para trocar o tema (a lógica será implementada depois) */}
              <Button variant="light" className="botao-tema ms-lg-3">
                ☀️
              </Button>
              
              {/* Botão de Login/Cadastro com o estilo neobrutalista */}
              <Button className="btn-neobrutalista ms-lg-3 mt-3 mt-lg-0">
                Login / Cadastro
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;