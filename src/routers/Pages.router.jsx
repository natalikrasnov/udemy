import { createRoutesFromElements, createBrowserRouter, Route } from "react-router-dom";
import { Main } from "../pages/home/Main.component";
import { ErrorPage } from "../pages/ErrorPage.component";
import { CourseContentRouter } from "./CourseSesion.router";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route errorElement={<ErrorPage />}>
        <Route path="/" index  element={<Main />} />
        <Route path="course/*" element={<CourseContentRouter />} /> 
        <Route path="*" index  element={<ErrorPage />} />
      </Route>
    </Route>
  )
);