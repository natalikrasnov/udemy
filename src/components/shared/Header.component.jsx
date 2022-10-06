import { useNavigate } from "react-router-dom"

export function Header({ children, color = "light" }) {
    const navigate = useNavigate()

    const navigateToMainPage = () => {
        navigate('/')
    }

    return (
        <div className={"header "+ color}>
            <div className="icon" onClick={navigateToMainPage}></div>
            {children}
        </div>
    )
}