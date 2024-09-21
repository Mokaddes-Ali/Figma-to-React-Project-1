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
import Innerheader from './Components/Innerheader/Innerheader';
import MeetingSection from './Components/MeetingSection/MeetingSection';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
   <NavBar />
   <TopHeader />
   <div>
    <Innerheader />
    <MeetingSection />
    </div>
   <ChartBoxSection />
   <OrderSection />
   <ReviewSection />
   <Footer />
   </>
  </React.StrictMode>
 
);


reportWebVitals();
