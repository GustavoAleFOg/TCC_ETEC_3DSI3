import { useState } from 'react'
import './App.css'

import Header from './Componentes/Header/Header';
import Nav from './Componentes/Nav/Nav';
import Main from './Componentes/Main';
import Footer from './Componentes/Footer';

function App() {
  
  return (
    <>
    <div className=''>
        <Header />
        <Nav />
        <Main />
        <Footer />
    </div>
    </>
  )
}

export default App
