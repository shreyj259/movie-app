import { useState } from 'react'
import { Box, Grid, Paper, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Main = () => {
    const [movies, setMovies] = useState([]);

    const fetchMovies = async () => {
        try {
            const result=await axios.get("https://zany-plum-agouti-gown.cyclic.app/movies")
            console.log(result.data);
            setMovies(result.data);
        } catch (error) {
            
        }
    }

    useEffect(()=>{
        fetchMovies()
    },[])

  return (
    <Box>
        <Typography sx={{mx:3}}>
            The best movies reviews site !
        </Typography>

        <Grid container justifyContent={'center'}>
            {
                movies.map(item=>(
                    <Grid item key={item._id} sx={{mx:3,my:3,width:"20%"}}>
                        <Link to={`/movie/:${item._id}?name=${item.name}&releaseDate=${item.releaseDate}`}>
                        <Paper sx={{p:2,backgroundColor:"skyblue"}}>
                        <Typography>
                            {item.name}
                        </Typography>
                        <Typography>
                            {new Date(item.releaseDate).getDate() + ":" + new Date(item.releaseDate).getMonth() + ":" + new Date(item.releaseDate).getFullYear() }
                        </Typography>
                        </Paper>
                        </Link>
                    </Grid>
                ))
            }
        </Grid> 
    </Box>
  )
}

export default Main