import AccessForbidden from "components/AccessForbidden/AccessForbidden"
import ActivityFeed from "components/ActivityFeed/ActivityFeed"
import * as React from "react"

export default function ActivityPage({user}) {

    return (
        <div className="activity-page">
            {user?.email? <ActivityFeed /> : <AccessForbidden />}
        </div>
    )
}