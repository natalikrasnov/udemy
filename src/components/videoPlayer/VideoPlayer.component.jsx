import clip from '../../assets/meduza-james-carter-bad-memories-lyric-video.mp4'
import { useContext } from 'react';
import { VideoPlayerContext } from '../../hookes/contexts/VideoPlayer.context';
import { Video } from './Video.component';
import { VideoActionsController } from './controller/actionsController/VideoActionsController.component';
import { PlayButton } from './controller/PlayButton.component';

export function VideoPlayer({ video=clip/*url */ , title="1. meduza"}) {
    const { videoControlRef,playButtonRef} = useContext(VideoPlayerContext)

    const addToggleClass = (eventNode, className, time = 0) => {
        if(className) eventNode.classList.add(className)
        setTimeout(()=>{
            if(className) eventNode.classList.remove(className)
            playButtonRef.current && playButtonRef.current.classList.add('play-none')
            videoControlRef.current && videoControlRef.current.classList.remove('play-display')
        }, time)   
    }

    const onMouseLeaveVideo = (event) => {
        addToggleClass(videoControlRef.current, 'video-control-display', 7000)
    }


    const onMouseEnterVideo = () => {
        videoControlRef.current.classList.remove('video-control-display')
    }



    return (
        <div className='video-player dark'
            onMouseLeave={onMouseLeaveVideo}
            onMouseMove={onMouseEnterVideo}
        >
            <label className='title' >{title}</label>
            <Video url={video} />
            <PlayButton />
            <VideoActionsController />   
        </div>
    )

}