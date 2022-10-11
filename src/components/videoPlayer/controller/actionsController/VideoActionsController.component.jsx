import { useContext } from "react"
import { VideoPlayerContext } from "../../../../hookes/contexts/VideoPlayer.context"
import { Progress } from "../progress.component"
import { VideoActions } from "./VideoActions.component"

export function VideoActionsController({ }) {
    const {videoControlRef} = useContext(VideoPlayerContext)

    return (
        <div className='video-controller play-display'
            ref={videoControlRef}
        >
            <Progress />
            <VideoActions />
        </div>
    )
}