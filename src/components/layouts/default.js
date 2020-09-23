import React from 'react'
import BreadCrumbs from '../breadcrumbs'
import MainAside from '../menus/main-aside'
import MdxToc from '../mdx/toc'
import './default.scss'

const DefaultLayout = (props) => {
  return (
    <div className="fs-sa" dataLayout="docs">
      <aside>
        <div className="sticky">
          <MainAside app={props.app} active={props.active} />
          <div className="aside-context">{props.context || null}</div>
        </div>
      </aside>
      <section>
        <BreadCrumbs crumbs={props.app.crumbs} pageTitle={props.app.title} />
        <h1 dangerouslySetInnerHTML={{__html: props.app.title}}/>
        {props.toc && (
          <div className='text-toc-wrapper'>
            <div className='text'>{props.children}</div>
            <div className='toc'><MdxToc toc={props.toc} app={props.app} /></div>
          </div>
        )}
        {!props.toc && props.children}
      </section>
    </div>
  )
}

export default DefaultLayout
