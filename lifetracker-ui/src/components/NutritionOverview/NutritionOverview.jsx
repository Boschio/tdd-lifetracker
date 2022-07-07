import NutritionFeed from "components/NutritionFeed/NutritionFeed"
import * as React from "react"
import { Link } from "react-router-dom"
import  { useAuthContext } from "../../../../contexts/auth"

export default function NutritionOverview() {
    const { user } = useAuthContext()
    

    return (
        <div className="nutrition-overview">
            <h1>Nutrition</h1>
            <div className="overview-header">
                <h1>Overview</h1>
                <Link to="./create">Record Nutrition</Link>
            </div>
            
            <NutritionFeed />
        </div>
    )
}