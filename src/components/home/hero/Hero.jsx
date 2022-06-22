import React from 'react'
import { FaArrowRight } from 'react-icons/fa' 
import Title from '../../common/title/Title';
import './Hero.css';

const Hero = () => {
  return (
    <>
    <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Title subtitle='WELCOME TO ACADEMIA' title='Best Online Education Expertise'/>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            <div className='button'>
              <button className='primary-btn'>
                GET STARTED NOW <FaArrowRight className='arrow'/>
              </button>
              <button>
                VIEW COURSE <FaArrowRight className='arrow'/>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero