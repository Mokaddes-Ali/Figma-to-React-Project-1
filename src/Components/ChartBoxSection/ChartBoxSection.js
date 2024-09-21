import React, { Component, Fragment } from 'react'
import '../../Components/ChartBoxSection/ChartBoxSection.css';
import { Col, Container, Row ,Button} from 'react-bootstrap';
import Chat from '../../Assets/Images/Chat.png';



export default class ChartBoxSection extends Component {
  render() {
    return (
      <Fragment className='Main-chat'>

                        <Container className='Chat'>
                              <Row>
                                    <Col lg={6} md={6} sm={12} className='mt-5'>

                                          <h3 className='Chat-text'>Never miss any chat</h3>
                                          <p className='mt-4'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered all injected humour or randomised words which don't look even slightly believable. </p>
                                          <Button variant="primary" className='mt-5'>Start Chatting Now  </Button>
                                    </Col>
                                    <Col lg={6} md={6} sm={12}>
                                    <img src={ Chat } alt="" className='w-100' ></img>
                                    </Col>

                              </Row>
                        </Container>
                    
               </Fragment>
    )
  }
}
