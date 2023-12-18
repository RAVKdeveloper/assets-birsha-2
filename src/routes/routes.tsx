import { FC } from "react"
import { Routes, Route } from "react-router-dom"
import { routes } from "./model"

const RoutesApp: FC = () => {

  return (
     <Routes>
          {
            routes.map(({ id, route, Component }) => (
               <Route key={id} path={route} element={<Component />}/>
            ))
          }
     </Routes>
  )
}

export default RoutesApp;