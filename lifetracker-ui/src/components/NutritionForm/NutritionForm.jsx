import * as React from "react"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import apiClient from "../../services/apiClient"
import "./NutritionForm.css"

export default function NutritionForm() {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState({})
    const [form, setForm] = useState({
      name: "", 
      category: "",
      calories: "",
      imageUrl: ""
    })

      const handleOnInputChange = (event) => {
        setForm((form) => ({ ...form, [event.target.name]: event.target.value }))
      }

      const handleOnSubmit = async () => {
        setIsLoading(true)
        setErrors((error) => ({ ...error, form: null }))
    
        const {data, error} = await apiClient.createNutrition({ name: form.name, category: form.category, 
                                                                calories: form.calories, imageUrl: form.imageUrl})
        if(error) setErrors((e) => ({ ...e, form: error}))

        setIsLoading(false)
        navigate("/nutrition")
      }
    return (
        <div className="nutrition-form">
            <h1>Record Nutrition</h1>
            <div className="nutrition-container">

                <input className="form-input" name="name" type="text" placeholder="Nutrition name" value={form.name} onChange={handleOnInputChange} />
                {errors.name && <span className="error">{errors.name}</span>}

                <input className="form-input" name="category" type="text" placeholder="Nutrition category" value={form.category} onChange={handleOnInputChange} />
                {errors.category && <span className="error">{errors.category}</span>}

                <input className="form-input" name="calories" type="number" placeholder="Calories" value={form.calories} onChange={handleOnInputChange} />
                
                <input className="form-input" name="imageUrl" type="url" placeholder="http://www.etc.com/1" value={form.imageUrl} onChange={handleOnInputChange} />

                <button className="submit-nutrition" onClick={handleOnSubmit}>{isLoading ? "Loading..." : "Save"}</button>

            </div>
        </div>
    )
}