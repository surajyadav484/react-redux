import React, { Component } from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/CourseActions";
import * as authorsActions from "../../redux/actions/authorsActions";
import PropType from "prop-types";
import { bindActionCreators } from "redux";
import CourseList from "./CourseList.jsx";

class CoursePage extends Component {
  componentDidMount() {
    const { courses, actions, authors } = this.props;

    if (courses.length === 0) {
      actions.loadCourses().catch((error) => {
        alert("loading courses failed" + error);
      });
    }

    if (authors.length === 0) {
      actions.loadAuthors().catch((error) => {
        alert("loading authors failed" + error);
      });
    }
  }

  render() {
    return (
      <>
        <h1>Courses</h1>
        <CourseList courses={this.props.courses} />
      </>
    );
  }
}

CoursePage.propTypes = {
  courses: PropType.array.isRequired,
  actions: PropType.object.isRequired,
  authors: PropType.array.isRequired,
};

function mapStateToProps(state) {
  console.log(state);
  return {
    courses:
      state.authors.length === 0
        ? []
        : state.courses.map((course) => {
            return {
              ...course,
              authorName: state.authors.find((a) => a.id === course.authorId)
                .name,
            };
          }),
    authors: state.authors,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
      loadAuthors: bindActionCreators(authorsActions.loadAuthors, dispatch),
    },
  };
}

// export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);
// we can omit mapDispatchToProps in connect method as connect method by default passes mapDispatchToProps.

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage); //connect method returns a method, again calling that method with CoursesPage compoent hence using two parenthesis.
