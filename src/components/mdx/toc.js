import React from 'react'

const MdxToc = ({ toc, app }) => {
  if (!toc.items) return null
  else
    return (
      <>
        <h5>Inhoud</h5>
        <ul>
          {toc.items.map((heading) => (
            <li key={heading.url}>
              <a href={heading.url} title={heading.title}>
                {heading.title}
              </a>
            </li>
          ))}
        </ul>
      </>
    )
}

export default MdxToc
