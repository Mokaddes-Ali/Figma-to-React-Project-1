import React, { Component, Fragment } from 'react';
import { Container, Row ,Col,Button,Navbar,Nav,Form} from 'react-bootstrap';
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import '../../Components/Footer/Footer.css';
import logo from '../../Assets/Images/logo.png';


export default class Footer extends Component {
  render() {
    return (
               <Fragment>

                    <Container className='footer'>
                              <Row>
                                    <div className='mt-4'>
                                          <Col>


                                          <h1 className='footer-heading text-center mt-5 '>Drop us a line or two, we are <br></br> open for creative minds and<br></br>collaborations!</h1>

                                          <div className='text-center'><Button variant="primary" className=' mt-4'>Start Chatting Now</Button></div>
                                          
                                          

                                          <div>




                                          <Navbar expand="lg"  className='Nav-bt'>
                                                      <Container fluid>
                                                      <Navbar.Brand href="#"><img src={ logo } alt="" ></img></Navbar.Brand>
                                                      <Navbar.Toggle aria-controls="navbarScroll" />
                                                      <Navbar.Collapse id="navbarScroll">
                                                      <Nav
                                                            className="mx-auto my-2 my-lg-0"
                                                            style={{ maxHeight: '100px' }}
                                                            navbarScroll
                                                      >
                                                            <Nav.Link href="#action1" className='text'>About</Nav.Link>
                                                            <Nav.Link href="#action2" className='text'>Features</Nav.Link>
                                                            <Nav.Link href="#action1" className='text'>Works</Nav.Link>
                                                            <Nav.Link href="#action2" className='text'>Support</Nav.Link>
                                                            
                                                            
                                                      </Nav>
                                                      <Form className=" Side-icon d-flex">
                                                            
                                                      
                                                      
                                                      <p className='padding-icon'><a href=""><FaTwitter /></a></p>
                                                      
                                                      <p className='padding-icon'><a href=""><FaFacebookF /></a></p>
                                                      
                                                      <p className='padding-icon'><a href=""><FaInstagram /></a></p>
                                                      
                                                      <p className='padding-icon'><a href=""><FaGithub /></a></p>
                                                      </Form>
                                                      </Navbar.Collapse>
                                                      </Container>

                                          </Navbar>

                                                <div className="orange-underline mt-2 m-auto"></div>


                                                <div className='d-flex'>
                                                <Col>
                                                      <p className='menu'>&copy;Copyright 2021, All Rights Reserved</p>
                                                </Col>

                                                <Col className='right-text'>
                                                      <div className='d-flex'>
                                                      <p className='Side-text'>Privacy Policy</p> 
                                                      <p className='Side-text'>Terms & Conditions</p>
                                                      <p className='Side-text'>Rulls and regulation</p>
                                                      </div>   
                                                </Col>
                                                </div>

                                          </div>
                                          </Col>

                                    </div>
                              </Row>
                        </Container>
                    
               </Fragment>
    )
  }
}
