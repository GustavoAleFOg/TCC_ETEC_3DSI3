import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Card.css'
import './Cards_globais.css'
import MinhaImagem from '../../assets/R.jpg';


function BasicExample() {
  return (

    <div class="container">
        <div class="row">
            <div class="col-12">
                
            <div className='' id="card" >
                <Card class="CardContorno" >
                    <Card.Img  class="card-imagem" variant="top" src={MinhaImagem} alt="foto eventos" />
                        <Card.Body >
                            <Card.Title class="titulo">Imagem sobre caos</Card.Title>

                            <div class="row">
                                <div class="col-4">
                                    <Card.Text class="Texto">
                                            Descrição 
                                    </Card.Text>

                                </div>
                                <div class="col-4">
                                <Card.Text class="Texto">
                                        Descrição 
                                    </Card.Text>
                                </div>
                                <div class="col-4">
                                <Card.Text class="Texto">
                                        Descrição 
                                    </Card.Text>
                                </div>
                                <Button variant="primary">botão do card</Button>
                            </div>
                              
                                
                                
                        </Card.Body>
                 </Card>
            </div>

            </div>
        </div>
    </div>

   
  );
}

export default BasicExample;
