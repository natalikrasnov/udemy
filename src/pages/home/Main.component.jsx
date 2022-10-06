import { Banner, CardCourse, VerticalScrollPagination } from "../../components";
import { Header } from "./header/Header.component";

export function Main() {

    

    const GetLearningCards = () => {
        return [
            <CardCourse />,
            <CardCourse />,
            <CardCourse />,
            <CardCourse />,
            <CardCourse />
        ]
    }

    const GetNewLearningCards = ({topic}) => {
        return [

        ]
    }

    return (
        <div className="main-home">
            <Header />
            <Banner
                title="Special offer — just hours to save!"
                info="Your exclusive longtime-learner deal: courses from just ₪49.90 for a very limited time"
            />
            <div className="content">
                <div className="lets-start"> 
                    <label className="lets-start_label">Let's start learning, Natali krasnov</label>
                    <a className="underline">My learning</a>
                </div>
                <VerticalScrollPagination>
                    <GetLearningCards />
                </VerticalScrollPagination>
                <label className="lets-start_label">What to learn next</label>
                <label className="sub_title">Because you viewed “<a>Robot Framework Test Automation - Level 2</a>”</label>
                 <VerticalScrollPagination>
                    <GetLearningCards />
                </VerticalScrollPagination>
                <label className="sub_title">Popular for aspiring Software Testers</label>
                <VerticalScrollPagination>
                    <GetLearningCards />
                </VerticalScrollPagination>
                <label className="sub_title">Recommended for you</label>
                <VerticalScrollPagination>
                    <GetLearningCards />
                </VerticalScrollPagination>
            </div>
        </div>
    )
}