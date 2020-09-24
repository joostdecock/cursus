import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'

import Blockquote from '@freesewing/components/Blockquote'
import ReadMore from '../readmore'
import YouTube from '../youtube'

const customComponents = {
  Note: ({ children }) => <Blockquote type="note">{children}</Blockquote>,
  Tip: ({ children }) => <Blockquote type="tip">{children}</Blockquote>,
  Warning: ({ children }) => <Blockquote type="warning">{children}</Blockquote>,
  Fixme: ({ children }) => <Blockquote type="fixme">{children}</Blockquote>,
  YouTube,
}

const Mdx = ({ node, slug }) => (
  <section id="mdx">
    <MDXProvider components={{
      ...customComponents,
      ReadMore: (props) => <ReadMore {...props} slug={slug} />,
    }}>
      <MDXRenderer>{node.body}</MDXRenderer>
    </MDXProvider>
  </section>
)

export default Mdx
