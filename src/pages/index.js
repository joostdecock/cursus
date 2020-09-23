import React from 'react'
import useApp from '../hooks/useApp'
import AppWrapper from '../components/app/wrapper'
import Layout from '../components/layouts/bare'
import Logo from '../components/logo'

// Style
import './homepage.scss'

const HomePage = (props) => {
  // Hooks
  const app = useApp()

  return (
    <AppWrapper app={app}>
      <Layout app={app}>
        <div id='homepage'>
          <h1>Too cool for school</h1>
          <div className='hero'>
            2c4s
          </div>
          <p>Informaticalessen voor (leuke) volwassenen</p>
        </div>
      </Layout>
    </AppWrapper>
  )
}

export default HomePage
