import NutritionOverview from "components/NutritionOverview/NutritionOverview"
import NutritionDetail from "components/NutritionDetail/NutritionDetail"
import NutritionNew from "components/NutritionNew/NutritionNew"
import * as React from "react"
import { Routes, Route } from "react-router-dom"
import  { useAuthContext } from "../../contexts/auth"
import { NutritionContextProvider, useNutritionContext } from "../../contexts/nutrition"

export default function NutritionContainer() {
    return (
      <NutritionContextProvider>
        <NutritionPage />
      </NutritionContextProvider>
    )
  }

function NutritionPage() {
    const { user } = useAuthContext()
    const { nutritions, setNutritions } = useNutritionContext()

    return (
        <div className="nutrition-page">
                <Routes>
                    <Route path="/" element={<NutritionOverview />} />
                    <Route path="/create" element={<NutritionNew />} />
                    <Route path="/id/:nutritionId" element={<NutritionDetail />} />
                </Routes>
        </div>
    )
}