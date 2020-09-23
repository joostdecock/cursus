import React from 'react'
import MainAside from '../menus/main-aside'
import './default.scss'

const BareLayout = (props) => {
  return (
    <div className="fs-sa" dataLayout="docs">
      <aside>
        <div className="sticky">
          <MainAside app={props.app} active={props.active} />
          <div className="aside-context">{props.context || null}</div>
        </div>
      </aside>
      <section>{props.children}</section>
    </div>
  )
}

export default BareLayout
