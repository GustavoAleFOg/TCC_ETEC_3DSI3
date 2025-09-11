import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Card.css'

function BasicExample() {
  return (

    <div class="container">
        <div class="row">
            <div class="col-12">
                
            <div className='' id="card" >
                <Card class="CardContorno" >
                    <Card.Img  variant="top" src="../../assets/R.jpg" alt="foto eventos" />
                        <Card.Body >

                            <Card.Title class="titulo">Card de eventos</Card.Title>
                                <Card.Text class="Texto">
                                    Texto exemploTexto 
                                </Card.Text>
                                <Button variant="primary">botão do card</Button>
                        </Card.Body>
                 </Card>
            </div>

            </div>
        </div>
    </div>

   
  );
}

export default BasicExample;
