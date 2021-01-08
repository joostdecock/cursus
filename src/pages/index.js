import React from 'react'
import useApp from '../hooks/useApp'
import AppWrapper from '../components/app/wrapper'
import Button from '@material-ui/core/Button'
import UpdatesIcon from '../components/UpdatesIcon'

// Style
import './homepage.scss'

const HomePage = (props) => {
  // Hooks
  const app = useApp()

  return (
    <AppWrapper app={app} noCrumbs>
        <div id='homepage'>
          <div className='nerd'>🤓</div>
          <h1>les.joost.at</h1>
          <h5>Informaticalessen voor (leuke) volwassenen</h5>
          <Button
            size='large'
            color='primary'
            href='/nieuws/'
            variant='contained'
            style={{marginTop: '2rem'}}
          ><UpdatesIcon style={{marginRight: '1rem'}}/>Nieuws & updates</Button>
        </div>
    </AppWrapper>
  )
}

export default HomePage
