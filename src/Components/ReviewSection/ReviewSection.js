import React, { Component, Fragment } from 'react';
import '../../Components/ReviewSection/ReviewSection.css';
import { Container, Row ,Col} from 'react-bootstrap';
import review from '../../Assets/Images/review.png';
import review2 from '../../Assets/Images/review2.png';




export default class ReviewSection extends Component {
  render() {
    return (
         <Fragment>


<Container fluid className='Main-Review'>
<Container >
<Row className='color-bg ' >
<div>
      <h1 className='good-xp text-center mt-5'>What our customer are saying 😍</h1>
      </div>
      <Col lg={6} md={6} sm={12}>

            <h2 className='review-text'>The best UI Kit for developers. So easy to implement and publish.</h2>
            <p className='review-p mt-4'>“You made it so simple. My new site is so much faster and easier to work with than
             my old site. I just choose the page, make the change.”</p>


            <h2 className='reviewName mt-5'><img src={ review } alt="" className='' ></img>  Theresa Webb</h2>
            <p className='review'>Medical Assistant</p>

      </Col>

      <Col lg={6} md={6} sm={12}>

      <h2 className='review-text'>Rare blocks helps you optimize for engagement.</h2>
            <p className='review-p mt-4'>“You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.”</p>


            <h2 className='reviewName mt-5'><img src={ review2 } alt="" className='' ></img>  Dianne Russell</h2>
            <p className='review'>Marketing Coordinator</p>
            
      </Col>
</Row>
</Container>
</Container>

</Fragment>

    )
  }
}
