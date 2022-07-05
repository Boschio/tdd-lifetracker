import ActivityFeed from "components/ActivityFeed/ActivityFeed"
import * as React from "react"

export default function ActivityPage({user}) {

    return (
        <div className="activity-page">
            <ActivityFeed />
        </div>
    )
}