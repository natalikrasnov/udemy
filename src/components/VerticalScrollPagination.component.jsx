import { useRef } from "react"
import { useEffect } from "react"
import { useState } from "react"
import { ArrowButton } from "./ArrowButton.component"

export function VerticalScrollPagination({children}) {
    // const [tabCurrentData, setTabCurrentData] = useState(childrenComponents && childrenComponents.length > 1 ? childrenComponents[0] : null)
    // const [currentData, setCurrentData] = useState()

    const [isCanScrollRight,setIsCanScrollRight] = useState(true)
    const [isCanScrollLeft, setIsCanScrollLeft] = useState(true)
    
    const scrollRef = useRef()

    useEffect(()=> setScrollingButtons(), [scrollRef])

    const setScrollingButtons = () => {
        //debugger
        setIsCanScrollLeft(true)
        setIsCanScrollRight(true)
        if (scrollRef.current.scrollLeft == 0) setIsCanScrollLeft(false)
        else if (scrollRef.current.scrollLeft < scrollRef.current.offsetWidth)
            setIsCanScrollRight(false)  
    }

    const scrollToRight = () => {
        const scrollTo =  scrollRef.current.offsetWidth+scrollRef.current.offsetWidth
        scrollRef.current.scrollTo({
            left: scrollTo,
            behavior: 'smooth',
        });
        setScrollingButtons()
    }

    const scrollToLeft = () => {
       const scrollTo =  scrollRef.current.offsetWidth-scrollRef.current.offsetWidth
        scrollRef.current.scrollTo({
            left: scrollTo,
            behavior: 'smooth',
        });
       setScrollingButtons()
    }
    
    return (
        <div className="vertical-scroll-pages">
            {isCanScrollLeft && <ArrowButton isLeft onClick={scrollToLeft}/>}
            <div className="scroll_content" ref={scrollRef}>
                {children}
            </div>
            {isCanScrollRight && <ArrowButton isRight onClick={scrollToRight}/>}
        </div>
    )
}
