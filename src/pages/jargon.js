import React from 'react'
import useApp from '../hooks/useApp'
import AppWrapper from '../components/app/wrapper'

import jargon from '../../jargon'

const JargonPage = (props) => {
  const app = useApp()

  const title = 'Verklarende woordenlijst'
  const list = Object.keys(jargon)
  list.sort()

  return (
    <AppWrapper
      app={app}
      title={title}
      description={title}
    >
      <table className='data'>
        <thead>
          <tr>
            <th>Term</th>
            <th>Verklaring</th>
          </tr>
        </thead>
        <tbody>
          {list.map( term => (
            <tr key={term}>
              <td className='ta-right fw-700'>{term}</td>
              <td>{jargon[term]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </AppWrapper>
  )
}

export default JargonPage
