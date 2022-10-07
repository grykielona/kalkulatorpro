// const path = require(`path`)

// exports.createPages = async ({ graphql, actions }) => {
//   const PostView = path.resolve('src/components/PostView/PostView.jsx')
//   const { createPage } = actions
//   const query = await graphql(`
//     query {
//       allMdx {
//         nodes {
//           id
//           frontmatter {
//             slug
//             title
//             date
//           }
//           internal {
//             contentFilePath
//           }
//         }
//       }
//     }
//   `)

//   query.data.allMdx.nodes.forEach((node) => {
//     createPage({
//       path: `wiedza/${node.frontmatter.slug}`,
//       component: `${PostView}?__contentFilePath=${node.internal.contentFilePath}`,
//       context: {
//         id: node.id,
//       },
//     })
//   })
// }
