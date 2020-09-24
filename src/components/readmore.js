import React from 'react'
import useApp from '../hooks/useApp'
import { Link } from 'gatsby'
import Blockquote from '@freesewing/components/Blockquote'

const ReadMore = ({ slug, box = true }) => {
  const app = useApp()

  const pageList = slug => (
    <ul className={box ? 'links' : ''}>
      {Object.keys(app.pages[slug].children).map(path => (
        <li key={path}><Link to={path}>{app.pages[path].title}</Link></li>
      ))}
    </ul>
  )

  if (box)
    return (
      <Blockquote type="note">
        <h5>Meer lesmateriaal</h5>
        {pageList(slug)}
      </Blockquote>
    )
  else return pageList(slug)
}

export default ReadMore
