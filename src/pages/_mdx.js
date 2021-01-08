import React from 'react'
import useApp from '../hooks/useApp'
import AppWrapper from '../components/app/wrapper'
import Mdx from '../components/mdx'
import { graphql } from 'gatsby'
import EditIcon from '@material-ui/icons/Edit'

const MdxPage = props => {

  const app = useApp()
  const editLink = `https://github.com/joostdecock/cursus/edit/master/mdx${props.path}README.md`

  return (
    <AppWrapper
      app={app}
      title={props.data.allMdx.edges[0].node.frontmatter.title}
      description={props.data.allMdx.edges[0].node.excerpt}
      {...app.treeProps(props.path)}
    >
      <div className='edit-page'>
        <a href={editLink}><EditIcon /> Pagina bewerken</a>
        </div>
      <Mdx node={props.data.allMdx.edges[0].node} offspring={app.getOffspring(props.path)} />
    </AppWrapper>
  )
}

export default MdxPage

// See https://www.gatsbyjs.org/docs/page-query/
export const pageQuery = graphql`
  query MdxDocsPage($file: String) {
    allMdx(filter: { fileAbsolutePath: { eq: $file } }) {
      edges {
        node {
          parent { ... on File { relativeDirectory } }
          body
          excerpt
          frontmatter {
            title
            order
          }
        }
      }
    }
  }
`

