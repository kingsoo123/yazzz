import React from "react";
import Back from "../common/back/Back";
import Footer from "../footer/Footer";
import Header from "../heading/Header";
import CourseCard from "./CourseCard";
import OnlineCourses from "./OnlineCourses";

const CourseHome = () => {

    return (
        <>
            <Header />
            <Back title='Explore Courses' />
            <CourseCard />
            <OnlineCourses />
            <Footer></Footer>
        </>
    )
}

export default CourseHome;