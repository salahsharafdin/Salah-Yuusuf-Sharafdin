import { createBrowserRouter } from "react-router";
import App from "./App";

import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import MyskillesPage from "./pages/MyskillesPage";
import Projucts from "./pages/Projucts";
import ContactPage from "./components/ContactPage";



const routes = createBrowserRouter([
    {
        path : "/",
        element: <App />,
        children:[

               {
            index: true,
            element: < HomePage/>
        },

            {
                path: "/AboutPage",
                element: <AboutPage />
            },
            {
                path: "/HomePage",
                element: <HomePage />
            },
            {
                path: '/MySkillesPage',
                element: <MyskillesPage />
            },
            {
                path:"/Projucts",
                element: <Projucts/>
            },
            {
                path: "Contact",
                element: <ContactPage/>

            }
        ]
    }
])

export default routes 