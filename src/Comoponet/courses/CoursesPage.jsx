import React, { Component } from "react";

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
    alert(this.state.courses.title);
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
        </form>
      </>
    );
  }
}

export default CoursePage;
