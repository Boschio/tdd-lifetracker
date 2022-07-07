import * as React from "react"
import "./NutritionCard.css"

export default function NutritionCard({ nutrition }) {
    
    return (
        <div className="nutrition-card">
            <div className="card-header">
                <img src={nutrition.imageUrl}/>
                <h2 className="title">{nutrition.name}</h2>
            </div>
            <div className="card-stats">
                <div className="CardStat">
                    <p>Calories</p>
                    <span>{nutrition.calories}</span>
                </div>
                <div className="CardStat">
                    <p>Quantity</p> 
                    <span>1</span>
                </div>
            </div>
            <div className="card-meta">
                <small>{nutrition.createdAt}</small>
                <small className="category">{nutrition.category}</small>
            </div>
        </div>
    )
}