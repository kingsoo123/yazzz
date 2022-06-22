import React, { useState } from "react";
import { faq } from "../../dummyData";
import { FaArrowRight, FaArrowDown } from 'react-icons/fa' 
import Title from "../common/title/Title";

const Faq = () => {

    const [click, setClick] = useState(false)

  const toggle = (index) => {
    if (click === index) {
      return setClick(null)
    }
    setClick(index)
  }

  return (
    <>
      <Title subtitle="FAQS" title="Frequently Asked Questions" />
      <section className="faq">
      <div className='container'>
          {faq.map((val, index) => (
            <div className='box'>
              <button className='accordion' onClick={() => toggle(index)} key={index}>
                <h2>{val.title}</h2>
                <span>{click === index ? <FaArrowDown /> : <FaArrowRight />}</span>
              </button>
              {click === index ? (
                <div className='text'>
                  <p>{val.desc}</p>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Faq;
