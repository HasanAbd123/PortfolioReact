import React from "react";
import './testmon.css';
import ME from '../../assets/ME/me-about.jpg';

const data =[
     {avatar: ME,
     name:'archiv',
     review: 'ilov e vkfmdknfjrbndlskahfjgbfjldnfgfhbdlfnvjfb'
     },
     {avatar:ME,
          name:'hasan',
          review: 'ilov e vkfmdknfjrbndlskahfjgbfjldnfgfhbdlfnvjfb'
          },
          {avatar:ME,
               name:'ahmed',
               review: 'ilov e vkfmdknfjrbndlskahfjgbfjldnfgfhbdlfnvjfb'
               },
               {avatar:ME,
                    name:'mohamed',
                    review: 'ilov e vkfmdknfjrbndlskahfjgbfjldnfgfhbdlfnvjfb'
                    },

               ]




const Testmon = () => {
   return (
    <section id='testmn'>
    <h5> Review from clients</h5>
    <h2>Testimonials </h2> 
    <div className="container  test__container" >
      {
          data.map(({avatar, name ,review},index)=>(
               <article key={index} className="testimonial">
        <div className="client__avatar">
             <img src={avatar} alt=" "/>
             
        </div>
        <h5 className="client-name"> {name} </h5>
             <small className="client__review">
             {review}
              </small>
      </article>
          ))
               
          }
      
   
    </div>
    </section>
  );
};

export default Testmon;