import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadAuthors } from "../../redux/actions/authorsActions";
import { loadCourses, saveCourse } from "../../redux/actions/CourseActions";
import PropType from "prop-types";
import CourseForm from "./CourseForm";
import { newCourse } from "../../../tools/mockData";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";

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
  const [error, setError] = useState({});
  const [saving, setSaving] = useState(false);

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
    if (!isFormValid) return;
    setSaving(true);
    saveCourse(course).then(() => {
      toast.success("Course Saved.");
      history.push("/courses");
    });
  }

  function isFormValid() {
    const { title, authorId, category } = course;
    const error = {};
    if (!title) error.title = "Title is required";
    if (!authorId) error.title = "AuthorId is required";
    if (!category) error.title = "Category is required";

    setError(error);
    //Form is valid if error object still has no properties

    return Object.keys(error).length === 0;
  }

  return (
    <>
      {authors.length === 0 || courses.length === 0 ? (
        <Spinner />
      ) : (
        <CourseForm
          course={course}
          errors={error}
          authors={authors}
          onChange={handleChange}
          onSave={handleSave}
          saving={saving}
        />
      )}
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
