import { useContext , useState} from 'react'
import { VideoPlayerContext } from '../../../../../../hookes/contexts/VideoPlayer.context'

export function SpeedButton() {
    
    const { videoRef} = useContext(VideoPlayerContext)
    const [currentSpeed, setCurrentSpeed] = useState(1) 

    const [isOpenChangeSpeedControl, setIsOpenChangeSpeedControl] = useState(false)

    const changeSpeed = (speed) => {
        setCurrentSpeed(speed)
        videoRef.current.playbackRate = speed
    }

    const speeds = Array.from({length: 7}, (_, i) => (i * 0.25) + 0.5)

    
    const openChangeSpeedControl = () =>
        setIsOpenChangeSpeedControl(!isOpenChangeSpeedControl)
 
    return (
       <label className='speed light link' onClick={openChangeSpeedControl}>
            {isOpenChangeSpeedControl &&
                <ul className="speedControl dark">
                    {
                        speeds.map((speed, index) =>
                            <li key={index} onClick={()=> changeSpeed(speed) }>
                                {speed}x
                                {
                                    currentSpeed === speed &&
                                    <div className="current"></div>
                                }
                            </li>
                        )
                    }
                </ul>
            }
            {currentSpeed}x
        </label>
    )
}