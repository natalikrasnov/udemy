import { useEffect } from "react"
import { useRef } from "react"
import { useState } from "react"

export function CustomDropDown({ isOpenDropDownOnHover,isOpenDropDownOnClick, title ,className='', children}) {
    const [isHover, setIsHover] = useState(false)
    const [isRightElement, setIsRightElement] = useState(false)
    const titleRef = useRef()
    
    useEffect(() => {
        if (titleRef.current) {
            const clientWidth = document.documentElement.clientWidth
            const currentElPosition = titleRef.current.offsetParent.offsetLeft
            setIsRightElement(clientWidth/2 < currentElPosition)
        }
    }, [titleRef]) 
    
    return (
        <div
            className={"drop-down " + (className)}
            onMouseLeave={() => isOpenDropDownOnHover && setIsHover(false)}
            onClick={() => setIsHover(!isHover )}
            
        >
            <label
                className={className}
                onMouseEnter={() => isOpenDropDownOnHover && setIsHover(true )}
                ref={titleRef}
            >
                {title}
            </label>
            {
                ((isOpenDropDownOnHover || isOpenDropDownOnClick) &&  isHover) &&
                <div className={"open-popup "+(isRightElement? "open-popup_right": "open-popup_left")}>
                    {children}
                </div>
            }
        </div>
    )
}