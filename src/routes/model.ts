import LoginPage from "../components/pages/Auth/Login/Login"
import RegistrationPage from "../components/pages/Auth/Registration/Registration"
import Overview from "../components/pages/Overview/Overview"

export const routes = [
    {
        id: 1,
        route: '/',
        Component: Overview,
    },
    {
        id: 2,
        route: '/registration',
        Component: RegistrationPage,
    },
    {
        id: 3,
        route: '/login',
        Component: LoginPage,
    }
]