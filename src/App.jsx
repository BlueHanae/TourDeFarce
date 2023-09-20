
import Loader from "./Loader/Loader"
import Header from "./header/header";
import Footer from "./footer/footer";
import './App.scss';



import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Header />
      <Loader />
      <Footer />
    </div>
  );
}

export default App;
