import React from "react";
import './nav.css'
import { useState } from "react";

const Nav = () => {
  const [activeNav,setactiveNav]=useState('#');
   return (
    <nav>

      <a href="# " onClick={()=>setactiveNav('#')}className={activeNav ==='#' ? 'active': ''}> Home</a>
      <a href="#about" onClick={()=>setactiveNav('#about')}className={activeNav ==='#about' ? 'active':''}> about</a>
      <a href="#experence"onClick={()=>setactiveNav('#experence')}className={activeNav ==='#experence' ? 'active':''}> Experiance</a>
      <a href="#serv"onClick={()=>setactiveNav('#serv')}className={activeNav ==='#serv' ? 'active':''}> serices</a>
      <a href="#contact"onClick={()=>setactiveNav('#contact')}className={activeNav ==='#contact' ? 'active':''}> Contact</a>
    </nav>

  );
};

export default Nav;