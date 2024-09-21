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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
   <NavBar />
   <TopHeader />
   <ChartBoxSection />
   <OrderSection />
   <ReviewSection />
   <Footer />
   </>
  </React.StrictMode>
 
);


reportWebVitals();
