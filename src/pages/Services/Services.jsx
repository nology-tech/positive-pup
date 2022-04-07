import Layout from "../../components/Layout/Layout";
import Header from "../../components/Header/Header";
import { CoursesList } from "../../Containers/CoursesList/CoursesList";
import courseData from "../../assets/mockData/courseData";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useState } from "react";

const Services = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  };

  const filteredSearchItems = courseData.filter((course) => {
    const filteredCourseHeading = course.courseHeading.toLowerCase();
    return filteredCourseHeading.includes(searchTerm);
  });

  return (
    <Layout>
      <Header
        isLeftAlign={false}
        headingText={"Services"}
        subheadingText={"Take a peek at everything we offer"}
      />
      <SearchBar
        searchTerm={searchTerm}
        handleInput={handleInput}
        label="Search Courses"
      />
      <CoursesList courseData={filteredSearchItems} />
    </Layout>
  );
};

export default Services;
