import { useContext } from "react"
import { VideoPlayerContext } from "../../hookes/contexts/VideoPlayer.context"

export function Video({ url, videoEnded }) {

    const { videoRef, currentVolume, setVideoPlayState, setVideoCurrentTime } = useContext(VideoPlayerContext)
    
    const updateVideoCurrentTime = () => {
        setVideoCurrentTime(videoRef.current?.currentTime)
    }
    
    return (
            <video 
            src={url}
            ref={videoRef}
            muted={currentVolume === 0}
            onEnded={videoEnded}
            onClick={setVideoPlayState}
            onTimeUpdate={updateVideoCurrentTime}
            />
    )
}