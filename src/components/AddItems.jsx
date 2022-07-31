import { Card, CardContent, Grid, TextField, Button, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import axios from 'axios'
import {useNavigate} from 'react-router-dom';

// import { useEffect } from "react";

const AddItems = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        movie_id: '',

    
        title: "",
        release_date: "",
        director: "",
        producer: "",
        actors: [],
        audio_language: []
    })


    function handleChange(event) {
        const { name, value } = event.target;

        setData(data => {
            return {
                ...data,
                [name]: value
            }
        })
    }

    const setActors = (event) => {
        setData({...data, actors: [event.target.value]});
    }
    const setAudioLanguages = (event) => {
        setData({...data, audio_language: [event.target.value]});
    }

    const [user, setUser] = useState([])

    const fetchUsers = async () => {

        await axios.get('http://jsonplaceholder.typicode.com/users')
            .then((res) => {
                console.log(res.data)
                setUser(res.data)
            });

    };





    function handleClick(event) {
        event.preventDefault();
        //console.log(data)
        const newData = {
            movie_id: data.movie_id,
            title: data.title,
            release_date: data.release_date,
            director: data.director,
            producer: data.producer,
            actors: data.actors,
            audio_language: data.audio_language
        }
        axios.post(`http://localhost:8000/zee5/user/addMovie`, newData)
        .then(response => console.log(response))
        .catch(error => console.log(error));
        alert("successfully ADD")
    }


    return (
        // marginTop: "50px"
        // <Card style={{ maxWidth: 500, padding: "20px 10px", margin: "auto" }}>
        <Card style={{ maxWidth: 500, padding: "20px 10px", margin: "5% auto 0 auto", background: 'hsl(300, 100%, 90%)' }}>
            <CardContent >

                <Typography variant="h4" style={{ color: 'purple' }}>
                    Add Movie
                </Typography>
                {/* <form  onSubmit={onSubmit}> */}
                <form>
                    <Grid container spacing={1}>
                        {/* <Grid xs={12} sm={6} item> */}
                        <Grid xs={12} item>
                            <TextField
                                type="text"
                                label="movie_id"
                                placeholder="Enter movieid"
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
                                onChange={setActors}
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
                                onChange={setAudioLanguages}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button style={{ background: 'purple' }}
                                type="submit"
                                variant="contained"
                                fullWidth
                                onClick={handleClick}

                            >
                                Submit
                            </Button>
                        </Grid>
                        {/* to get data */}
                        <Grid item xs={12}>
                            <Button style={{ background: 'purple' }}

                                variant="contained"
                                fullWidth
                                // onClick={handleClick}
                                onClick={() => navigate('/')}
                            >
                                showdata
                            </Button>
                            {user && <p>{user}</p>}
                            {/* {
                               user.map(user =>(
                                    <>
                                  <p>{user._id}</p>  

                                    </>                              
                                ))
                            } */}

                        </Grid>
                    </Grid>
                </form>
            </CardContent>

        </Card >

    )
}

export default AddItems