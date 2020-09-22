import { useStaticQuery, graphql } from 'gatsby'

/* this hook builds the documentation structure and navigation based on MDX content */

function useNavigation(app) {
  // Gets the web URL slug from file path
  const slugFromFilePath = (filePath) => {
    return (
      '/' +
      filePath
        .match(/[\/|\\]md[\/|\\](.*)/)
        .pop()
        //.slice(0, -5)
    )
  }

  const getDocs = edges => {
    let docs = {}
    for (const edge of edges) {
      let slug = slugFromFilePath(edge.node.fileAbsolutePath)
      console.log(slug)
      docs[slug] = {
        slug,
        ...edge.node.frontmatter,
        body: edge.node.body,
        tableOfContents: edge.node.tableOfContents
      }
    }

    return docs
  }

  const mdx = useStaticQuery(graphql`
    {
      docs: allMdx(
        filter: { fileAbsolutePath: { regex: "//md/[^.]*/*.md/" } }
        sort: { fields: fileAbsolutePath, order: ASC }
      ) {
        edges {
          node {
            frontmatter {
              title
              order
            }
            fileAbsolutePath
          }
        }
      }
    }
  `)

  const docs = getDocs(mdx.docs.edges)

  return docs
}

export default useNavigation
