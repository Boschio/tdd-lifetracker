import * as React from "react"
import { Link } from "react-router-dom"
import NavLinks from "components/NavLinks/NavLinks"
import "./NavBar.css"

export default function Navbar({ user, setUser, setError }) {
    return (
        <nav className="navbar">
                <div className="logo">
                    <Link to="/"><img src="./media/giant_codepath_Logo.svg" alt="logo"/></Link>
                </div>
                <div className="links">
                    <NavLinks user={user} setUser={setUser} setError={setError} />
                </div>
        </nav>
    )
} 
