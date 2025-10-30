/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

function Seo({ description, lang, meta, title, image, excerpt}) {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            defaultTitle: title
            siteUrl: url
            defaultImage: image
            title
            description
            author
          }
        }
      }
    `
  )

  const {
    defaultTitle,
    defaultDescription,
    siteUrl,
    defaultImage,
  } = site.siteMetadata

  const metaDescription = description || site.siteMetadata.description
  const seo = {
     title: title || defaultTitle,
     description: description || defaultDescription,
     image: `${siteUrl}${image || defaultImage}`,
     url: `${siteUrl}${pathname}`,
   }

  return (
    <>
      <title>{`${seo.title} | ${site.siteMetadata.title}`}</title>
      <meta name="description" content={seo.description} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={site.siteMetadata.author} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      {meta.map((m, index) => (
        <meta key={index} {...m} />
      ))}
    </>
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default Seo

export const Head = ({ 
  description, 
  lang, 
  meta, 
  title, 
  image, 
  excerpt 
}) => (
  <Seo 
    description={description} 
    lang={lang} 
    meta={meta} 
    title={title} 
    image={image} 
    excerpt={excerpt} 
  />
);