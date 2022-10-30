import React, { useEffect } from 'react'
import { useState } from 'react'
import {Link, Outlet, useLocation} from 'react-router-dom'
import { VerticalScrollPagination } from '../../../components'

export function CourseContent() {
        const location = useLocation()
        const getActiveFromPath = location.pathname.split('/')[2]

        const [active, setActive] = useState(getActiveFromPath)
    
        useEffect(() => {
            setActive(getActiveFromPath)
        }, [location.pathname])


        const getClass = (where) => active === where ? 'active' : ''
        
        return (
            <div className="course-content">

                <div className="course-content_links ">
                    <VerticalScrollPagination>
                        <Link to="search" className={getClass('search') + " search"} >⌕</Link>
                        <Link to="content" className={getClass('content')}  >content</Link>
                        <Link to="overview" className={getClass('overview')} >overview</Link>
                        <Link to="questions" className={getClass('questions')}  >questions</Link>
                        <Link to="notes" className={getClass('notes')} >notes</Link>
                        <Link to="announcements" className={getClass('announcements')} >announcements</Link>
                        <Link to="reviews" className={getClass('reviews')}  >reviews</Link>
                        <Link to="learning-tools" className={getClass('learning-tools')} >learning-tools</Link>
                    </VerticalScrollPagination>
                    <div className='line'></div>
                </div>
                <Outlet />
            </div>
        )
}