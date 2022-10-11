import { useContext , useState} from 'react'
import { VideoPlayerContext } from '../../../../../../hookes/contexts/VideoPlayer.context'

export function SpeedButton() {
    
    const { videoRef, setCurrentSpeed, currentSpeed } = useContext(VideoPlayerContext)

    const [isOpenChangeSpeedControl, setIsOpenChangeSpeedControl] = useState(false)

     const GetList = () => {
        const list = []
        for (let index = 0.5; index <= 2; index+=0.25) {
            list.push(
                <li key={index} onClick={()=> changeSpeed(index) }>
                    {index} x
                    {current== index && <div className="current"></div>}
                </li>
            )
        }
        return list
    }
   
    const changeSpeed = (speed) => {
        setCurrentSpeed(speed)
       videoRef.current.playbackRate = speed
    }

    
    const openChangeSpeedControl = () => {
        setIsOpenChangeSpeedControl(!isOpenChangeSpeedControl)
    }
 
    return (
       <label className='speed light link' onClick={openChangeSpeedControl}>
            {isOpenChangeSpeedControl &&
                <ul className="speedControl dark">
                    <GetList />
                </ul>
            }
            {currentSpeed}x
        </label>
    )
}