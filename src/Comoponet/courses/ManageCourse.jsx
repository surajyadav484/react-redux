import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadAuthors } from "../../redux/actions/authorsActions";
import { loadCourses, saveCourse } from "../../redux/actions/CourseActions";
import PropType from "prop-types";
import CourseForm from "./CourseForm";
import { newCourse } from "../../../tools/mockData";

const ManageCourse = ({
  courses,
  authors,
  loadCourses,
  loadAuthors,
  saveCourse,
  history,
  ...props
}) => {
  //..props -> other remaining properties

  const [course, setCourse] = useState({ ...props.course });
  const [error, setError] = useState();

  console.log();

  useEffect(() => {
    if (courses.length === 0) {
      loadCourses().catch((error) =>
        alert("error while loading courses details" + error)
      );
    } else {
      setCourse({ ...props.course });
    }
    if (authors.length === 0) {
      loadAuthors().catch((error) =>
        alert("error while loading authors details" + error)
      );
    }
  }, [props.course]);

  function handleChange(event) {
    const { name, value } = event.target;
    setCourse((prevState) => ({
      ...prevState,
      [name]: name === "authorId" ? parseInt(value) : value,
    }));
  }

  function handleSave(e) {
    e.preventDefault();
    saveCourse(course).then(() => history.push("/courses"));
  }

  return (
    <>
      <CourseForm
        course={course}
        errors={error}
        authors={authors}
        onChange={handleChange}
        onSave={handleSave}
      />
    </>
  );
};

ManageCourse.propTypes = {
  course: PropType.object.isRequired,
  courses: PropType.array.isRequired,
  authors: PropType.array.isRequired,
  loadAuthors: PropType.func.isRequired,
  loadCourses: PropType.func.isRequired,
  saveCourse: PropType.func.isRequired,
  history: PropType.object.isRequired,
};

export function getCourseById(courses, slug) {
  return courses.find((course) => course.slug === slug) || null;
}

function mapStateToProps(state, ownProps) {
  const slug = ownProps.match.params.slug;
  console.log(slug);
  const course =
    slug && state.courses.length > 0
      ? getCourseById(state.courses, slug)
      : newCourse;

  return {
    course,
    courses: state.courses,
    authors: state.authors,
  };
}
/* mapDispatchToProps can also be written as a function or you can write it as in CoursePage component. Here Im making it as object form */
const mapDispatchToProps = {
  /* keys on lefe side are variables which referes to imported loadAuthors and loadCourses from authosActions and coursesActions*/

  //   loadAuthors: loadAuthors,
  //   loadCourses: loadCourses,

  /* since in above syntax left side and right side are the same names hence we can use Js short hand property  as below*/
  loadAuthors,
  loadCourses,
  saveCourse,
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCourse);
