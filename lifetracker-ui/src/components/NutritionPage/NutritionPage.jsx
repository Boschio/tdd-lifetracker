import NutritionOverview from "components/NutritionOverview/NutritionOverview"
import NutritionDetail from "components/NutritionDetail/NutritionDetail"
import NutritionNew from "components/NutritionNew/NutritionNew"
import * as React from "react"
import { Routes, Route } from "react-router-dom"

export default function NutritionPage({ user, nutrition }) {

    return (
        <div className="nutrition-page">
                <Routes>
                    <Route path="/" element={<NutritionOverview user={user} nutrition={nutrition} />} />
                    <Route path="/create" element={<NutritionNew />} />
                    <Route path="/id/:nutritionId" element={<NutritionDetail />} />
                </Routes>
        </div>
    )
}