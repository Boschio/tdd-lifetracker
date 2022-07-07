import * as React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingPage from "components/LandingPage/LandingPage"
import Navbar from "components/Navbar/Navbar"
import LoginPage from "components/LoginPage/LoginPage"
import RegistrationPage from "components/RegistrationPage/RegistrationPage"
import ActivityPage from "components/ActivityPage/ActivityPage"
import NutritionPage from "components/NutritionPage/NutritionPage"
import AccessForbidden from "components/AccessForbidden/AccessForbidden"
import { AuthContextProvider, useAuthContext } from "../../../../contexts/auth"
import "./App.css"

export default function AppContainer() {
  return (
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  )
}

function App() {
  const { user, setUser } = useAuthContext()

  return (
    <div className="app">
      <React.Fragment>
        <BrowserRouter>

          <main>

            <Navbar />
            <Routes>
            
              <Route path = "/" element={<LandingPage />} />

                
              <Route path = "/login" element={<LoginPage />}/>
              <Route path = "/register" element={<RegistrationPage />}/>

               {/* Need to figure out when user is logged in to register Activity
              and Nutrition, otherwise render AccessForbidden */}
              <Route path = "/activity" element={user?.email? <ActivityPage />: <AccessForbidden />}/>
              <Route path = "/nutrition/*" element={user?.email? <NutritionPage />: <AccessForbidden />}/>
              {/* <Route path="*" element={<NotFound />}></Route> */}
              
            </Routes>
          </main>
        </BrowserRouter>
      </React.Fragment>
    </div>
  )
}
