import { useEffect } from 'react'
import './App.css'

import { useNavigate } from 'react-router-dom';

function App() {

  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate('/celebrations'); // Replace '/destination' with your desired route
    }, 3000); // 3000 milliseconds = 3 seconds

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <h1>Welcome to missaflix!</h1>
  )
}

export default App
