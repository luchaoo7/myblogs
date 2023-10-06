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
import MoviesToWatch from './components/articles/MoviesToWatch';
import PythonBlog from './components/articles/PythonBlog';
import PythonVariablesDataBlog from './components/articles/PythonVariablesAndData';
import Cat from './components/articles/Cats';

function App() {

  return (
    <HelmetProvider>
      <Router>
        <NavBar />
        {/* <NavBar2 /> */}
        <div>
          <Routes>
            <Route path="/" element={<NBABlog />} />
            <Route path="/cat" element={<Cat />} />
            <Route path="/python" element={<PythonBlog component={NBABlog} name="test" />} />
            <Route path="/python/variables-datatypes" element={<PythonVariablesDataBlog />} />
            <Route path="/movies" element={<MoviesToWatch />} />
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
