import React from 'react';
import logo from '../assets/logo'
import '../App.css';
import { useNavigate } from "react-router-dom";


const Home = () => {
const navigate = useNavigate();
const handleJoin = (event) => {
  navigate('/login');
}

    return (
        <div className="Logo">
          <header className="Logo-header">
          <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '20vh'}}>
            <h1> This is the Landing Page of the Base Activity, in which we have to recolect the a certain number of Post with router to other pages and
              using several tools to do it </h1>
          </div>
          <div className="button" style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
          <button onClick={handleJoin}>Log In</button>
          </div>
          </header>
          <div className="image-container">
          <img  style={{ width: 700, height: 650 }} src={logo[0]}  alt={logo}/>
          </div>
        </div>
      );

}
 export default Home;
