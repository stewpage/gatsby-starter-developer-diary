import React from "react"

import "./tags.css"
import { Link } from "gatsby";

const TechTag = (props) => {
    const { tag, tech, color } = props

    return (
        <div className="d-inline-block p-1">
            <Link to={`/tags/${tag}/`}>
                <button
                    className="tech-tag"  style={{background: `${color}`}}>
                    <p className="d-inline">{tech} </p>
                </button>
            </Link>

        </div>

    )
}

export default TechTag
