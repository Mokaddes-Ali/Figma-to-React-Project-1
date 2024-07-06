import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Resume from './Pages/Resume';
import About from './Pages/About';
import Works from './Pages/Works';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import Home from './Pages/Home';


function App() {
  return (
    <Router>
      <div className="App bg-light-mode dark:bg-dark-mode">
        <Navbar />
        <div className="p-4">
          <Routes>
            <Route path="/About" element={<About />} />
            <Route path="/Resume" element={<Resume />} />
            <Route path="/Works" element={<Works />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/cv.pdf" element={<div>Your CV PDF will open/download here.</div>} />
          </Routes>
        </div>
       </div>
    </Router>
  );
}

export default App;
