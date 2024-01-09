import React from 'react'
import { Typography, Container } from '@mui/material'

const NoInfo = () => {
  return (
    <Container
      sx={{
        textAlign: 'center',
        marginTop: '20px',
        color: '#666',
        paddingTop: '50px',
      }}
    >
      <Typography variant="h5" gutterBottom>
        Feature is coming
      </Typography>
      <Typography variant="body1">Stay tuned for updates!</Typography>
    </Container>
  )
}

export default NoInfo
