import React, { useEffect } from 'react'
import useApp from '../hooks/useApp'
import useNavigation from '../hooks/useNavigation'
import AppWrapper from '../components/app/wrapper'
import Layout from '../components/layouts/default'
import Mdx from '../components/mdx'
import { graphql } from 'gatsby'
//import crumbsFromNavigation from '../components/app/crumbsFromNavigation'

const HomePage = (props) => {
  // Hooks
  const app = useApp()
  const nav = useNavigation()

  const node = props.data.allMdx.edges[0].node
  const title = node.frontmatter.title || false

  // Effects
  useEffect(() => {
    app.setTitle(title)
    app.setDescription(node.excerpt)
    //app.setCrumbs(crumbsFromNavigation(props.path, tree, titles))
  }, [props.pageContext.file])

  const active = node.parent.relativeDirectory.split('/').shift()

  return (
    <AppWrapper app={app}>
      <Layout
        app={app}
        active={node.parent.relativeDirectory.split('/').shift()}
        toc={node.tableOfContents}
      >
        <Mdx node={node} />
      </Layout>
    </AppWrapper>
  )
}

export default HomePage

// See https://www.gatsbyjs.org/docs/page-query/
export const pageQuery = graphql`
  query MdxDocsPage($file: String) {
    allMdx(filter: { fileAbsolutePath: { eq: $file } }) {
      edges {
        node {
          parent { ... on File { relativeDirectory } }
          body
          excerpt
          tableOfContents(maxDepth: 3)
          frontmatter {
            title
            order
          }
        }
      }
    }
  }
`

