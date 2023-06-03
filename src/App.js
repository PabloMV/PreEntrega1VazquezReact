import { Component } from 'react';
import './App.css';

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App () {
  return (
    <div className="App">
    <h1>TINTOK</h1> 
    <h2>Vinos y Delicatessen</h2>
    <NavBar />
    <ItemListContainer greeting= "Vinos y demas"/>
 
    </div>
  );
}

export default App;
