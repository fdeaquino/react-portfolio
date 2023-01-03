import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';

function App() {

    const [currentPage, setCurrentPage] = useState('Portfolio');


  function renderPage() {
    if (currentPage === 'About') {
      return <About></About>
    }

    if (currentPage === 'Portfolio') {
      return <Portfolio></Portfolio>
    }

    if (currentPage === 'ContactForm') {
      return <ContactForm></ContactForm>
    }

    // JSX
  }

  return (
    <div>
      <Nav setCurrentPage={setCurrentPage} ></Nav>
      <main>
        { renderPage()}
      </main>
    </div>
  );
}

export default App;
