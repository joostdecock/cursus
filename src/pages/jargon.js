import React, {useEffect} from 'react'
import useApp from '../hooks/useApp'
import AppWrapper from '../components/app/wrapper'
import Layout from '../components/layouts/default'

const jargon = require('../../jargon')
const JargonPage = (props) => {
  // Hooks
  const app = useApp()

  // Effects
  useEffect(() => {
    app.setTitle('Verklarende woordenlijst')
  }, [])

  return (
    <AppWrapper app={app}>
      <Layout app={app}>
        <ul className='links'>
        {Object.keys(jargon).map( term => <li key={term}><b>{term}</b>: {jargon[term]}</li>)}
        </ul>
      </Layout>
    </AppWrapper>
  )
}

export default JargonPage
