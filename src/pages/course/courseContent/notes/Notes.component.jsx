import { useEffect, useRef, useState } from "react"
import { useContext } from "react"
import { CustomDropDown, TextEditor } from "../../../../components"
import { CourseNotesContext } from "../../../../hookes/contexts/CourseNotes.context"
import { VideoPlayerContext } from "../../../../hookes/contexts/VideoPlayer.context"
import { getTimeStringify } from "../../../../utills/timeNdate"
import {addNoteAction } from '../../../../hookes/actions/CourseNotes.actions'
import { NoteTime } from "./NoteTime.component"
import { EditNote } from "./EditNote.component"

const filterData = ["All lecture", "Current Lecture"]
const sortByData = ["sort by most recent", "sort by oldest"]

export function Notes() {
    const { videoCurrentTime } = useContext(VideoPlayerContext)
    const {notes, dispatchNotes} = useContext(CourseNotesContext)

    const [isAddNote, setIsAddNote] = useState(false)
    const [isNoteAllowed, setIsNoteAllowed] = useState(true)

    const [sortBy, setSortBy] = useState(sortByData[0])
    const [filter, setFilter] = useState(filterData[0])

    const notesListRef = useRef()

    useEffect(() => {
            //notesListRef.current.innerHTML = 
    },[notes])

    const stringifyCurrentTime = getTimeStringify(videoCurrentTime)

    const handleAddNote = () => {
        setIsAddNote(!isAddNote)
    }


    return (
        <div className="notes_content">
            {isAddNote ?
               <EditNote />
                :
                <span className="add-note" onClick={handleAddNote}>
                    <label className="text">
                    Create a new note at { stringifyCurrentTime }
                    </label>
                    <label className="add dark">+</label>
                </span>   
            }
            <div className="filters">
                <CustomDropDown
                    isOpenDropDownOnClick
                    title={filter+" ⮟"}
                    className="filter"
                >
                    <ul >
                        {filterData.map((el, i) => <li key={i}>{ el}</li>)}
                    </ul>
                    
                </CustomDropDown>
                <CustomDropDown
                    isOpenDropDownOnClick
                    title={sortBy+" ⮟"}
                    className="filter"
                >
                     <ul >
                        {sortByData.map((el, i) => <li key={i}>{ el}</li>)}
                    </ul>
                    </CustomDropDown>
            </div>
            {(!notes || notes.length ===0) && <div className="center">
                 <label>Click the "Create a new note" box, the "+" button, or press "B" to make your first note.</label>
            </div>}
            {<div ref={notesListRef}></div>}
        </div>
    )
}

