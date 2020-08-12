import React from "react"
import "./sidebar.css"

import poojarao from "../../images/Pooja.jpg"

const Bio = ({ author, tagline }) => {

    return (
        <div className="bio-main w-75">
            <img src={poojarao} style={{ maxWidth: `100px` }} className="profile-img" alt="" />
            <h3 className="mt-2 author-bio">{author}</h3>
            <small>{tagline}</small>
        </div>
    )
}

export default Bio
