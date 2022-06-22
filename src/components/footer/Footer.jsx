import React from "react";
import "./Footer.css";
import {
  FaYoutube,
  FaFacebookF,
  FaTwitter,
  FaInstagramSquare,
  FaUser,
  FaMap,
  FaPhoneAlt,
  FaMailBulk,
} from "react-icons/fa";
import { blog } from "../../dummyData";

const Footer = () => {
  return (
    <>
      <section className="newletter">
        <div className="container flexSB">
          <div className="left row">
            <h1>Newsletter -stay tune and get the latest update</h1>
            <span>Far far away, behind the word mountains</span>
          </div>
          <div className="right row">
            <input type="text" placeholder="Enter email address" />
            <i className="fa fa-paper-plane"></i>
          </div>
        </div>
      </section>
      <footer>
        <div className="container padding">
          <div className="box logo">
            <h1>CONSULTANCY</h1>
            <span>Virtual & Physical Consultancy</span>
            <p>
              ksjhdf jskdhs f iwehfuiwe vidnjfd j js iwsdhijws wjkhdiuejwnfiwe
              oiwuehfwiew iowfidjw fidhu isuhjeiw wdiuhdiwfuw ewiuhe
            </p>
            <FaYoutube className="icon" size={50} />
            <FaFacebookF className="icon" />
            <FaTwitter className="icon" />
            <FaInstagramSquare className="icon" />
          </div>
          <div className="box link">
            <h3>Explore</h3>
            <ul>
              <li>About Us</li>
              <li>About Us</li>
              <li>About Us</li>
              <li>About Us</li>
              <li>About Us</li>
            </ul>
          </div>
          <div className="box link">
            <h3>Quote Links</h3>
            <ul>
              <li>About Us</li>
              <li>About Us</li>
              <li>About Us</li>
              <li>About Us</li>
              <li>About Us</li>
            </ul>
          </div>
          <div className="box">
            <h3>Recent Post</h3>
            {blog.slice(0, 3).map((val) => (
              <div className="items flexSB">
                <div className="img">
                  <img src={val.cover} alt="cover" />
                </div>
                <div className="text">
                  <span>
                    <FaUser className="icon" />
                    <label htmlFor="">{val.type}</label>
                  </span>
                  <h4>{val.title}</h4>
                </div>
              </div>
            ))}
          </div>
          <div className="box last">
            <h3>Have a Question?</h3>
            <ul>
              <li>
                <FaMap className="icon"/>
                Wuse 198, Abuja road Nigeria
              </li>
              <li>
                <FaPhoneAlt className="icon"/>
                +234898763763
              </li>
              <li>
                <FaMailBulk className="icon"/>
                consultNow@betterwaysnigeria.com.ng
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="legal">
        <p>Copyright @2022 All rights reserved</p>
      </div>
    </>
  );
};

export default Footer;
