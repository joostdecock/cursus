import React from 'react'
import useApp from '../hooks/useApp'
import AppWrapper from '../components/app/wrapper'
import Layout from '../components/layouts/default'

// Style
import './homepage.scss'

const HomePage = (props) => {
  // Hooks
  const app = useApp()

  return (
    <AppWrapper app={app}>
      <Layout app={app}>
        <p>home page</p>
      </Layout>
    </AppWrapper>
  )
}

export default HomePage
