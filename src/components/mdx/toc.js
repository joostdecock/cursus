import React from 'react'


const renderLevel = (items, level=0) => {
  level++
  return (
    <ul>
     {items.map(item => (
       <li key={item.url}>
         <a href={item.url} title={item.title} className={`level-${level}`}>
           {item.title}
         </a>
        {item.items && renderLevel(item.items, level)}
       </li>
     ))}
    </ul>
  )
}

const MdxToc = ({ toc, app }) => {
  console.log(toc)
  if (!toc.items) return null
  else
    return (
      <>
        <h5>Inhoud</h5>
        {renderLevel(toc.items)}
      </>
    )
}

export default MdxToc
