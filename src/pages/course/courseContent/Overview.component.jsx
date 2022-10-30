import { getFakeDataAboutCourse } from "../../../testData/courses"

export function Overview() {
    const aboutCourse = getFakeDataAboutCourse
    const getSkillLevel = (level) => {
        switch (level) {
            case 1: return "beginner"
            case 2: return "pro"
        }
    }
    return (
        <div className="overview">
            <div className="overview_about ">
                <h2>About this course</h2>
                <label>{ aboutCourse.summarize}</label>
            </div>
            <div className="line"></div>
            <div className="overview_about ">
                <label>By { aboutCourse.author}</label>
                <label>Skill level: { getSkillLevel(aboutCourse.skillLevel)} Level</label>
                <label>Students: { aboutCourse.sumStudents}</label>
                <label>Languages: {aboutCourse.languages } </label>
                <label>Captions: { aboutCourse.captions? "Yes" : "No"}</label>
                <label>Lectures: { aboutCourse.sumLectures} </label>
                <label>Video: { aboutCourse.totalTime} total minutes</label>
             </div>
            <div className="line"></div>
            <div className="table">
                <label className="overview_about ">Certificates</label>
                <div className="overview_about ">
                    <label> Get Udemy certificate by completing entire course</label>
                    <button disabled className="get-certificate"> Udemy certificate</button>
                </div>
             </div>
            <div className="line"></div>
            <div className="table">
                <label className="overview_about ">Features</label>
                <span className="overview_about ">
                    <label >Available on <a className="underline">iOS</a> and <a  className="underline">Android</a></label>
                </span>
            </div>
            <div className="line"></div>
              <div className="table">
                <label className="overview_about ">Description</label>
                <span className="overview_about ">
                    <p >{ aboutCourse.description}</p>
                </span>
            </div>
            <div className="line"></div>
             <div className="table">
                <label className="overview_about ">Instructor</label>
                <div className="overview_about ">
                    <div className="table">
                        <span className="image_udemy">
                            <img src="https://img-c.udemycdn.com/user/200_H/137060_54c1_14.jpg" />
                        </span>
                        <span>
                            <h3 className="link">Udemy Instructor Team</h3>
                            <label>Official Udemy Instructor Account</label>
                        </span>
                    </div>
                    <div className="share-links overview_about"></div>
                    <p>The Udemy Instructor Team has one passion: Udemy's instructors! We'll work with you to help you create an online course—along the way, we'll also help you become an integral member of the Udemy community, a promotional whiz, a teaching star, and an all-around amazing instructor. We're excited to help you succeed on Udemy!</p>
                </div>
            </div>
        </div>
    )
}