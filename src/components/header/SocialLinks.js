import React from "react"
import {
    FaRss,
} from "react-icons/fa"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesome
import { faXTwitter } from "@fortawesome/free-brands-svg-icons"; // Import FontAwesome Twitter icon
import { faBluesky } from "@fortawesome/free-brands-svg-icons"; // Import Bluesky icon
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGoogleScholar } from "@fortawesome/free-brands-svg-icons";

const SocialLinks = ({ contacts }) => {
    return (
        <div className="social-links float-right mr-4">
            <a className="text-info" href={contacts.twitter}>
                <span title="Twitter">
                    <FontAwesomeIcon icon={faXTwitter} size="lg" style={{ color: "#dedede" }} />
                </span>
            </a>
            <a className="text-success ml-4"
                href={contacts.googlescholar}>
                <span title="googleScholar">
                    <FontAwesomeIcon icon={faGoogleScholar} size="lg" style={{ color: "#dedede" }} />
                </span>
            </a>
            <a className="text-primary ml-4"
                href={contacts.linkedin}>
                <span title="Linked In">
                <FontAwesomeIcon icon={faLinkedinIn} size="lg" style={{ color: "#dedede" }} />
                </span>
            </a>
            <a className="text-primary ml-4"
                href={contacts.rss}>
                <span title="RSS">
                    <FaRss size={24} style={{ color: "#dedede" }} />
                </span>
            </a>
            <a className="text-primary ml-4"
                href={contacts.bluesky}>
                <span title="BlueSky">
                    <FontAwesomeIcon icon={faBluesky} size="lg" style={{ color: "#dedede" }} />
                </span>
            </a>
        </div>
    )
}

export default SocialLinks
