import React from "react";
import './contact.css'
const Contact = () => {
   return (
    <section id="contact">
    <h5> Get in touch</h5>
    <h2>Contat Me</h2>
  <div className="container  Contact__container">
    <div className="contact_options">
    <article className="contact-option">
    <h6>icons</h6>
      <h4 className="conatct-icon"> Email</h4>
      <h5>En.hasan.abd@gmail.com</h5>
      <a href=" mailto:En.hasan.abd@gmail.com"> Send a massage</a>
    </article>
    <article className="contact-option">
    <h6>icons</h6>
      <h4 className="conatct-icon"> massenger</h4>
      <h5>Hasan</h5>
      <a href=" "> Send a massage</a>
    </article>
    <article className="contact-option">
    <h6>icons</h6>
      <h4 className="conatct-icon"> Whatsapp</h4>
      <h5>+963 934893854</h5>
      <a href=" " > Send a massage</a>
    </article>

    </div>
    {/*End contact */}
    <form action="">

      <input type='text'name='name' placeholder="Your full name" required/>
      <input type='email'name='email' placeholder="Your full email" required/>
      <textarea name='message'  rows='7' placeholder="massege" required></textarea>
      <button type="submit" className="btn btn-primary">Send message</button>
    </form>
  </div>


    </section>
  );
};

export default Contact;