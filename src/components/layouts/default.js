import React from 'react'
import NavCrumbs from '../navcrumbs'
import BreadCrumbs from '../breadcrumbs'
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

  {props.slug
    ? <NavCrumbs slug={props.slug} app={props.app} />
    : <BreadCrumbs pageTitle={props.title} app={props.app} />
  }
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
