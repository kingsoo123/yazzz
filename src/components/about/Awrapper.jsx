import React from "react";
import { awrapper } from "../../dummyData";
const Awrapper = () => {
  return (
    <>
      <section className="awrapper">
        <div className="clcontainer grid">
          {awrapper.map((val) => (
            <div className="box flex">
              <div className="img">
                <img src={val.cover} alt="awrapper" />
              </div>
              <div className="text">
                <h1>{val.data}</h1>
                <h3>{val.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Awrapper;
