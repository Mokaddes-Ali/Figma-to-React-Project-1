import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import NavBar from './Components/NavBar/NavBar';
import TopHeader from './Components/TopHeader/TopHeader';
import ChartBoxSection from './Components/ChartBoxSection/ChartBoxSection';
import OrderSection from './Components/OrderSection/OrderSection';
import ReviewSection from './Components/ReviewSection/ReviewSection';
import Footer from './Components/Footer/Footer';
import Meeting from './Components/Meeting/Meeting';
import Inner from './Components/Innerheader/Inner';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
   <NavBar />
   <TopHeader />
   <Inner />
   <ChartBoxSection />
   <OrderSection />
   <Meeting />
   <ReviewSection />
   <Footer />
   </>
  </React.StrictMode>
 
);


reportWebVitals();
