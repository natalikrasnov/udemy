import { useRouteError } from "react-router-dom";


export function ErrorPage({ }) {
      const error = useRouteError();

    return (
        <div className="error-page">
            <h1>404</h1>
            <h3>Page Not Found</h3>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}