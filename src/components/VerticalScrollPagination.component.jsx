import { useRef } from "react"
import { useEffect } from "react"
import { useState } from "react"
import { ArrowButton } from "./ArrowButton.component"

export function VerticalScrollPagination({children}) {

    const [isCanScrollRight,setIsCanScrollRight] = useState(false)
    const [isCanScrollLeft, setIsCanScrollLeft] = useState(false)
    const [elementWith, setElementWith] = useState(null)
    const [remainderScrollLeft, setRemainderScrollLeft] = useState(null)
    const [sumScrolling, setSumScrolling] = useState(null)

    const scrollRef = useRef()

    const setResize = () => {
        if (!scrollRef.current) return
        setTimeout(() => {
            setElementWith(scrollRef.current.offsetWidth) 
            setRemainderScrollLeft (scrollRef.current.scrollLeft)
            setSumScrolling( scrollRef.current.scrollWidth)
        },500)
        
    }

    useEffect(() => {
        window.addEventListener("resize", setResize);
        return (()=> window.removeEventListener("resize", setResize))
    }, [])

    
    useEffect(() => {
        // console.log("elementWidth=", elementWith)
        // console.log("remainderScrollLeft=",remainderScrollLeft)
        // console.log("sumScrolling=", sumScrolling)
        setScrollingButtons()
    }, [elementWith, remainderScrollLeft])

    const setScrollingButtons = () => {
        // if(elementWith === sumScrolling && elementWith!=null) return
        if (sumScrolling == null || elementWith == null) {
            setResize()
            return
        } 
        setIsCanScrollLeft(true)
        setIsCanScrollRight(true)
        if (remainderScrollLeft === 0)
            setIsCanScrollLeft(false)
        if ( (remainderScrollLeft + elementWith) === sumScrolling)
            setIsCanScrollRight(false)  
        
    }

    const scroll = (scrollTo) => {
        scrollRef.current.scrollTo({
            left: scrollTo,
            behavior: 'smooth'
        });
      setResize()
    }

    const scrollToRight = () => {
        const scrollTo = remainderScrollLeft + elementWith
        scroll(scrollTo)
    }

    const scrollToLeft = () => {
       const scrollTo =  remainderScrollLeft < elementWith ? 0 : remainderScrollLeft - elementWith
       scroll(scrollTo)
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
