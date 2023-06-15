import { Alert } from '@mui/material'
import * as React from 'react'

const MuiAlert = () => {
  return (
    <div>
      <Alert severity="error">
        <strong>Error</strong> - Incorrect name or password. Please try again!
      </Alert>
    </div>
  )
}

export default MuiAlert
