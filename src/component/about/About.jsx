import React from "react";
import './about.css'
import ME from '../../assets/ME/me-about.jpg'
const About = () => {
   return (
    <section id="about">
    <h5>Get To naw</h5>
    <h2>About to Me</h2>
    <div className="container  about__container">
      <div className="about__me">
      <div className="about__me-image">
        <img src={ME} alt=""/>

        
      </div>

      </div>
      <div className="about__content">
      <div className="about__cards">
        <article className="about__card">
          <h2 className="about__icon">icone</h2>
          <h5>Experience</h5>
          <small>3+ years working</small>
        </article>
        <article className="about__card">
          <h2 className="about__icon">icone</h2>
          <h5>client</h5>
          <small>200+ wordwide</small>
        </article>
        <article className="about__card">
          <h2 className="about__icon">icone</h2>
          <h5>projects</h5>
          <small>80+ completed</small>
        </article>
   
      </div>
      <p>
          hkskjglkd;flfljdf;dkl;hgkjglkdhgifogejgkriugefkebifheofkbkdpd<br/> jhiogoldjfdjf
          ghgogjfgjkfjlkglkglfljgOjgkjglfkgjflgjkfjglfjgjjjjjjjjjj<br/>jjjjjjjjjjjjjjjjjjjjjjj
          rjgkfjgljflkglfjoigkflgjkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
        </p>

        <a href="#contact" className="btn btn-primary">lets the talk</a>
      </div>
    </div>


    
    </section>
  );
};

export default About;
