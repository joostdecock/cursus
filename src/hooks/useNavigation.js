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

  const getPages = edges => {
    const pages = {}
    for (let edge of edges) {
      let [file, slug] = slugFromFilePath(edge.node.fileAbsolutePath)
      pages[slug] = {
        slug,
        file,
        title: edge.node.frontmatter.title,
        order: (edge.node.frontmatter.order || '')
          + edge.node.frontmatter.title
          + slug
      }
    }

    return pages
  }

  const parentSlug = slug => '/' + slugChunks(slug).pop().join('.') + '/'


  const getTree = (pages) => {
    let tree = {}
    for (let slug of Object.keys(pages).sort()) {
      addToTree(slug, pages[slug], tree)
    }

    return tree
  }

  const slugChunks = slug => {
    const chunks = []
    for (const chunk of slug.split('/')) {
      if (chunk.length > 0) chunks.push(chunk)
    }

    return chunks
  }

  const decorateTree = (tree, chunks, slug, page) => {
    let index
    if (chunks.length === 0) return tree
    else {
      index = chunks.shift()
      if (chunks.length === 0) {
        tree[index] = {
          order: page.order,
          title: page.title,
          slug
        }
      }
      else {
        if (typeof tree[index] === 'undefined') tree[index] = { children: {} }
        else if (typeof tree[index].children === 'undefined') tree[index].children = {}
      }
    }

    return decorateTree(tree[index].children, chunks, slug, page)
  }

  const addToTree = function (slug, page, tree) {
    decorateTree(tree, slugChunks(slug), slug, page)
  }

  const getFromTree = (tree, chunks) => {
    if (chunks.length === 0) return null

    const index = chunks.shift()
    if (chunks.length === 0) {
      let children = {}
      for (let id in tree[index].children) {
        let child = tree[index].children[id]
        children[child.slug] = child
      }
      return children
    }
    return getFromTree(tree[index].children, chunks)
  }

  const getChildren = (slug, tree) => {
    return getFromTree(tree, slugChunks(slug))
  }

  const pages = getPages(query.mdx.edges)
  const tree = getTree(pages)


  // Now add children
  for (const slug of Object.keys(pages)) {
    pages[slug].children = getChildren(slug, tree)
  }

  return pages
}

export default useNavigation
