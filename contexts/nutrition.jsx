import { createContext, useState, useContext, useEffect } from "react"
import apiClient from "../lifetracker-ui/src/services/apiClient"

const NutritionContext = createContext(null)

export const NutritionContextProvider = ({ children }) => {
    const [nutritions, setNutritions] = useState([])
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [initialized, setInitialized] = useState(false)


    const nutritionValue = { nutritions, setNutritions, error, setError, isLoading, setIsLoading, initialized, setInitialized }

    useEffect(() => {
        const fetchNutrition = async () => {
          setIsLoading(true)
    
          const { data, error } = await apiClient.listNutrition()
          if(data) setNutritions(data.nutrition)
          if (error) setError(error)
    
          setIsLoading(false)
          setInitialized(true)
        }
        fetchNutrition()
      },[])

        // const addNutrition = (newNut) => {
        //   setNutrition((oldNut) => [newNut, ...oldNut])
        // }

        // const updateNutrition = ({ nutId, nutUpdate}) => {
        //   setNutrition((oldNut) => {
        //     return oldNut.map((nut) =>{
        //       if(nut.id === Number(nutId)) {
        //         return {...nut, ...nutUpdate}
        //       }  
        //       return nut
        //     })
        //   })
        // }

    return (
        <NutritionContext.Provider value={nutritionValue}>
            <>{children}</>
        </NutritionContext.Provider>
    )
}

export const useNutritionContext = () => useContext(NutritionContext)