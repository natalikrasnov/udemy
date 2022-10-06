import { useContext } from "react"
import { VideoPlayerContext } from "../../hookes/contexts/VideoPlayer.context"

export function Progress({ }) {
    const { videoRef, videoCurrentTime, setVideoCurrentTime
    } = useContext(VideoPlayerContext)
    
    const getProgress = ((videoCurrentTime / videoRef?.current?.duration) * 100) + "%"

    const setVideoProgress = (event) => {
        console.log("video move", event)
        const progress = event.target.className === 'progress-progress' ? event.target.parentElement : event.target
        const left = event.clientX - progress.offsetLeft
        const sumWidth = progress.offsetWidth
        const newTime = left * videoRef?.current?.duration /sumWidth
        setVideoCurrentTime(newTime)
        videoRef.current.currentTime = newTime
    }

    return ( <div className='progress' onClick={setVideoProgress} >
         <div className='progress-progress' style={{ width: getProgress }}></div>
     </div>)
}