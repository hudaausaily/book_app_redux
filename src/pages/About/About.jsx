import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BookHub</h2>
            <p className='fs-17'>"Reading is escape, and the opposite of escape; it's a way to make contact with reality after a day of making things up, and it's a way of making contact with someone else's imagination after a day that's all too real." – Nora Ephron</p>
            <p className='fs-17'>BookBub is a free service that helps millions of readers discover books they'll love  while providing publishers and authors with a way to drive sales and find new fans.<br/> BookBub features books ranging from top-tier publishers to critically acclaimed independent authors. Our experts ensure that we're only featuring great deals on quality books you'll love </p>
            <p className='fs-17'>"Both reading and writing are experiences – lifelong – in the course of which we who encounter words used in certain ways are persuaded by them to be brought mind and heart within the presence, the power, of the imagination." – Eudora Welty</p>
            <p className='fs-17'>Why reading is important?
Reading gets your mind working across different areas. For starters, it involves comprehension to process the words you read. Beyond that, you can use your analytical abilities, stimulate memories, and even broaden your imagination by reading words off a page.</p>

          </div>
        </div>
      </div>
    </section>
  )
}

export default About
