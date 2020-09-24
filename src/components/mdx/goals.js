import React from 'react'
import Blockquote from '@freesewing/components/Blockquote'

const Goals = ({children}) => (
  <Blockquote type='goals'>
    <h5>Op het einde van dit onderdeel kan je:</h5>
    {children}
  </Blockquote>
)

export default Goals
