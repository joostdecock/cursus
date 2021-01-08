import React from 'react'

const Goals = ({children=null}) => (
  <blockquote className='goals'>
    <h5>Op het einde van dit onderdeel kan je:</h5>
    {children}
  </blockquote>
)

export default Goals
