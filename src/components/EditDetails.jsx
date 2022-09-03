import { Card, CardContent, Grid, TextField, Button, Typography } from "@mui/material";
import React from "react";
import { useState,useEffect} from "react";
import axios from 'axios'
import { useParams, useNavigate } from "react-router-dom";


const EditDetails = () => {
const {id} = useParams();
const navigate = useNavigate();
// alert(id)
    const [data, setData] = useState({
        movie_id: "",
        title: "",
        release_date: "",
        director: "",
        producer: "",
        actors: "",
        audio_language: ""
    })

    const updateMovie = (id) => {

        axios.put(`http://localhost:8000/zee5/user/updateMovie/${id}`, data)
        .then(res => {
            navigate('/');
        })
        .catch(err => console.log(err));
    };


    function handleChange(event) {
        const { name, value } = event.target;

        setData(data => {
            return {
                ...data,
                [name]: value
            }
        })
    }

    
    return (
        // marginTop: "50px"
        // <Card style={{ maxWidth: 500, padding: "20px 10px", margin: "auto" }}>
        <Card style={{ maxWidth: 500, padding: "20px 10px", margin: "5% auto 0 auto",background: 'hsl(300, 100%, 90%)' }}>
            <CardContent >

                <Typography variant="h4" style={{ color: 'purple' }}>
                    Edit Details
                </Typography>
                <form>
                    <Grid container spacing={1}>
                        {/* <Grid xs={12} sm={6} item> */}
                        <Grid xs={12} item>
                            <TextField
                                type="text"
                                label="movie_id"
                                placeholder="movie_id"
                                variant="outlined"
                                name="movie_id"
                                value={data.movie_id}
                                // value={title}
                                onChange={handleChange}
                                fullWidth
                            />
                        </Grid>
                        <Grid xs={12} item>
                            <TextField
                                type="text"
                                label="Title"
                                placeholder="Enter Title"
                                variant="outlined"
                                name="title"
                                value={data.title}
                                // value={title}
                                onChange={handleChange}
                                fullWidth
                            />
                        </Grid>
                        <Grid xs={12} item>
                            <TextField
                                type="date"
                                // label="Release Date" 
                                placeholder="Enter Release Date"
                                variant="outlined"
                                name="release_date"
                                value={data.release_date}
                                //value={release_date}
                                onChange={handleChange}
                                fullWidth
                            />
                        </Grid>
                        <Grid xs={12} item>
                            <TextField
                                type="text"
                                label="Director*"
                                placeholder="Director*"
                                variant="outlined"
                                name="director"
                                value={data.director}
                                // value={director}
                                onChange={handleChange}
                                fullWidth
                            />
                        </Grid>
                        <Grid xs={12} item>
                            <TextField
                                type="text"
                                label="Producer*"
                                placeholder="Producer*"
                                variant="outlined"
                                name="producer"
                                value={data.producer}
                                // value={producer}
                                onChange={handleChange}
                                fullWidth
                            />
                        </Grid>
                        <Grid xs={12} item>
                            <TextField
                                type="text"
                                label="Actors"
                                placeholder="Actors"
                                variant="outlined"
                                name="actors"
                                value={data.actors}
                                // value={actors}
                                onChange={handleChange}
                                fullWidth
                            />
                        </Grid>
                        <Grid xs={12} item>
                            <TextField
                                type="text"
                                label="Audio Languages"
                                placeholder="Audio Laguages"
                                variant="outlined"
                                name="audio_language"
                                value={data.audio_language}
                                // value={audio_language}
                                onChange={handleChange}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button style={{ background: 'purple' }}
                                variant="contained"
                                fullWidth
                                onClick={() => {
                                    updateMovie(id);
                                }}
                            >
                                Edit Movie
                            </Button>
                        </Grid>
                </Grid>
            </form>
        </CardContent>
        </Card >

    )
}

export default EditDetails