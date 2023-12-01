import { Navbar,  Form, FormControl, Button, Container,Image } from "react-bootstrap";


const Header =() =>{
 return (
    <header>
            <Navbar bg="dark" expand="lg" variant="dark">
                <Container>
                <Navbar.Brand href="/">
            <Image src="/img/logo.png" />
          </Navbar.Brand>
                    
          <Navbar.Brand href="/">
            <div>
              <div>Optativa: Tópicos selectos de entornos de desarrollo:Frameworks</div>
              <div>Ing. Victor Antonio Valdez Valenzuela</div>
            </div>
          </Navbar.Brand>
                </Container>
            </Navbar>            
        </header>
 );
}
export default Header;
