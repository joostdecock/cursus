import React from 'react'
import { Link } from 'gatsby'
import useNavigation from '../../hooks/useNavigation'
import './menu.scss'

const DocsMenu = ({ app, className = '' }) => {
  const { tree, titles } = useNavigation(app)

  const renderDocs = (branch) => {
    let list = []
    let links = {}
    for (let slug of Object.keys(branch.children)) links[titles[slug]] = slug
    for (let title of Object.keys(links).sort()) {
      let slug = links[title]
      list.push(
        <li key={slug} className="link">
          <Link to={slug}>{title}</Link>
        </li>
      )
    }
    return <ul className="inline">{list}</ul>
  }

  return (
    <div className={`style-wrapper ${app.theme} menu-instance wrapper ${className}`}>
      <div>
        <h6>
          <Link to="/docs/about/">
            about
          </Link>
        </h6>
        {renderDocs(tree['/docs/about/'])}
      </div>
      <div>
        <h6>
          <Link to="/docs/patterns">
            fixme
          </Link>
        </h6>
        {renderDocs(tree['/docs/patterns/'])}
      </div>
      <div>
        <h6>
          fixme
        </h6>
        <ul className="inline">
          <li className="link">
            <Link to="/docs/measurements/">{titles['/docs/measurements/']}</Link>
          </li>
          <li className="link">
            <Link to="/docs/sewing/">{titles['/docs/sewing/']}</Link>
          </li>
          <li className="link">
            <a href="https://freesewing.dev/">
              fixme
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default DocsMenu
