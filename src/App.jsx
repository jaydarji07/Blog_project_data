import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'; // Import Routes
import './App.css';
import Header from './Layout/Header';
import Home from './PAGES/Home/Home';
import ShowMorePage from './PAGES/Home/ShowMorePage';
import Index from './PAGES/Write/Index';
import About from './PAGES/Write/about.jsx';
import Service from './PAGES/Write/service.jsx'
import Contact from './PAGES/Write/contact.jsx';

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/Index" element={<Index />} />
          <Route path="/ShowMorePage/:id" element={<ShowMorePage />} />
        </Routes>
      </Router >
    </>
  )
}

export default App
