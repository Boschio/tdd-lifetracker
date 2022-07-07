import ActivityFeed from "components/ActivityFeed/ActivityFeed"
import * as React from "react"
import  { useAuthContext } from "../../../../contexts/auth"

export default function ActivityPage() {
    const { user } = useAuthContext()

    return (
        <div className="activity-page">
            <ActivityFeed />
        </div>
    )
}