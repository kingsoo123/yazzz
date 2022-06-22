import React from "react";
import { FaYoutube, FaFacebookF, FaTwitter, FaInstagramSquare } from 'react-icons/fa';



const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container flexSB">
          <div className="logo">
            <h1>CONSULTATION</h1>
            <span>PHYSICAL & VIRTUAL TRAININGS</span>
          </div>
          <div className="social">
            <FaYoutube className="icon" size={15}/>
            <FaFacebookF className="icon"/>
            <FaTwitter className="icon"/>
            <FaInstagramSquare className="icon"/>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
