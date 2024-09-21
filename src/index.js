import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import NavBar from './Components/NavBar/NavBar';
import TopHeader from './Components/TopHeader/TopHeader';
import Innerheader from './Components/Innerheader/Innerheader';
import MeetingSection from './Components/MeetingSection/MeetingSection';
import ChartBoxSection from './Components/ChartBoxSection/ChartBoxSection';
import OrderSection from './Components/OrderSection/OrderSection';
import ReviewSection from './Components/ReviewSection/ReviewSection';
import Footer from './Components/Footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <NavBar />
   <TopHeader />
   <Innerheader />
   <MeetingSection />
   <ChartBoxSection />
   <OrderSection />
   <ReviewSection />
   <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
