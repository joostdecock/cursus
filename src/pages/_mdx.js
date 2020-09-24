import React, { useEffect } from 'react'
import useApp from '../hooks/useApp'
import AppWrapper from '../components/app/wrapper'
import Layout from '../components/layouts/default'
import Mdx from '../components/mdx'
import { Link, graphql } from 'gatsby'
import ReadMore from '../components/readmore'
import UpIcon from '@material-ui/icons/ArrowDropUp'

const HomePage = (props) => {
  // Hooks
  const app = useApp()

  const node = props.data.allMdx.edges[0].node
  const title = node.frontmatter.title || false
  const slug = props.pageContext.slug
  const parent = slug.split('/').slice(0, -2).join('/') + '/'

  // Effects
  useEffect(() => {
    app.setTitle(title)
    app.setDescription(node.excerpt)
    app.setContext([
      app.pages[parent]
        ? (<h6><Link to={parent}><UpIcon /> {app.pages[parent].title}</Link></h6>)
        : null,
      <h5>{title}</h5>,
      <ReadMore slug={slug} box={false} />
    ])
    app.setActive(node.parent.relativeDirectory.split('/').shift())
  }, [props.pageContext.file])

  return (
    <AppWrapper app={app}>
      <Layout
        app={app}
        toc={node.tableOfContents}
        slug={slug}
      >
        <Mdx node={node} slug={slug}/>
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
          tableOfContents(maxDepth: 4)
          frontmatter {
            title
            order
          }
        }
      }
    }
  }
`

