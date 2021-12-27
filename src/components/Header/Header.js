import React from 'react';
import './Header.css';
import logo001 from '../../images/logo001.png'

const Header = () => {
    return (        
        <div className="App-header">
            <img className="App-logo-header" src={logo001} />
            <h1>H&F</h1>
            <h3>tech intelligence</h3>
        </div>        
      );
}

export default Header;