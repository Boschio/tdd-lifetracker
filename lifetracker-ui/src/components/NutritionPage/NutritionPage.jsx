import AccessForbidden from "components/AccessForbidden/AccessForbidden"
import NutritionFeed from "components/NutritionFeed/NutritionFeed"
import * as React from "react"

export default function NutritionPage({user}) {

    return (
        <div className="nutrition-page">
            {user?.email? <NutritionFeed /> : <AccessForbidden />}
        </div>
    )
}