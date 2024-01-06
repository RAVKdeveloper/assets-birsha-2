import React, { FC, useEffect } from 'react';
import './styles/global.css';
import RoutesApp from './routes/routes';
import Header from './components/header/Header';
import { useNavigate } from 'react-router-dom';


const App: FC = () => {

  const navigate = useNavigate()

  useEffect(() => {
    if(!localStorage.getItem('tokenAuth')) navigate('/login')
    
  }, [localStorage.getItem('tokenAuth')])

  return (

    <div className="App">
       <Header/>
       <RoutesApp/>
    </div>
  )
}

export default App;
