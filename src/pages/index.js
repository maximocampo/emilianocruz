import React from "react"
import Helmet from 'react-helmet';
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import PostLink from "../components/post-link"
import nota from "../images/24.jpg"
import nota2 from "../images/23-1.jpg"

const IndexPage = ({
  data: {
    site,
    allMarkdownRemark: { edges },
  },
}) => {
    const t = edges.map(d => d.node.frontmatter)
  console.log('ee', t)
    
    /*
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)
    */
  return (
    <Layout>
      <Helmet>
        <title>{site.siteMetadata.title}</title>
        <meta name="description" content={site.siteMetadata.description} />
      </Helmet>
      <img src={nota} alt=""/>
      <img src={nota2} alt=""/>
      {t.map((item, i) => (
          <PostLink
              post={{title: item.title}}
              x={i * 260 + 150}
              y={`${Math.floor(Math.random() * 100)}%`}
          />))}
      
    </Layout>
  )
}

export default IndexPage
export const pageQuery = graphql`
  query indexPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            path
            title
          }
        }
      }
    }
  }
`
