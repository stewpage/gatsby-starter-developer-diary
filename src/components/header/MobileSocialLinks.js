import React from "react";
import {
    FaRss
} from "react-icons/fa"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesome
import { faXTwitter } from "@fortawesome/free-brands-svg-icons"; // Import FontAwesome Twitter icon
import { faBluesky } from "@fortawesome/free-brands-svg-icons"; // Import Bluesky icon
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGoogleScholar } from "@fortawesome/free-brands-svg-icons";
import "../layout.css"

const MobileSocialLinks = ({ contacts }) => {
    return (
        <div className="bottom-bar py-1">
            {/* FontAwesome 6 Twitter Icon */}
            <a className="text-info" href={contacts.twitter}>
                <span title="Twitter">
                    <FontAwesomeIcon icon={faXTwitter} size="lg" style={{ color: "#dedede" }} />
                </span>
            </a>
            
            {/* LinkedIn Icon */}
            <a className="text-info" href={contacts.linkedin}>
                <span title="LinkedIn">
                    <FontAwesomeIcon icon={faLinkedinIn} size="lg" style={{ color: "#dedede" }} />
                </span>
            </a>
            
            {/* Google Scholar Icon */}
            <a className="text-info" href={contacts.googlescholar}>
                <span title="Google Scholar">
                    <FontAwesomeIcon icon={faGoogleScholar} size="lg" style={{ color: "#dedede" }} />
                </span>
            </a>
            
            {/* RSS Icon */}
            <a className="text-info" href={contacts.rss}>
                <span title="RSS">
                    <FaRss size={26} style={{ color: "#dedede" }} />
                </span>
            </a>

            {/* Bluesky Icon */}
            <a className="text-info" href={contacts.bluesky}>
                <span title="Bluesky">
                    <FontAwesomeIcon icon={faBluesky} size="lg" style={{ color: "#dedede" }} />
                </span>
            </a>
        </div>
    );
};

export default MobileSocialLinks;
