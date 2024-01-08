import { FC, Suspense } from "react"
import { Routes, Route } from "react-router-dom"
import { routes } from "./model"
import Overview from "../components/pages/Overview/Overview"

const RoutesApp: FC = () => {

  return (
    <Suspense fallback={<div>Loading...</div>}>
     <Routes>
               <Route path={'/'} element={<Overview />}/>
          {
            routes.map(({ id, route, Component }) => (
               <Route key={id} path={route} element={<Component />}/>
            ))
          }
     </Routes>
    </Suspense>
  )
}

export default RoutesApp;