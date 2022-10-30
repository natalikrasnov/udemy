import { Route, createRoutesFromElements, createBrowserRouter, Routes } from "react-router-dom";
import { MainDisplay } from "../pages/course/Main.component";
import { Announcements } from "../pages/course/courseContent/Announcements.component";
import { Content } from "../pages/course/courseContent/Content.component";
import { LearningTolls } from "../pages/course/courseContent/LearningTools.component";
import { Notes } from "../pages/course/courseContent/notes/Notes.component";
import { Overview } from "../pages/course/courseContent/Overview.component";
import { Questions } from "../pages/course/courseContent/Questions.component";
import { Reviews } from "../pages/course/courseContent/Reviews.component";
import { Search } from "../pages/course/courseContent/Search.component";
import { ErrorPage } from "../pages/ErrorPage.component";
import CourseNotesContextProvider from "../hookes/contexts/CourseNotes.context";

export function CourseContentRouter(){
    return (
        <Routes>
            <Route element={<MainDisplay />} errorElement={ <ErrorPage/>}>
                <Route path="overview" index element={<Overview />} />
                <Route path="search"  element={<Search />} />
                <Route path="content"  element={<Content />} />
                <Route path="questions" element={<Questions />} />
                <Route path="notes" element={
                    <CourseNotesContextProvider>
                        <Notes />
                    </CourseNotesContextProvider>}
                />
                <Route path="announcements"  element={<Announcements />} />
                <Route path="reviews" element={<Reviews />} />
                <Route path="learning-tools" element={<LearningTolls />} />
                <Route path="*" element={<ErrorPage />} />
            </Route>
        </Routes>
    )
}
