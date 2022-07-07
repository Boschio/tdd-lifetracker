import * as React from "react"
import "./NutritionCard.css"

export default function NutritionCard({ nutrition }) {

    return (
        <div className="nutrition-card">
            <p>Name: {nutrition.name}</p>
            <p>Category: {nutrition.category}</p>
            <p>Calories: {nutrition.calories}</p>
            <p>Image URL: {nutrition.imageUrl}</p>
        </div>
    )
}