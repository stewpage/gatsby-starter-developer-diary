import React from "react"

import "./tags.css"
import { Link } from "gatsby";

const TechTagPost = (props) => {
    const { tag, color } = props

    return (
        <div className="d-inline-block p-1">
            <Link to={`/tags/${tag}/`}>
                <button
                    className="tech-tag-post"  style={{background: `${color}`}}>
                </button>
            </Link>

        </div>

    )
}

export default TechTagPost
