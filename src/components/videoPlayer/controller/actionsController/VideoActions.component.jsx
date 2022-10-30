import { useContext } from "react"
import { VideoPlayerContext } from "../../../../hookes/contexts/VideoPlayer.context"
import { getTimeStringify } from "../../../../utills/timeNdate"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { PlayButton } from "./actions/left/PlayButton.component"
import { BackWordsButton } from "./actions/left/BackwardsButton.component"
import { ForwardsButton } from "./actions/left/ForwardsButton.component"
import { SpeedButton } from "./actions/left/SpeedButton.component"
import { VolumeButton } from "./actions/right/VolumeButton.component"
import { FullScreenButton } from "./actions/right/FullScreenButton.component"
import { useNavigate } from "react-router-dom"

export function VideoActions() {
    const {videoCurrentTime, videoRef} = useContext(VideoPlayerContext)

    const navigate = useNavigate()
    const videoDuration = videoRef?.current?.duration

    const addNotes = () => {
        navigate ('/course#notes')
    }
    const addTranscript = () => {
        // navigate ('/transcript', {state:{currentTime}})
    }

    return (
        <div className='video-actions'>
            <div className='left'>
                <PlayButton />
                <BackWordsButton />
                <SpeedButton />
                <ForwardsButton />
                <label className='time '>
                    {getTimeStringify(videoCurrentTime)} / {getTimeStringify(videoDuration)}
                </label>
                <FontAwesomeIcon icon="fa-solid fa-file-pen" className='add-notes link' onClick={addNotes}/>
            </div>
            <div className='right'>
                <VolumeButton />
                <FontAwesomeIcon
                    className='notes link'
                    icon="fa-regular fa-note-sticky"
                    onClick={addTranscript}
                />
                <FontAwesomeIcon
                    className='captions link'
                    icon="fa-regular fa-closed-captioning"
                />
                <FontAwesomeIcon
                    className='settings link'
                    icon="fa-solid fa-gear"

                />
                <FullScreenButton />
                 </div>
            </div>
    )
}