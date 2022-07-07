import * as React from "react"
import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import apiClient from "../../services/apiClient"
import  { useAuthContext } from "../../../../contexts/auth"
import "./LoginForm.css"

export default function LoginForm() {
    const { user, setUser } = useAuthContext()
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState({})
    const [form, setForm] = useState({
      email: "",
      password: "",
    })
  
    useEffect(() => {
      // redirect if user is logged in
      if (user?.email) {
        navigate("/activity")
      }
    }, [user, navigate])

    const handleOnInputChange = (event) => {
      if (event.target.name === "email") {
        if (event.target.value.indexOf("@") === -1) {
          setErrors((error) => ({ ...error, email: "Please enter a valid email." }))
        } else {
          setErrors((error) => ({ ...error, email: null }))
        }
      }
  
      setForm((form) => ({ ...form, [event.target.name]: event.target.value }))
    }
  
    const handleOnSubmit = async (event) => {
      event.preventDefault()
      setIsLoading(true)
      setErrors((error) => ({ ...error, form: null }))

      const {data, error} = await apiClient.loginUser({ email: form.email, password: form.password})
      if(error) setErrors((e) => ({ ...e, form: error}))
      if(data?.user) {
        setUser(data.user)
        apiClient.setToken(data.token)
      }
      setIsLoading(false)
      
    }

    return (

        <div className="login-form">
            
            <div className="login-container">
            <h1>Login</h1>
                <div className="input-field">
                    <i className="fa fa-envelope"></i>
                    <input className="form-input" type="email" name="email" placeholder="user@gmail.com" value={form.email} onChange={handleOnInputChange} />
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>
                <div className="input-field">
                    <i className="fa fa-lock"></i>
                    <input className="form-input" type="password" name="password" placeholder="password" value={form.password} onChange={handleOnInputChange} />
                    {errors.password && <span className="error">{errors.password}</span>}
                </div>
                <div className="input-field">
                    <button className="submit-login" disabled={isLoading} onClick={handleOnSubmit} >{isLoading ? "Loading..." : "Login"}</button>
                </div>
                </div>
                <div className="register-redirect">
                <p>Don't have an account? Sign up <Link className="redirect" to="/register"><span>here.</span></Link></p>
            </div>
         </div>
    )
}