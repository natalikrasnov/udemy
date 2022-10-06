import { createContext, useState, useRef } from "react";

export const VideoPlayerContext = createContext()

const VideoPlayerContextProvider = ({children}) => {
    const [isPlaying, setIsPlaying] = useState(null)
    const [videoCurrentTime, setVideoCurrentTime] = useState(0)
    const [currentSpeed, setCurrentSpeed] = useState(1) //seekable
    const [currentVolume, setCurrentVolume] = useState(1)//0.0 - 1.0

    const videoRef = useRef(null);
    const videoControlRef = useRef(null);
    const playButtonRef = useRef(null)

    const videoDuration = videoRef?.current?.duration

    const setVideoPlayState = () => {
        if (isPlaying) {
            videoRef.current.pause()
            setVideoCurrentTime(videoRef.current.currentTime)
        } 
        else videoRef.current.play()
        setIsPlaying(!isPlaying)        
    }


    return (
        <VideoPlayerContext.Provider value={{
            playButtonRef,
            setVideoPlayState,
            videoDuration,
            videoControlRef,
            videoCurrentTime,
            currentSpeed,
            currentVolume,
            setCurrentSpeed,
            setCurrentVolume,
            videoRef,
            setVideoCurrentTime
        }} >
            {children}
        </VideoPlayerContext.Provider>
    )
}

export default VideoPlayerContextProvider