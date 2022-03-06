import { Box } from '@mui/system'
import React from 'react'

const Welcome = () => {
  return (
    // <Box sx={{position:'fixed', top: '50%', left: '30%', fontWeight: '600', fontSize: '3rem'}}>Welcome to STARVENS!!</Box>
    <Box sx={{position:'fixed', top: '50%', left: '30%', fontWeight: '600', fontSize: '3rem'}}>
      <Box>Welcome to STARVENS!!</Box>
      <Box sx={{fontSize: '2rem', marginLeft: '13rem'}}><i>One place to all</i></Box>
      </Box>
  )
}

export default Welcome