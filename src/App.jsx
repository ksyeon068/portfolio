import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Loading from './components/loading/Loading'


import './App.css'
import Footer from './components/Footer'

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800); // 

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="App">
      <Header />
      <section id='Home'><Hero/></section>
      <section id='Skills'><Skills/></section>
      <section id='Projects'><Projects/></section>
      <section id='Contact'><Contact/></section>
      <Footer/>
    </div>
  )
}

export default App
