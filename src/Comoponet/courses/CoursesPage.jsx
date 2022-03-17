import React, { Component } from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/CourseActions";
import PropType from "prop-types";
import { bindActionCreators } from "redux";

class CoursePage extends Component {
  constructor() {
    super();

    this.state = {
      courses: {
        title: "",
      },
    };
  }

  handleChange = (event) => {
    const courses = { ...this.state.courses, title: event.target.value };
    this.setState({ courses });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.actions.createCourse(this.state.courses);
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <h2>Courses</h2>
          <h3>Add Courses</h3>
          <input
            type="text"
            onChange={this.handleChange}
            // value={this.state.courses.title}
          />
          <input type="submit" value="Save" />
          {this.props.courses.map((course) => (
            <div key={course.title}>{course.title}</div>
          ))}
        </form>
      </>
    );
  }
}

CoursePage.PropType = {
  courses: PropType.array.isRequired,
  actions: PropType.object.isRequired,
};

function mapStateToProps(state) {
  return {
    courses: state.courses,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch),
  };
}

// export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);
// we can omit mapDispatchToProps in connect method as connect method by default passes mapDispatchToProps.

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage); //connect method returns a method, again calling that method with CoursesPage compoent hence using two parenthesis.
