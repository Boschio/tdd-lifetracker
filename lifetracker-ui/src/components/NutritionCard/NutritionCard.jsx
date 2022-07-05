import * as React from "react"
import "./NutritionCard.css"

export default function NutritionCard({ item }) {

    return (
        <div className="nutrition-card">
            <p>Name: {item.name}</p>
            <p>Category: {item.category}</p>
            <p>Calories: {item.calories}</p>
            <p>Image URL: {item.imageUrl}</p>
        </div>
    )
}