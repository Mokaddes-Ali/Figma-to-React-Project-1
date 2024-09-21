import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Resume from './Pages/Resume';
import About from './Pages/About';
import Works from './Pages/Works';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';

function App() {
  return (
    <div>
    <Router>
      <div className="App bg-light-mode dark:bg-dark-mode bg-cover bg-center h-[1360px] w-[1349px]">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/About" element={<About />} />
            <Route path="/Resume" element={<Resume />} />
            <Route path="/Works" element={<Works />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
       </div>
    </Router>
    </div>
  );
}

export default App;
