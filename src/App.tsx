import React, { FC } from 'react';
import './styles/global.css';
import RoutesApp from './routes/routes';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';


const App: FC = () => {

  return (

    <div className="App">
       <Header/>
       <Sidebar/>
       <RoutesApp/>
    </div>
  )
}

export default App;
