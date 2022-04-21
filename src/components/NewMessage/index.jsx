import React from 'react'
import { 
  Button,
  Paper,
  Grid,
  TextField

} from '@mui/material'

const handleClick = e => {
  e.preventDefault()
}

function NewMessage() {
  return (
    <form autoComplete='off' onSubmit={e => handleClick(e)} >
      <Paper elevation={6} style={{ margin: 16, padding: 4, opacity: 0.7}} >
        <Grid container spacing={1} direction='column' >

          <Grid item >
            <TextField fullWidth />
          </Grid>
  
          <Grid item >
            <Button fullWidth variant="contained" color='success' >Post</Button>
          </Grid>

        </Grid>
      </Paper>
    </form>
  )
}

export default NewMessage