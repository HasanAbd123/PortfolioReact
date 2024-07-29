import React from "react";
import './header.css';
import CTA from './CTA'
import ME from '../../assets/ME/me3.jpg'
import Headersocial from "./Headersocial";
const Header = () => {
   return (
   <header>
    <div className="container  header__container">
      <h5> Hello I am</h5>
      <h1>Hasan abd alal</h1>
      <h5 className="text-light"> Front End Developer</h5>
      <CTA/>
      <Headersocial/>
      <div className="me">
        <img src={ME} alt=""></img>
      </div>
      
      <a href=" #contact" className="scroll__down">Scroll Down</a>
       
    </div>
   </header>
  );
};

export default Header;