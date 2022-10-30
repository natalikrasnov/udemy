import { createContext, useReducer } from "react";
import CourseNotesReducer, { NoteInitialState } from "../reducers/CourseNotes.reducer";

export const CourseNotesContext = createContext()

const CourseNotesContextProvider = ({ children }) => {
    const [notes, dispatchNotes] = useReducer(CourseNotesReducer, NoteInitialState)

    return (
        <CourseNotesContext.Provider value={{notes, dispatchNotes}}>
            {children}
        </CourseNotesContext.Provider>
    )
}

export default CourseNotesContextProvider