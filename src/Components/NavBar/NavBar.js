import React, { Component, Fragment } from 'react';
import { Container,Navbar,Nav ,Button} from 'react-bootstrap';
import '../../Components/NavBar/NavBar.css';
import logo from '../../Assets/Images/logo.png';


export default class NavBar extends Component {
  render() {
    return (
      <Fragment>
                    <Container fluid>

<Navbar className='Main-NavBar p-0'>
      <Container >
      <Navbar.Brand href="#" > <img src={ logo } alt="" className='Main-Nav'></img> </Navbar.Brand> 
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
      <Nav
            className=" Navbar-ul ms-auto me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
      >
         
         <Nav.Link className='Navbar-li text-red' > <a href="#Demos"  >Demos </a> </Nav.Link>
         <Nav.Link className='Navbar-li text-red'  > <a href="#About">About</a> </Nav.Link>
         <Nav.Link className='Navbar-li text-red'  > <a href="#Blog">Blog</a> </Nav.Link>
         <Nav.Link className='Navbar-li text-red'  > <a href="#Course">Pages</a> </Nav.Link>
         <Nav.Link className='Navbar-li text-red'  > <a href="#Contact">Contact</a> </Nav.Link>
        
       
         </Nav>
            
          <div className='Login'>  <Nav.Link className='Navbar-li text-red'  > <a href="#Login">Login</a> </Nav.Link>  </div>
      
            <Button variant="primary">Get Started Free</Button>
      
      </Navbar.Collapse>
      </Container>
</Navbar>

</Container>

                    
               </Fragment>
    )
  }
}
