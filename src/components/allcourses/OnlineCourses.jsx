import React from "react";
import Title from "../common/title/Title";
import { online } from "../../dummyData";

const OnlineCourses = () => {
  return (
    <>
      <section className="online">
        <div className="container">
          <Title subtitle="COURSES" title="Browse Our Online Courses" />
          <div className="content grid3">
            {online.map((val) => (
                <div className="box">
                <div className="img">
                <img src={val.cover} alt="onlineimg" />
                <img src={val.hoverCover} alt="hoverCove" className="show" />
                    </div>
                    <h1>{val.courseName}</h1>
                    <span>{ val.course}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OnlineCourses;
