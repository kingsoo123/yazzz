import React from "react";
import Back from "../common/back/Back";
import Footer from "../footer/Footer";
import Header from "../heading/Header";
import './Contact.css'

const Contact = () => {
  return (
    <>
      <Header />
      <Back title="Contact Us" />
      <section className="contact padding">
        <div className="container shadow flexSB">
          <div className="left row"></div>
          <div className="right row">
            <h1>Contact Us</h1>
            <p>
              {" "}
              Welcome to the office suit where consultations are immenitable
            </p>
            <div className="items grid2">
              <div className="box">
                <h4>ADDRESS:</h4>
                <p>198 Wuse 2 Abuja, Nigeria Lagos</p>
              </div>

              <div className="box">
                <h4>EMAIL:</h4>
                <p>info@gmail.com</p>
              </div>

              <div className="box">
                <h4>PHONE:</h4>
                <p>+234 - 905 - 381 - 2296</p>
              </div>
            </div>

            <form>
              <div className="flexSB">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
              </div>
              <input type="email" placeholder="Subject" />
              <textarea cols="30" rows="10">
                Create a message here.......
              </textarea>
              <button className="primary-btn">SEND MESSAGE</button>
            </form>
            <h3>Follow us here</h3>
            <span>FACEBOOK TWITTER INSTAGRAM DRIBBLE</span>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
