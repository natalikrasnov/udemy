import { Header } from "./Header.component";
import { useLocation} from 'react-router-dom'
import { VideoPlayer } from "../../components";
import VideoPlayerContextProvider from "../../hookes/contexts/VideoPlayer.context";
import { CourseContent } from "./courseContent/CourseContent.component";


export function MainDisplay({ }) {
    const location = useLocation();
    // const { id } = location.state
   
    return(
        <div className="course-main">
            <Header />
            <VideoPlayerContextProvider>
                <VideoPlayer />
                <CourseContent />
            </VideoPlayerContextProvider>
        </div>
    )
}