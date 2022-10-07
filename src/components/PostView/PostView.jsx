import { MDXProvider } from '@mdx-js/react'
import React from 'react'

const PostView = ({ children, pageContext }) => (
  //   console.log(data)
  //   console.log(children)
  //   console.log(props)
  <>
    {/* <h1>fuidshbfjsdbf</h1> */}
    <h1>{pageContext.frontmatter.title}</h1>
    {/* <h1>Title</h1> */}
    <MDXProvider>{children}</MDXProvider>
  </>
)

export default PostView
