import {Home} from "./Components/Home";
import Register from "./Components/Register";
import Login from "./Components/Login";
import UserProfile from "./Components/UserProfile";
import {ErrorPage} from "./Components/ErrorPage";
import {FAQ} from "./Components/FAQ";
import {Contact} from "./Components/Contact";
import {Project} from "./Components/Project";
import {ProjectList} from "./Components/ProjectList";
import Activate from "./Components/Activate";
import Forget from "./Components/Forget";
import Reset from "./Components/Reset";


export const authRoutes = [
    {
        path: '*',
        Component: ErrorPage
    },
    {
        path: '/',
        Component: Home
    },
    {
        path: '/home',
        Component: Home
    },
    {
        path: '/profile',
        Component: UserProfile
    },
    {
        path: '/faq',
        Component: FAQ
    },
    {
        path: '/contact',
        Component: Contact
    },
    {
        path: '/projects',
        Component: ProjectList
    },
    {
        path: '/projects/:id',
        Component: Project
    }
]

export const publicRoutes = [
    {
        path: '*',
        Component: Login
    },
    {
        path: '/login',
        Component: Login
    },
    {
        path: '/register',
        Component: Register
    },
    {
        path: '/activate/:token',
        Component: Activate
    },
    {
        path: '/forget/:token',
        Component: Forget
    },
    {
        path: '/reset',
        Component: Reset
    }
]
