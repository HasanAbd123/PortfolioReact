import React from "react";
import './portfol.css'
import ME from '../../assets/ME/Port1.jpeg'
const Portfol = () => {
   return (
   <section id='portfol'>
   <h5> What Recent work</h5>
   <h2>portfolio</h2>
   <div className="container portfol__container">

    <article className="port__item">
    <div className="port__item-image">
    <img src={ME} alt=""/>

    </div>
    <h3>this is a portfolio title</h3>
    <div className="port-item-cta">
    <a href="https://github.com" className="btn">Github</a>
    <a href="https://github.com" className="btn btn-primary">Live demo</a>
           </div>

    </article>
    <article className="port__item">
    <div className="port__item-image">
    <img src={ME} alt=""/>

    </div>
    <h3>this is a portfolio title</h3>
    <div className="port-item-cta">
    <a href="https://github.com" className="btn">Github</a>
    <a href="https://github.com" className="btn btn-primary">Live demo</a>
           </div>

    </article>
    <article className="port__item">
    <div className="port__item-image">
    <img src={ME} alt=""/>

    </div>
    <h3>this is a portfolio title</h3>
    <div className="port-item-cta">
    <a href="https://github.com" className="btn">Github</a>
    <a href="https://github.com" className="btn btn-primary">Live demo</a>
           </div>

    </article>
    <article className="port__item">
    <div className="port__item-image">
    <img src={ME} alt=""/>

    </div>
    <h3>this is a portfolio title</h3>
    <div className="port-item-cta">
    <a href="https://github.com" className="btn">Github</a>
    <a href="https://github.com" className="btn btn-primary">Live demo</a>
           </div>

    </article>
    <article className="port__item">
    <div className="port__item-image">
    <img src={ME} alt=""/>

    </div>
    <h3>this is a portfolio title</h3>
    <div className="port-item-cta">
    <a href="https://github.com" className="btn">Github</a>
    <a href="https://github.com" className="btn btn-primary">Live demo</a>
           </div>

    </article>
    <article className="port__item">
    <div className="port__item-image">
    <img src={ME} alt=""/>

    </div>
    <h3>this is a portfolio title</h3>
    <div className="port-item-cta">
    <a href="https://github.com" className="btn">Github</a>
    <a href="https://github.com" className="btn btn-primary">Live demo</a>
           </div>
    </article>
   </div>


   </section>
  );
};

export default Portfol;