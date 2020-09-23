import { useStaticQuery, graphql } from 'gatsby'

/* this hook builds the documentation structure and navigation based on MDX content */

function useNavigation() {

  const query = useStaticQuery(graphql`
    {
      mdx: allMdx(
        filter: { fileAbsolutePath: { regex: "//mdx/[^.]*/*.md/" } }
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

  // Gets the web URL slug from file path
  const slugFromFilePath = (filePath) => {
    let slug = '/' + filePath.match(/[\/|\\]mdx[\/|\\](.*)/).pop()

    if (slug.slice(-10) === '/README.md') return [slug, slug.slice(0, -9)]
    else return [slug, slug.slice(0, -3)]
  }

  // Gets the web URL slug fro part of a path
  const slugFor = function (a, b, c, d, e) {
    let chunks = []
    if (a) chunks.push(a)
    if (b) chunks.push(b)
    if (c) chunks.push(c)
    if (d) chunks.push(d)
    if (e) chunks.push(e)

    return '/' + chunks.join('/') + '/'
  }

  const getPages = edges => {
    const pages = {}
    for (let edge of edges) {
      let [file, slug] = slugFromFilePath(edge.node.fileAbsolutePath)
      pages[slug] = {
        slug,
        file,
        title: edge.node.frontmatter.title,
        order: (edge.node.frontmatter.order || '') + edge.node.frontmatter.title
      }
    }

    return pages
  }

  const getTree = (pages) => {
    const tree = {
      '/docs/about/': {
        title: 'docs',
        children: {}
      }
    }

    // Add documentation from MDX pages
    // Better make sure they are in order
    for (let slug of Object.keys(pages.docs).sort()) {
      addToTree(slug, pages.docs[slug], tree)
    }

    return tree['/docs/'].children
  }

  const addToTree = function (slug, page, tree) {
    let [a, b, c, d, e] = slug.slice(1, -1).split('/')
    let target
    if (e) {
      target =
        tree[slugFor(a)].children[slugFor(a, b)].children[slugFor(a, b, c)].children[
          slugFor(a, b, c, d)
        ].children
    } else if (d)
      target = tree[slugFor(a)].children[slugFor(a, b)].children[slugFor(a, b, c)].children
    else if (c) target = tree[slugFor(a)].children[slugFor(a, b)].children
    else if (b) target = tree[slugFor(a)].children
    else if (a) target = tree
    target[slugFor(a, b, c, d, e)] = { title: 'fixme', children: {} }

    return
  }


  const pages = getPages(query.mdx.edges)
  console.log({pages})
  //const tree = getTree(pages)

  //const getTitle = (slug) => titles[slug]

  return {
    pages,
  }
}

export default useNavigation
