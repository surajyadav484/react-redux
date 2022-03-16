export function createCourse(course) {
  return { type: "CREATE_COURSE", course: course }; //this can also be written using object shorhand property i.e. {type:"CREATE_COURSE", course}
}
