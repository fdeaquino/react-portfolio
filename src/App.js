import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';

function App() {

  const [currentComponent, setCurrentComponent] = useState('About');

  return (
    <div>
      <Nav></Nav>
      <main>
        <Portfolio></Portfolio>
        <About></About>
        <ContactForm></ContactForm>
      </main>
    </div>
  );
}

export default App;
