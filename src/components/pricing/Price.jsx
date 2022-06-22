import React from "react";
import Back from "../common/back/Back";
import PriceCard from "./PriceCard";
import './Price.css'
import Faq from "./faq";
import Header from "../heading/Header";
import Footer from "../footer/Footer";

const Price = () => {
  return (
    <>
      <Header />
      <Back title="Prices" />
      <section className="price padding">
        <div className="container grid">
          <PriceCard />
        </div>
          </section>
      <Faq />
      <Footer />
    </>
  );
};

export default Price;
