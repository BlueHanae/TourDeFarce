import React, { useState } from 'react';
import "../Loader/Loader.scss";
import croissant from "../assets/croissant.png"

function Loader() {

    return (
      <div className="loader">
        <img src={croissant} width="100px" height="100px" alt="image de croissant"/>
      </div >
    );
  }

export default Loader