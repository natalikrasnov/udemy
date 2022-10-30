import { useContext, useState } from 'react'
import { VideoPlayerContext } from '../../../../../../hookes/contexts/VideoPlayer.context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function VolumeButton() {
    
    const {videoRef} = useContext(VideoPlayerContext)
    const [currentVolume, setCurrentVolume] = useState(1)//0.0 - 1.0
    const [isOpenVolumeControl, setIsOpenVolumeControl] = useState(false)
   
    const setVolume = (event) => {
        const parent = event.currentTarget.getBoundingClientRect() 
        const targetHeight = parent.height - (event.clientY - parent.top)
        const volume = targetHeight / parent.height * 100
        const currVol = (volume / 100).toFixed(1)
        const vol = currVol < 0.1 ? 0 : currVol
        setCurrentVolume(vol)
        videoRef.current.volume = vol
    }

    const getVolume = () => {
        return currentVolume*100 +'%'
    }

    return (
        <div className='volume'>
            <FontAwesomeIcon className=' link'
                    icon={
                        currentVolume == 0 ?
                            "fa-solid fa-volume-xmark" :
                            "fa-solid fa-volume-high"
                    } onClick={() => setIsOpenVolumeControl(!isOpenVolumeControl)}
            />
            {
                    isOpenVolumeControl &&
                    <div className="volume-controller" onDragEnd={setVolume} onClick={setVolume} >
                        <div className="volume-current" style={{ height:getVolume() }}></div>
                    </div>
            }
        </div>
    )
}