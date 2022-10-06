import { useContext } from "react"
import { VideoPlayerContext } from "../../hookes/contexts/VideoPlayer.context"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function PlayButton({ }) {
    const { playButtonRef , isPlaying, setVideoPlayState} = useContext(VideoPlayerContext)
    
    const onButtonClick = (e) => {
        event.preventDefault()
        // addToggleClass(playButtonRef.current, 'play-action', 1000)
        setVideoPlayState()
    }

    return (
         <button
            ref={playButtonRef}
            onClick={onButtonClick}
            className="play-video"   
        >
            {
                isPlaying == null || isPlaying ?
                    <FontAwesomeIcon icon="fa-solid fa-play" />
                    :
                    <FontAwesomeIcon icon="fa-solid fa-pause" />
            }
        </button>
    )
}