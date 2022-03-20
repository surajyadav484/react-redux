import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadAuthors } from "../../redux/actions/authorsActions";
import { loadCourses } from "../../redux/actions/CourseActions";
import PropType from "prop-types";
import CourseForm from "./CourseForm";

const ManageCourse = ({
  courses,
  authors,
  loadCourses,
  loadAuthors,
  ...props
}) => {
  //..props -> other remaining properties

  const [course, setCourse] = useState({ ...props.course });
  const [error, setError] = useState();

  useEffect(() => {
    if (courses.length === 0) {
      loadCourses().catch((error) =>
        alert("error while loading courses details" + error)
      );
    }
    if (authors.length === 0) {
      loadAuthors().catch((error) =>
        alert("error while loading authors details" + error)
      );
    }
  }, []);

  return (
    <>
      <CourseForm course={course} errors={error} authors={authors} />
    </>
  );
};

ManageCourse.propTypes = {
  course: PropType.object.isRequired,
  courses: PropType.array.isRequired,
  authors: PropType.array.isRequired,
  loadAuthors: PropType.func.isRequired,
  loadCourses: PropType.func.isRequired,
};

function mapStateToProps(state) {
  return {
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
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCourse);
