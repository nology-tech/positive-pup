import Layout from "../../components/Layout/Layout";
import "./Services.scss";
import { CoursesList } from "../../Containers/CoursesList/CoursesList";
import courseData from "../../assets/mockData/courseData";
import ServicesCategoryFilter from "../../components/ServicesCategoryFilter/ServicesCategoryFilter";
import { useState } from "react";

const Services = () => {
  const [courseType, setCourseType] = useState("All");

  const handleClick = (event) => {
    console.log(event.target.id);
    if (event.target.id === "All") {
      setCourseType("All");
    } else if (event.target.id === "Online Courses") {
      setCourseType("Online Course");
    } else if (event.target.id === "Group Classes") {
      setCourseType("Group Class");
    } else if (event.target.id === "Bespoke Packages") {
      setCourseType("Bespoke Package");
    }
  };

  let filteredCourses;

  if (courseType === "All") {
    filteredCourses = courseData;
  } else {
    filteredCourses = courseData.filter(
      (course) => course.courseType === courseType
    );
    console.log(filteredCourses);
  }

  return (
    <Layout>
      <div className="services">
        <h1 className="services__heading">OUR SERVICES</h1>
        <h2 className="services__subheading">
          Take a peek at everything we offer
        </h2>
        <ServicesCategoryFilter
          courseType={courseType}
          handleClick={handleClick}
        />
        <CoursesList courseData={filteredCourses} />
      </div>
    </Layout>
  );
};

export default Services;
