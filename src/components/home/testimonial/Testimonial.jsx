import React from "react";
import { testimonal } from "../../../dummyData";
import Title from "../../common/title/Title";
import './style.css'

const Testimonial = () => {
  return (
    <>
      <section className="testimonial padding">
        <div className="container">
          <Title subtitle="testimonial" title="Our Succesful Students" />
          <div className="content grid2">
            {testimonal.map((val) => (
              <div className="items shadow">
                <div className="box flex">
                  <div className="img">
                    <img src={val.cover} alt="cover" />
                    {/* add an icon for double quote here */}
                  </div>
                        <div className="name">
                            <h2>{val.name}</h2>
                            <span>{ val.post}</span>
                  </div>
                    </div>
                    <p>{ val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
