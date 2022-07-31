import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import axios from "axios";
// import { useEffect, useState } from "react";




const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "hsl(300, 100%, 90%)",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const MovieCard = ({ title, movie_code, release_date, id }) => {
  const navigate = useNavigate();

  const getDate = (date) => {
    return date.split(" ", 5);
  };

  


    const deleteMovie = (id) => {
      axios.delete(`http://localhost:8000/zee5/user/deleteMovie/${id}`)
      .then(response => console.log(response))
      .catch(error => console.log(error));
    }

  

  return (
    <>
      <Grid
      
            style={{maxWidth: '80%', marginInline: 'auto',marginBottom: '20px', background: 'hsl(300, 100%, 75%)'}}
      >
        <Grid>
          <Item>
            <Typography gutterBottom variant="h5" component="div">
              Movie Name: {title.toUpperCase()}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              Movie Code: {movie_code}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              Released At: {dayjs(release_date).format("DD-MM-YYYY")}
            </Typography>
            <Button
              size="small"
              onClick={() => navigate(`/movieDetail/${movie_code}`)}
            >
              <VisibilityIcon />
            </Button>
            <Button  className="delete_btn">
              <DeleteIcon
              onClick={() => {
                deleteMovie(id)
              }}
              />
            </Button>
            <Button  className="edit_btn">
              <EditIcon
              onClick={() => {
                navigate(`/updateMovie/${id}`);
              }}
              />
            </Button>
            
          </Item>
        </Grid> 
    </Grid>   
    </>
  );
};

export default MovieCard;