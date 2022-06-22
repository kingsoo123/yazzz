import React from "react";
import Back from "../common/back/Back";
import BlogCard from "./BlogCard";
import "./Blog.css";
import Header from "../heading/Header";
import Footer from "../footer/Footer";

const Blog = () => {
  return (
      <>
          <Header />
      <Back title="Blog Posts" />
      <section className="blog padding">
        <div className="container grid2">
          <BlogCard />
        </div>
          </section>
          <Footer />
    </>
  );
};

export default Blog;
