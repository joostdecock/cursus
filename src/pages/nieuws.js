import React from 'react'
import useApp from '../hooks/useApp'
import AppWrapper from '../components/app/wrapper'

import LatestNews from '../components/LatestNews'

const Page = props => {

  const app = useApp()

  return (
    <AppWrapper
      app={app}
      title='Nieuws & Updates'
      description='Recent nieuws en updates aan de lessen'
      text
    >
      <LatestNews app={app} />
    </AppWrapper>
  )
}

export default Page
