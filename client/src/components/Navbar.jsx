import { Button, Grid, Typography } from '@mui/material'
import React from 'react'

const Navbar = () => {
  return (
    <Grid container justifyContent={'space-between'} sx={{padding:2}}>
        <Grid item>
            <Typography>
                MOVIECRITIC
            </Typography>
        </Grid>
        <Grid item>
            <Button variant='outlined'>
                Add new movie
            </Button>
            <Button sx={{mx:2}} variant='contained'>
                Add new review
            </Button>
        </Grid>

    </Grid>
  )
}

export default Navbar