import { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { VideoPlayerContext } from '../../../../../../hookes/contexts/VideoPlayer.context'

export function PlayButton() {
    
    const { setVideoPlayState } = useContext(VideoPlayerContext)

    return (
        <FontAwesomeIcon icon="fa-solid fa-play"
                    className='play_control-button link'
                    onClick={setVideoPlayState} />
    )
}