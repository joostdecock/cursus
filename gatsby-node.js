const path = require('path')

const slugFromFilePath = (filePath) => {
  let slug = '/' + filePath.match(/[\/|\\]mdx[\/|\\](.*)/).pop()

  if (slug.slice(-10) === '/README.md') return slug.slice(0, -9)
  else return slug.slice(0, -3)
}

const createMdxPages = async function (createPage, graphql) {
  let promises = []
  const query = `{
    allMdx(
      filter: { fileAbsolutePath: { regex: "//mdx/[^.]*/*.md/" } }
      sort: { fields: [fileAbsolutePath], order: DESC }
    ) { edges { node { fileAbsolutePath } } }
  }`
  await graphql(query).then((res) => {
    if (typeof res.data === 'undefined') throw 'query failed ' + query
    else {
      for (let page of res.data.allMdx.edges) {
        let slug = slugFromFilePath(page.node.fileAbsolutePath)
        promises.push(
          new Promise((resolve, reject) => {
            createPage({
              path: slug,
              component: path.resolve(`./src/pages/_mdx.js`),
              context: {
                file: page.node.fileAbsolutePath,
                page: page.node,
                slug
              }
            })
            resolve(true)
          })
        )
      }
    }

    return Promise.all(promises)
  })
}

exports.createPages = async ({ actions, graphql }) => {

  await createMdxPages(actions.createPage, graphql)

  return
}

