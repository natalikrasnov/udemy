import { useState } from "react";
import { subMenu } from '../../../testData/header';

export function SubMenu({isMenu}) {

    const [subHeaderMenu, setSubHeaderMenu] = useState(null)

    return (
        <div className="sub_menu" onMouseLeave={() => setSubHeaderMenu(null)}>
                <div className="sub_header">
                    {
                        Object.keys(subMenu).map((el, i) =>
                            <div
                                className="header_item"
                                key={i}
                                onMouseEnter={() => setSubHeaderMenu(subMenu[el])}
                            >
                                <label>{el}</label>
                                {isMenu && <label> &gt; </label>}
                                {subMenu[el] == subHeaderMenu &&
                                    <div className="header_item_hover"></div>
                                }
                            </div>
                        )
                    }
                </div>
            {subHeaderMenu &&
                <div className="sub_header_menu dark ">
                    {subHeaderMenu.map((el, i) =>
                        <label
                            key={i}
                            className="header_item"
                            onMouseEnter={() => setSubHeaderMenu(subHeaderMenu)}
                        >
                            {el}
                        </label>
                    )}
                
                </div>}
            </div>
    )
}