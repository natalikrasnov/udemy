
                
import { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { VideoPlayerContext } from '../../../../../../hookes/contexts/VideoPlayer.context'

export function FullScreenButton() {
    
    const { videoRef  } = useContext(VideoPlayerContext)
    const [isFullScreen, setIsFullScreen] = useState(false)

    const ClickFullScreen = () => {
        const fullScreenDom = videoRef.current.parentElement
        if (isFullScreen) document.exitFullscreen();
        else {
             var fullscreen = fullScreenDom.webkitRequestFullscreen || fullScreenDom.mozRequestFullScreen || fullScreenDom.msRequestFullscreen;
            fullscreen.call(fullScreenDom);
        } 
        setIsFullScreen(!isFullScreen)
    }


    return (
        <FontAwesomeIcon
            className='full-screen link'
            icon={!isFullScreen ?"fa-solid fa-up-right-and-down-left-from-center" : "fa-solid fa-down-left-and-up-right-to-center"}
            onClick={ClickFullScreen}
        />
    )
}