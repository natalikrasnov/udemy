import { CustomDropDown, Header as MainHeader, ProgressBar } from "../../components"
import trophyIcon from '../../assets/trophy.png'

export function Header({ title }) {
    return (
        <MainHeader color="dark">
            <div className="course-header">
                <label className="separator" >|</label>
                <label className="title">{title} </label>
                <div className="right">
                    <a className="ratting">	<label className="star">&#9733;</label> Leave a Rating</a>
                    <ProgressBar>
                        <img src={ trophyIcon } />
                    </ProgressBar>
                    <CustomDropDown title="&#8942;" className="menu-button" isOpenDropDownOnHover>
                        <div className="course-header-menu">
                            <ul>
                                <li>&#9733; favorite this course</li>
                            </ul>
                            <div className="line"></div>
                            <ul>
                                <li>favorite</li>
                            
                            </ul>
                        </div>
                    </CustomDropDown>
                </div>
            </div>
        </MainHeader>
    )
}