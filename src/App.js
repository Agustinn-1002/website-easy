import React,{useState} from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Section from './components/Section';
import {GlobalStyle} from './styled/Global'

function App() {
  const [toogleIcon, setToogleIcon] = useState(false)

  const toogleNavIcon = () => setToogleIcon(!toogleIcon)

  return (
    <>
      <GlobalStyle />
      <Navbar toogleIcon={toogleIcon} toogleNavIcon={toogleNavIcon}></Navbar>
      <Header toogleIcon={toogleIcon} toogleNavIcon={toogleNavIcon}></Header>
      <Section toogleIcon={toogleIcon} toogleNavIcon={toogleNavIcon}></Section>
      <Footer toogleIcon={toogleIcon} toogleNavIcon={toogleNavIcon}></Footer>
    </>
  );
}

export default App;
