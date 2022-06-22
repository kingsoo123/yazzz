import React from "react";
import { blog } from "../../dummyData";
import { FaUser, FaCalendar, FaComment } from "react-icons/fa";
import Title from "../common/title/Title";

const Hblog = () => {
  return (
    <>
      <section className="blog">
        <div className="container">
          <Title subtitle="OUR BLOG" title="Recent From Blog" />
          <div className="grid2">
            {blog.slice(0, 3).map((val) => (
              <div className="items shadow">
                <div className="img">
                  <img src={val.cover} alt="" />
                </div>
                <div className="text">
                  <div className="admin flexSB">
                    <span>
                      <FaUser />
                      <label htmlFor="">{val.type}</label>
                    </span>
                    <span>
                      <FaCalendar />
                      <label htmlFor="">{val.date}</label>
                    </span>
                    <span>
                      <FaComment />
                      <label htmlFor="">{val.com}</label>
                    </span>
                  </div>
                  <h1>{val.title}</h1>
                  <p>{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hblog;
