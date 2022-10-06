import { createRoutesFromElements, createBrowserRouter, Route } from "react-router-dom";
import { MainDisplay } from "../pages/course/Main.component";
import { Main } from "../pages/home/Main.component";
import { ErrorPage } from "../pages/ErrorPage.component";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
    >
      <Route errorElement={<ErrorPage />}>
        <Route
                  path="/"
                  index
          element={<Main />}
        />
        <Route
          path="course"
                  element={<MainDisplay />}
                  errorElement={<ErrorPage />}
        />
      </Route>
    </Route>
  )
);