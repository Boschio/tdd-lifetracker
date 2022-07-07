import { createContext, useState, useContext, useEffect } from "react"
import apiClient from "../lifetracker-ui/src/services/apiClient"

const ActivityContext = createContext(null)

export const ActivityContextProvider = ({ children }) => {
    const [activity,setActivity] = useState([])
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [initialized, setInitialized] = useState(false)

    const activityValue = { error, setError, isProcessing, setIsProcessing }

    return (
        <ActivityContext.Provider value={activityValue}>
            <>{children}</>
        </ActivityContext.Provider>
    )
}

export const useActivityContext = () => useContext(ActivityContext)