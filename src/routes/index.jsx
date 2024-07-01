import NavigationBar from "../navibar";
import { createBrowserRouter } from "react-router-dom";
import Authentication from "../pages/Authentication";
import Homepage from "../pages/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element : <NavigationBar />,
        children: [
            {
                index: true,
                element: <Authentication/>
                
            },
            {
                path: '/signin',
                element: <Homepage />
            }


        ]
    }
])

export default router;