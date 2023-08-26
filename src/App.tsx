import React from 'react'
import About from './components/About'
import { BrowserRouter as Router,
  Routes, 
  Route, 
} from 'react-router-dom';
import NavBar from './components/NavBar';
import { HelmetProvider } from 'react-helmet-async';
import ContactMe from './components/ContactMe';
import NBABlog from './components/articles/NBABlog';

function App() {

  return (
    <HelmetProvider>
      <Router>
        <NavBar />
        <div>
          <Routes>
            <Route path="/" element={<NBABlog />} />
            <Route path="/nba" element={<NBABlog />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactMe />} />
          </Routes>
        </div>
      </Router>
    </HelmetProvider>
  )
}

export default App
