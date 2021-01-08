import React from 'react'
import useApp from '../hooks/useApp'
import AppWrapper from '../components/app/wrapper'

// Style
import './homepage.scss'

const HomePage = (props) => {
  // Hooks
  const app = useApp()

  return (
    <AppWrapper app={app} noCrumbs>
        <div id='homepage'>
          <div className='nerd'>🤓</div>
          <h1>Too cool for school</h1>
          <p>Informaticalessen voor (leuke) volwassenen</p>
        </div>
    </AppWrapper>
  )
}

export default HomePage
