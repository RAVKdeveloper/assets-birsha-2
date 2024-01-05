import LoginPage from "../components/pages/Auth/Login/Login"
import RegistrationPage from "../components/pages/Auth/Registration/Registration"
import FundingPage from "../components/pages/Funding/Funding"
import Overview from "../components/pages/Overview/Overview"
import SpotPage from "../components/pages/Spot/Spot"

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
    },
    {
        id: 4,
        route: '/funding',
        Component: FundingPage
    },
    {
        id: 5,
        route: '/spot',
        Component: SpotPage
    }
]