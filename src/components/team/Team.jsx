import React from "react";
import Back from "../common/back/Back";
import TeamCard from "./TeamCard";
import "./Team.css"
import Header from "../heading/Header";
import Footer from "../footer/Footer";

const Team = () => {
  return (
    <>
      <Header />
          <Back title="Team" />
           <section className='team padding'>
        <div className='container grid'>
          <TeamCard />
        </div>
      </section>
      <Footer />
      {/* <Awrapper /> */}
    </>
  );
};

export default Team;
