import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./app/modules/home/Home";
import Main from "./app/Main";


const router = createBrowserRouter(
    [
        { path: "/", element: < Navigate to="/home" /> },
        {
            path: "/home", element: <Main />,
            children:
                [
                    { path: "", element: <Home /> }
                ]
        }
    ]
)

const AppRouter = (props: any) => {
    return (
        <RouterProvider router={router} />
    )
}

export default AppRouter;