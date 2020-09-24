import React from 'react'
import MainAside from '../menus/main-aside'
import './default.scss'

const BareLayout = (props) => {
  return (
    <div className="fs-sa" dataLayout="docs">
      <aside>
        <div className="sticky">
          <MainAside app={props.app} />
          <div className="aside-context">{props.app.context || null}</div>
        </div>
      </aside>
      <section>{props.children}</section>
    </div>
  )
}

export default BareLayout
