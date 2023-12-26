import React, { FC, useEffect } from 'react';
import './styles/global.css';
import RoutesApp from './routes/routes';
import Header from './components/header/Header';


const App: FC = () => {

  return (

    <div className="App">
       <Header/>
       <RoutesApp/>
    </div>
  )
}

export default App;
