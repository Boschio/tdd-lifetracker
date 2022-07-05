import NutritionFeed from "components/NutritionFeed/NutritionFeed"
import * as React from "react"
import { Link } from "react-router-dom"

export default function NutritionOverview({ user, nutrition }) {

    return (
        <div className="nutrition-overview">
            <h1>Nutrition</h1>
            <div className="overview-header">
                <h1>Overview</h1>
                <Link to="./create">Record Nutrition</Link>
            </div>
            
            <NutritionFeed user={user} nutrition={nutrition} />
        </div>
    )
}