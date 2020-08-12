import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./index.css"

import Sidebar from "../components/sidebar/Sidebar"

const AboutPage = (props) => {
    const labels = props.data.site.siteMetadata.labels
    const aboutTags = ["BCI", "neuroscience", "Pooja Rao", "brain computer interface"]
    const tags = {}
    labels.forEach(label => {
        aboutTags.forEach(tag => {
            if (tag === label.tag) {
                tags[tag] = label.name
            }
        })
    })

    return (
        <Layout>
            <SEO title="About" />
            <div className="post-page-main">
                <div className="sidebar px-4 py-2">
                    <Sidebar />
                </div>

                <div className="post-main">
                    <SEO title="About" />
                    <div className="mt-3">
                        <h2 className="heading">About</h2>
                        <p><i> This blog is about interfaces. Primarily brain-machine interfaces. Advances in BCI draw from many other areas — neuroscience, materials, computation, machine learning, and imaging. Posts on this blog explore the interfaces between these disciplines and put them in the context of the latest BCI developments. </i></p>
                        <br />
                        <h4>About Me</h4>
                        <div>
                            <p className="d-inline-block ml-3 w-75 align-top">I am a physician and neuroscientist, currently developing deep learning technology for medical images at Qure.ai. The best way to reach me is Twitter.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export const pageQuery = graphql`
    query aboutQuery {
        site {
            siteMetadata {
                labels {
                    tag
                    tech
                    name
                    size
                    color
                }
            }
        }
    }
`

export default AboutPage
