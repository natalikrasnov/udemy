import { useContext } from "react"
import { getTimeStringify } from "../../../../utills/timeNdate"
import { VideoPlayerContext } from "../../../../hookes/contexts/VideoPlayer.context"
import { CourseNotesContext } from "../../../../hookes/contexts/CourseNotes.context" 
import { addNoteAction } from "../../../../hookes/actions/CourseNotes.actions"

export function EditNote({ note, time , handleAddNote}) {
    
    const { videoCurrentTime } = useContext(VideoPlayerContext)
    const { dispatchNotes} = useContext(CourseNotesContext)
    const [newNoteText, setNewNoteText] = useState(null)

    const stringifyCurrentTime = !time ? getTimeStringify(videoCurrentTime) : time

    const saveNote = () => {
         dispatchNotes(addNoteAction({
            id: '1',
            content: newNoteText
        }))
    }
    
    const onTextChange = (noteHTML) => {
        setNewNoteText(noteHTML)
    }


    return (
        <div className="table edit-note">
            <NoteTime time={stringifyCurrentTime} />
            <span className="notes_content-text_edit">
                <TextEditor onTextChange={onTextChange} setIsNoteAllowed={ setIsNoteAllowed} />
                <span className="buttons">
                    <button className="cancel" onClick={handleAddNote}>Cancel</button>
                    <button className="dark" onClick={saveNote}>Save note</button>
                </span>
            </span>            
        </div>
    )
}