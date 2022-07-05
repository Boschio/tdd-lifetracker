import NutritionCard from "components/NutritionCard/NutritionCard"
import * as React from "react"
import { useState, useEffect } from "react"
import apiClient from "../../services/apiClient"

export default function NutritionFeed({ user, nutrition }) {
    // const [nutrition, setNutrition] = useState({})

    // useEffect(() => {
    //     const fetchNutrition = async () => {
    //         // setIsFetching(true)

    //         const { data, error } = await apiClient.listNutrition()
    //         if(data) setNutrition(data.nutrition)
    //         if (error) setError(error)

    //         // setIsFetching(false)
    //     }
    // fetchNutrition()
    // },[])

    return (
        <div className="nutrition-feed">
            {nutrition?.filter(filteredItem => filteredItem.userId === user.id).map(item =>(
                <NutritionCard item={item} />
            ))}
            {/* <NutritionCard /> */}
        </div>
    )
}