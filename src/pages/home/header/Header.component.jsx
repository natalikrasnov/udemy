import { Header as MainHeader, Input ,CustomDropDown} from "../../../components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SubMenu } from "./SubMenu.component";

export function Header({ }) {
    return (
        <div className="header_main">
            <MainHeader color="light">
                <CustomDropDown title="categories" className=" header_item " isOpenDropDownOnHover>
                    <SubMenu isMenu/>
                </CustomDropDown>
                <Input placeholder="search for anything" />
                <CustomDropDown title="udemy bussness" className="header_item " isOpenDropDownOnHover>
                    <div className="pop-up udemy-bussness">
                        <label>Get your team access to over 17,000 top Udemy courses, anytime, anywhere.</label>
                        <button>Try udemy bussness</button>
                    </div>
                </CustomDropDown>
                <CustomDropDown title="instructor" className="header_item" />
                <CustomDropDown title="my learning" className="header_item" >

                </CustomDropDown>
                <CustomDropDown title="&#9825;" className=" header_item header_icon liked_label"isOpenDropDownOnHover>
                    <div className="pop-up likes">
                        <label className="popup_title">Your wishlist is empty.</label>
                        <label> Explore courses </label>
                    </div>
                </CustomDropDown>
                <CustomDropDown title="&#128722;" className="header_item header_icon" isOpenDropDownOnHover>
                    <div className="pop-up cart">
                        <label className="popup_title">Your cart is empty.</label>
                        <label> Explore courses </label>
                    </div>
                </CustomDropDown>
                <FontAwesomeIcon icon="fa-regular fa-bell" className="header_item header_icon" />
                <CustomDropDown title="N" className="header_item user_name"isOpenDropDownOnHover>
                    <div className="pop-up user">
                        <div className="about_user ">
                            <label className="user_name">N</label>
                            <div className="about_user_info">
                                <label>natali krasnov</label>
                                <label>natali@gmail.com</label>
                            </div>
                        </div>
                        <div className="separator"></div>
                        <div className="separator"></div>
                            <label className="header_item">my learning</label>
                            <label className="header_item">my cart</label>
                            <label className="header_item">wishlist</label>
                            <label className="header_item">instructor dashboard</label>
                        
                        <div className="separator"></div>
                            <label className="header_item">notifications</label>
                            <label className="header_item">messaging</label>
                            <label className="header_item">my learning</label>
                            <label className="header_item">my learning</label>
                          
                    </div>
                </CustomDropDown>
            </MainHeader>
            <SubMenu />
        </div>
    )
}