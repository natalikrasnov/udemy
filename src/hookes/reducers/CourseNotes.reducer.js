export const NoteInitialState = [];

const CourseNotesReducer = (notes, action) => {
  console.log("reducer", action);
  switch (action.type) {
    case "SET_NOTES":
      return [...action.notes];
    case "ADD_NOTE":
      return [...notes, action.note];
      case "SAVE_NOTE":
      return notes.map(el=>{
        if (el.id === action.note.id) el = {...action.note}
        return el;
      });
    case "DELETE_NOTE":
      return notes.filter((el) => el.id !== action.id);
    default:
      return [...notes];
  }
};

export default CourseNotesReducer;
