import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import ContactHeader from './components/ContactHeader';
import Footer from './components/Footer';
import Error from './components/Error';
import './styles.css'; 
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

function Home() {
  return (
    <>
      <ContactHeader />
      <NavBar />
      <Footer />
    </>
  );
}

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Error />} />
        <Route path="/" element={<Home />} />
        
      </Routes>
    </Router>
  );
}

render(<App />, document.getElementById('root'));