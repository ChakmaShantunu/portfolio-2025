import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import About from "../pages/about/About";
import Contact from "../components/Contact/Contact";
import Projects from "../components/Projects/Projects";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/about',
                Component: About
            },
            {
                path: '/projects',
                Component: Projects
            },
            {
                path: '/contact',
                Component: Contact
            }
        ]
    }
])