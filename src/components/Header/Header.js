import React from 'react';
import './Header.css';
import logo001 from '../../images/logo001.png'

export default function Header() {
    return (       
        <div className="App-header">
            <img src={logo001} alt="H&Mti"></img>
            <h1>H&M</h1>
            <h3>tech intelligence</h3>
        </div>        
      );
}