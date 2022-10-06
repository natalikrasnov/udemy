import { useContext } from "react"
import { VideoPlayerContext } from "../../hookes/contexts/VideoPlayer.context"
import { getTimeStringify } from "../../utills/timeNdate"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from "react"

const SpeedControl = ({current, onCurrentChange}) => {

    const getList = () => {
        const list = []
        for (let index = 0.5; index <= 2; index+=0.25) {
            list.push(
                <li key={index} onClick={()=> onCurrentChange(index) }>
                    {index} x
                    {current== index && <div className="current"></div>}
                </li>
            )
        }
        return list
    }
   
    return (
        <ul className="speedControl dark">
          { getList() }
        </ul>
    )    
}

export function VideoActions() {

    const {
        setVideoPlayState,
        currentSpeed,
        videoCurrentTime,
        videoDuration,
        videoRef,
        setVideoCurrentTime,
        currentVolume,
        setCurrentVolume,
        setCurrentSpeed
    } = useContext(VideoPlayerContext)

    const [isOpenChangeSpeedControl, setIsOpenChangeSpeedControl] = useState(false)
    const [isOpenVolumeControl, setIsOpenVolumeControl] = useState(false)

    const [isFullScreen, setIsFullScreen] = useState(false)

    const addNotes = () => {
        
    }

    const changeSpeed = (speed) => {
        setCurrentSpeed(speed)
       videoRef.current.playbackRate = speed//doubele
    }

    const setVolume = (event) => {
        debugger
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

    const goBackwards = (event) => {
        const newTime = videoRef.current.currentTime - 5.00
        videoRef.current.currentTime = newTime
        setVideoCurrentTime(newTime)
    }
    const goForwards = (event) => {
        const newTime = videoRef.current.currentTime + 5.00
        videoRef.current.currentTime = newTime
        setVideoCurrentTime(newTime)
    }

    const ClickFullScreen = () => {
        console.log("full screen", videoRef)
        const fullScreenDom = videoRef.current.parentElement
        if (isFullScreen) document.exitFullscreen();
        else {
             var fullscreen = fullScreenDom.webkitRequestFullscreen || fullScreenDom.mozRequestFullScreen || fullScreenDom.msRequestFullscreen;
            fullscreen.call(fullScreenDom);
        } 
        setIsFullScreen(!isFullScreen)
    }

    const openChangeSpeedControl = () => {
        setIsOpenChangeSpeedControl(!isOpenChangeSpeedControl)
    }

    const AddNotes = () => {
        //navigate ('/notes', {state:{currentTime}})
    }
    const AddTranscript = () => {
        //navigate ('/transcript', {state:{currentTime}})
    }



    return (
        <div className='video-actions'>
                <div className='left'>
                <FontAwesomeIcon icon="fa-solid fa-play"
                    className='play_control-button link'
                    onClick={setVideoPlayState} />
                <FontAwesomeIcon icon="fa-solid fa-arrow-rotate-left"
                    className='link'
                    onClick={goBackwards} />
                <label className='speed light link' onClick={openChangeSpeedControl}>
                    {isOpenChangeSpeedControl &&
                        <SpeedControl current={currentSpeed} onCurrentChange={changeSpeed } />}
                    {currentSpeed}x
                </label>
                <FontAwesomeIcon icon="fa-solid fa-arrow-rotate-right "
                    className='link'
                    onClick={goForwards}
                />
                    <label className='time '>
                        {getTimeStringify(videoCurrentTime)} / {getTimeStringify(videoDuration)}
                    </label>
                    <FontAwesomeIcon icon="fa-solid fa-file-pen" className='add-notes link' onClick={addNotes}/>
                </div>
            <div className='right'>
                <FontAwesomeIcon className=' link'
                    icon={
                        currentVolume == 0 ?
                            "fa-solid fa-volume-xmark" :
                            "fa-solid fa-volume-high"
                    } onClick={()=> setIsOpenVolumeControl(!isOpenVolumeControl) } />
                   { isOpenVolumeControl && <div className="volume-controller" onDragEnd={setVolume} onClick={setVolume } >
                        <div className="volume-current" style={{ height:getVolume() }}></div>
                </div>}
                    
                <FontAwesomeIcon
                    className='notes link'
                    icon="fa-regular fa-note-sticky"
                    onClick={AddNotes}
                />
                <FontAwesomeIcon
                    className='captions link'
                    icon="fa-regular fa-closed-captioning"
                    onClick={AddTranscript}
                />
                <FontAwesomeIcon
                    className='settings link'
                    icon="fa-solid fa-gear"

                />
                <FontAwesomeIcon
                    className='full-screen link'
                    icon={!isFullScreen ?"fa-solid fa-up-right-and-down-left-from-center" : "fa-solid fa-down-left-and-up-right-to-center"}
                    onClick={ClickFullScreen}
                />
                 </div>
            </div>
    )
}