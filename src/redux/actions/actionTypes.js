export const LOAD_COURSES_SUCCESS = "LOAD_COURSES_SUCCESS";
export const LOAD_AUTHORS_SUCCESS = "LOAD_AUTHORS_SUCCESS";
export const CREATE_COURSE_SUCCESS = "CREATE_COURSE_SUCCESS";
export const UPDATE_COURSE_SUCCESS = "UPDATE_COURSE_SUCCESS";
export const BEGIN_API_CALL = "BEGIN_API_CALL";

//By convention, the action that end in "_SUCCESS" are assumed to have benn completed API call.
//But since we are doing an optimistic delete, we are hiding loading delete.
//So this action name deliberately omits the "_SUCCESS" suffix.
//If it had one, our apiCallInProgess counter would be decremented below zero because we are not decrementing the number of apiCallsInProgress when the delete request begins
export const DELETE_COURSE_OPTIMISTIC = "DELETE_COURSE_OPTIMISTIC";
