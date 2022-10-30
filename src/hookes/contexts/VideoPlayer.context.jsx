import { createContext, useState, useRef } from "react";

export const VideoPlayerContext = createContext()

const VideoPlayerContextProvider = ({children}) => {
    const [isPlaying, setIsPlaying] = useState(null)
    const [videoCurrentTime, setVideoCurrentTime] = useState(0)

    const videoRef = useRef(null);
    const videoControlRef = useRef(null);
    const playButtonRef = useRef(null)


    const setVideoPlayState = () => {
        if (isPlaying) videoRef.current.pause()
        else videoRef.current.play()
        setIsPlaying(!isPlaying)        
    }


    return (
        <VideoPlayerContext.Provider value={{
            playButtonRef,
            setVideoPlayState,
            videoControlRef,
            videoCurrentTime,
            videoRef,
            setVideoCurrentTime
        }} >
            {children}
        </VideoPlayerContext.Provider>
    )
}

export default VideoPlayerContextProvider