import React from "react";


import Header from './component/header/Header'
import About from './component/about/About'
import Contact from './component/contact/Contact'
import Experence from './component/experence/Experence'
import Footer from './component/footer/Footer'
import Nav from './component/nav/Nav'
import Testmon from './component/testmon/Testmon'
import Serv from "./component/serv/Serv";
import Portfol from "./component/portfol/Portfol";

const App = () => {
   return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Experence/>
    <Serv/>
    <Portfol/>
    <Testmon/>
    <Contact/>
    <Footer/>
   
    </>
  );
};

export default App;
