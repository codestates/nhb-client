import React from 'react';
import moon from '../img/moon.png';
import { Link } from 'react-router-dom';

export default function Homebutton() {
  return (
    <Link to="/">
      <img id="logo" src={moon} alt="Home" />
    </Link>
  );
}
