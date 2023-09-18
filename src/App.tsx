import { useEffect } from 'react'
import './App.css'
import './assets/loading.css'
import './assets/netflixLikeLogo.css'

import { useNavigate } from 'react-router-dom';

import { motion } from "framer-motion";


function App() {

  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate('/celebrations'); // Replace '/destination' with your desired route
    }, 3000); // 3000 milliseconds = 3 seconds

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>
          <span>M</span>
          <span>I</span>
          <span>S</span>
          <span>S</span>
          <span>A</span>
          <span>F</span>
          <span>L</span>
          <span>I</span>
          <span>X</span>
        </h1>
        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
      </motion.main>
    </>
  )
}

export default App
