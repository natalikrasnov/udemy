import { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { VideoPlayerContext } from '../../../../../../hookes/contexts/VideoPlayer.context'

export function BackWordsButton() {
    
    const {videoRef, setVideoCurrentTime} = useContext(VideoPlayerContext)
    
    const goBackwards = () => {
        const newTime = videoRef.current.currentTime - 5.00
        videoRef.current.currentTime = newTime
        setVideoCurrentTime(newTime)
    }

    return (
       <FontAwesomeIcon icon="fa-solid fa-arrow-rotate-left"
                    className='link'
            onClick={goBackwards}
        />
    )
}