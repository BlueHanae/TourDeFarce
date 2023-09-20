
import Header from "./header/header";
import Footer from "./footer/footer";
import Parcours from './Parcours/Parcours';
import './App.scss';



import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Header />
      <Parcours />
      <Loader />
      <Footer />
    </div>
  );
}

export default App;
