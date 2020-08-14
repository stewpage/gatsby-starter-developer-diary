import React from "react"

import "./header.css"
import poojarao from "../../images/Pooja.jpg"

const MobileBio = (props) => {

    return (
        <div className="mobile-bio-main">
            <img src={poojarao}  className="ml-4 mt-2" style={{ maxWidth: `75px`, maxHeight: `75px`, borderRadius: `50%`,boxShadow: `1px 1px 3px`}} alt="author-pic" />
            <div className="mr-4 mt-3 bio">
              <h4>POOJA RAO</h4>
              <p>Writings from the Neural Interface</p>
            </div>
        </div>
    )
}

export default MobileBio
