import React from 'react'
import BreadCrumbs from '../navcrumbs'
import MainAside from '../menus/main-aside'
import MdxToc from '../mdx/toc'
import './default.scss'
import ReadMore from '../readmore'

const DefaultLayout = (props) => {

  return (
    <div className="fs-sa" dataLayout="docs">
      <aside>
        <div className="sticky">
          <MainAside app={props.app} />
          <div className="aside-context">{props.app.context}</div>
        </div>
      </aside>
      <section>
        <BreadCrumbs slug={props.slug} app={props.app} />
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
