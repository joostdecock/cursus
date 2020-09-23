import React from 'react'
import { Link } from 'gatsby'

const Breadcrumbs = ({ pageTitle, crumbs = [] }) => {
  const renderCrumb = (crumb) => {
    return (
      <li key={crumb.slug}>
        <Link to={crumb.slug} dangerouslySetInnerHTML={{ __html: crumb.title}}/>
      </li>
    )
  }
  return (
    <nav className="breadcrumbs">
      <ul>
        <li>
          <Link to="/">
            Start
          </Link>
        </li>
        {crumbs.map((crumb) => renderCrumb(crumb))}
        <li dangerouslySetInnerHTML={{ __html: pageTitle}}/>
      </ul>
    </nav>
  )
}

export default Breadcrumbs
