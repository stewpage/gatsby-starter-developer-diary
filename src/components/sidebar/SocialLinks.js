import React from "react"
import {
    FaTwitterSquare,
    FaLinkedin,
    FaRss
} from "react-icons/fa"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesome
import { faBluesky} from "@fortawesome/free-brands-svg-icons"; // Import Bluesky Icon
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import "./sidebar.css"


const SocialLinks = ({ contacts }) => {
    return (
        <div className="side-social-links float-left mt-3 mb-3">
            <a className="text-secondary p-2" href={contacts.twitter}>
                <span title="X">
                    <FontAwesomeIcon icon={faXTwitter} size="lg" style={{ color: "secondary" }} />
                </span>
            </a>
            <a className="text-secondary p-2" href={contacts.bluesky}>
                <span title="Bluesky">
                    <FontAwesomeIcon icon={faBluesky} size="lg" style={{ color: "secondary" }} />
                </span>
            </a>
            <a className="text-secondary p-2" href={contacts.linkedin}>
                <span title="LinkedIn">
                    <FontAwesomeIcon icon={faLinkedinIn} size="lg" style={{ color: "secondary" }} />
                </span>
            </a>
        </div>
    )
}

export default SocialLinks
