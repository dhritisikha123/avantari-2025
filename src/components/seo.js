// // src/components/SEO.js
// import * as React from "react"
// import { useStaticQuery, graphql } from "gatsby"
// import PropTypes from "prop-types"

// function Seo({ description, title, image, url, children }) {
//   const { site } = useStaticQuery(
//     graphql`
//       query {
//         site {
//           siteMetadata {
//             title
//             description
//             author
//             siteUrl
//             defaultImage: image
//           }
//         }
//       }
//     `
//   )

//   const metaDescription = description || site.siteMetadata.description
//   const defaultTitle = site.siteMetadata?.title
//   const metaImage = image || site.siteMetadata.defaultImage
//   const metaUrl = url || site.siteMetadata.siteUrl

//   return (
//     <>
//       <title>{defaultTitle ? `${title} | ${defaultTitle}` : title}</title>
//       <meta
//         name="google-site-verification"
//         content="kXpOY--FJ9ZTju98Ek8b9xKK_wqwsf_GDaaotEtq4c8"
//       />

//       <meta name="description" content={metaDescription} />
//       <meta property="og:title" content={title} />
//       <meta property="og:description" content={metaDescription} />
//       <meta property="og:type" content="website" />
//       <meta property="og:image" content={metaImage} />
//       <meta property="og:url" content={metaUrl} />
//       <meta property="og:site_name" content={defaultTitle} />
//       <meta name="twitter:card" content="summary_large_image" />
//       <meta name="twitter:creator" content={site.siteMetadata?.author || ``} />
//       <meta name="twitter:title" content={title} />
//       <meta name="twitter:description" content={metaDescription} />
//       <meta name="twitter:image" content={metaImage} />

//       <link rel="canonical" href={metaUrl} />

//       {children}
//     </>
//   )
// }

// Seo.defaultProps = {
//   description: ``,
//   image: null,
//   url: null,
// }

// Seo.propTypes = {
//   description: PropTypes.string,
//   title: PropTypes.string.isRequired,
//   image: PropTypes.string,
//   url: PropTypes.string,
//   children: PropTypes.node,
// }

// export default Seo

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"

function Seo({ description, title, image, url, children }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            defaultImage: image
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title
  const metaImage = image || site.siteMetadata.defaultImage
  const metaUrl = url || site.siteMetadata.siteUrl

  return (
    <>
      <title>{defaultTitle ? `${title} | ${defaultTitle}` : title}</title>
      <meta
        name="google-site-verification"
        content="kXpOY--FJ9ZTju98Ek8b9xKK_wqwsf_GDaaotEtq4c8"
      />

      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={metaImage} />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:site_name" content={defaultTitle} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={site.siteMetadata?.author || ``} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />

      <link rel="canonical" href={metaUrl} />

      {children}
    </>
  )
}

Seo.defaultProps = {
  description: ``,
  image: null,
  url: null,
}

Seo.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  url: PropTypes.string,
  children: PropTypes.node,
}

export default Seo
