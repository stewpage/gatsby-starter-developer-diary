import React from "react";
import {
    FaTwitterSquare,
    FaGraduationCap,
    FaLinkedin

} from "react-icons/fa"

import "../layout.css"

const MobileSocialLinks = ({ contacts }) => {
    return (
        <div className="bottom-bar py-1">
        <a className="text-info"
            href={contacts.twitter}>
            <span title="Twitter">
                <FaTwitterSquare size={26} style={{ color: "#dedede" }} />
            </span>
        </a>
            <a className=" text-primary"
                href={contacts.linkedin}>
                <span title="Linked In">
                    <FaLinkedin size={26} style={{ color: "#dedede" }} />
                </span>
            </a>
            <a className="text-success"
                href={contacts.googlescholar}>
                <span title="googleScholar">
                    <FaGraduationCap size={26} style={{ color: "#dedede" }} />
                </span>
            </a>
        </div>
    )
}

export default MobileSocialLinks;
