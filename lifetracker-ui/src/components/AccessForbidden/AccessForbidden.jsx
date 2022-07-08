import LoginForm from "components/LoginForm/LoginForm"
import * as React from "react"

export default function AccessForbidden() {

    return (
        <div className="access-forbidden">
            <h3><b>Access Forbidden:</b> You must be logged in to access this page.</h3>
            <LoginForm />
        </div>
    )
}