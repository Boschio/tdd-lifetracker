import * as React from "react"
import heroImg from "../../../media/smartwatch-screen-digital-device.svg"
import "./LandingPage.css"

export default function LandingPage() {
    return (
        <div className="landing-page">
            <div className="hero">
                    <img className="hero-img" src={heroImg} alt="hero-img"/>
                <div className="cta">
                    <h1 className="header">LifeTracker</h1>
                    <p>Helping you take back control of your world</p>
                </div>
            </div>
        </div>
    )
}