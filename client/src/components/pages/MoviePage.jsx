import { Box, Grid, Paper, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {   useParams, useSearchParams } from 'react-router-dom';

const MoviePage = () => {

    const [data,setData]=useState({
        movie:{
            name:"",
            realeaseDate:"",
        },
        reviews:[]
    })
    const {id} = useParams();

    const fetchData=()=>{
        try {
            const result=axios.get(`https://zany-plum-agouti-gown.cyclic.app/review/${id}`)
            console.log(result.data);
            const temp={...data}
            temp.reviews=result.data
            setData(temp)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        fetchData()
    },[])

  return (
    <Box>
        {data?.reviews?.map(item=>(
            <Paper sx={{backgroundColor:"skyblue",p:2,my:3}}>
                <Typography>
                    {item.reviewerName}
                </Typography>
                <Typography>
                    {item.ratings + "/"+"10"}
                </Typography>
                <Typography>
                    {item.comment}
                </Typography>
            </Paper>
        ))}
    </Box>
  )
}

export default MoviePage