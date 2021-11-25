import React from 'react';
import logo from '../assets/error'
import { Link } from 'react-router-dom';


export default function Error(){
    return (
        <div className="Error">
          <header className="header">
          <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
            <h1> Sorry. Page not Found </h1>
          </div>
          </header>
          <div className="image-container">
          <img  style={{ width: 700, height: 650 }} src={logo[0]}  alt={logo}/>
          </div>
          <div>
        <Link to='/home'>Go Home</Link>
        </div>
        </div>
        
      );

}