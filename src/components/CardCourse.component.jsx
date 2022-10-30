import { useNavigate } from "react-router-dom";

export function CardCourse({ id }) {
    const navigate = useNavigate()

    const goToCoursePage = () => {
        navigate('/course/overview', {state: {id}})
    }

    return (
        <div className="card-course" onClick={goToCoursePage}>

        </div>
    )
}