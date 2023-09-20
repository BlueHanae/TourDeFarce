
import Footer from "./footer/footer";
import Parcours from './Parcours/Parcours';
import Loader from './Loader/Loader';

import './App.scss';



import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Loader />
      <Parcours />
      <Footer />
    </div>
  );
}

export default App;
