import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import '../../Components/MeetingSection/MeetingSection.css';

export default class MeetingSection extends Component {
  render() {
    return (

                 <Fragment  >
                               
                               <Container className='Main-Meeting ' fluid>

                                 
                               <Container>
                                 
                              <Row className='Meeting-Play'>
                                    <Col lg={6} md={6} sm={12}>

                                    <div className=' player-wrapper'>
                                          <ReactPlayer 
                                          className='react-player mt-5'
                                          url='https://www.youtube.com/watch?v=SCFTPjgZLQw'
                                          width='400px'
                                          height='290px'
                                          muted={true}
                                          />
                                    </div>

                                    </Col>
                                    <Col lg={6} md={6} sm={12}>

                                          <h1 className='Meeting-text mt-5'> 
                                          Meet your customers, with live video chat</h1>
                                          <h5 className='mt-4'>Pri fiu nib et se git ti a. Lac i n purus ac am et pel len tes que al iq uam eni m.</h5>
                                          <h6 className='mt-3'>Lorem ipsum dolor sit ame t, consectetur adi pis eli t. Sit en im nec, pro in fa uci bus ni bh et sa gi tti a. Lac ini purus ac ame t pel len tes que al iq uam eni m.</h6>


                                    </Col>

                              </Row>
                        </Container>
                        </Container>

                    
               </Fragment>
    )
  }
}
