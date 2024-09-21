import React, { Component, Fragment} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../../Components/Innerheader/Innerheader.css';
import icon from '../../Assets/Images/icon.png';
import iconn from '../../Assets/Images/iconn.png';
import icons from '../../Assets/Images/icons.png';



export default class Innerheader extends Component {
  render() {
    return (
      <Fragment >

               <Container fluid className='Inner-Main'>

               <Container  className='Main-color'>
                     <Row >
                           <div>
                           <h1 className='Good-text text-center mt-5'>Best features for a good experience</h1>
                           </div>

                           <Col lg={4} md={6} sm={12} className='mt-5'>
                                 <h3><img src={ icon } alt="" className='' ></img>  Video messaging</h3>
                                 <p className='Call'>This software is very easy for you to manage. You can use it as you wish.</p>
                           </Col>

                           <Col lg={4} md={6} sm={12} className='mt-5'>

                                 <h3><img src={ icons } alt="" className='' ></img>  Keep safe & private</h3>
                                 <p className='Call'>This software is very easy for you to manage. You can use it as you wish.</p>

                           </Col>

                           <Col lg={4} md={6} sm={12} className='mt-5'>

                                 <h3><img src={ iconn } alt="" className='' ></img>  Save your time</h3>
                                 <p className='Call'>This software is very easy for you to manage. You can use it as you wish.</p>

                           </Col>

                     </Row>
               </Container>
                  </Container>
               
         </Fragment>
    )
  }
}
