import React from "react"
import {
    FaTwitterSquare,
    FaGraduationCap,
    FaLinkedin
} from "react-icons/fa"


const SocialLinks = ({ contacts }) => {
    return (
        <div className="social-links float-right mr-4">
            <a className="text-info ml-4"
                href={contacts.twitter}>
                <span title="Twitter">
                    <FaTwitterSquare size={25} style={{ color: "#dedede" }} />
                </span>
            </a>
            <a className="text-success ml-4"
                href={contacts.googlescholar}>
                <span title="googleScholar">
                    <FaGraduationCap size={25} style={{ color: "#dedede" }} />
                </span>
            </a>
            <a className="text-primary ml-4"
                href={contacts.linkedin}>
                <span title="Linked In">
                    <FaLinkedin size={25} style={{ color: "#dedede" }} />
                </span>
            </a>
        </div>
    )
}

export default SocialLinks
