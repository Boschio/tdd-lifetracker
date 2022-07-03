import * as React from "react"
import { Link } from "react-router-dom"
import apiClient from "../../services/apiClient"
import "./NavLinks.css"

export default function NavLinks({ user, setUser, setError }) {

    const handleLogout = async () => {
        await apiClient.logoutUser()
        setUser({})
        setError(null)
      }

    return (
        <div className="nav-links">
            <ul>
                <li><Link to="/activity">Activity</Link></li>
                <li><Link to="/exercise">Exercise</Link></li>
                <li><Link to="/nutrition">Nutrition</Link></li>
                <li><Link to="/sleep">Sleep</Link></li>
                
                {user?.email? <li><button className="logout-button" onClick={handleLogout}><Link to="/">Log Out</Link></button></li> :
                    <div className="login-links">
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Sign Up</Link></li>
                    </div>
                }
            </ul>
        </div>
    )
} 