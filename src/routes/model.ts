import { lazy } from "react"
const LoginPage = lazy(() => import('../components/pages/Auth/Login/Login'))
const RegistrationPage = lazy(() => import('../components/pages/Auth/Registration/Registration'))
const FundingPage = lazy(() => import('../components/pages/Funding/Funding'))
const SpotPage = lazy(() => import('../components/pages/Spot/Spot'))

export const routes = [
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