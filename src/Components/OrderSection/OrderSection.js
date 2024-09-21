import React, { Component, Fragment } from 'react';
import '../../Components/OrderSection/OrderSection.css';
import { Container, Row,Col,} from 'react-bootstrap';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import order from '../../Assets/Images/order.png';


export default class OrderSection extends Component {
     render() {
          return (
               <Fragment className='Main-Order p-0 m-0'>
                     <Container >

             <Row>
      
      <Col lg={6} md={6} sm={12} className='Order-img' >
      <img src={ order } alt="" className='w-100' ></img>
      </Col>

      <Col lg={6} md={6} sm={12} className='Fast-text '>

            <h3 className='Order-text '>Get direct orders from your customers</h3>
            <p className='mt-4'>Create custom landing pages with Rare b locks that converts more visitors than any website. With lots of unique blocks easily build a page. There are many variations of passages of available.  </p>

            <div className='d-flex'>
                  <Col>

                  <h3 className='Order-text mt-5'><CountUp start={0} end={12}>

                  
                                    {({ countUpRef, start }) => (


                                          <VisibilitySensor onChange={start}>
                                          <span ref={countUpRef} />
                                          </VisibilitySensor>
                                          
                                    )}
                                    </CountUp>
                                    K+                                  
                  </h3>
                  </Col>

                  <Col className='Order-text mt-5'>
                  <h6>Project</h6>
                  <h6>Created</h6>
                  </Col>

                  <Col>

                  <h3 className='Order-text mt-5'><CountUp start={0} end={1947}>

                  
                                    {({ countUpRef, start }) => (


                                          <VisibilitySensor onChange={start}>
                                          <span ref={countUpRef} />
                                          </VisibilitySensor>
                                                                                    
                                    )}
                                    </CountUp>
                                                                       
                  </h3>
                  </Col>

                  <Col className='Order-text mt-5'>
                  <h6>Agencies</h6>
                  <h6>Joined</h6>
                  </Col>
                   

            </div>
            
      </Col>
    </Row>

   </Container>
                    
               </Fragment>
    )
  }
}
