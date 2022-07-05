import React from 'react'
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import VisibilityIcon from '@mui/icons-material/Visibility';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const MovieDetailCard = ({title,movie_code,released,director,producer,actors,audio_language}) => {
    const navigate = useNavigate();
  return (
    <>
        <ArrowBackIcon style={{margin: '10px', cursor: 'pointer'}} onClick={() => navigate('/')} />
        <Card style={{marginTop: '50px', maxWidth: '700px',marginInline: 'auto', border: '1px solid #888', background: 'hsl(300, 100%, 90%)'}}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Movie Name: {title.toUpperCase()}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          Movie Code: {movie_code}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          Released On: {released}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          Director: {director}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          Producer: {producer}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          Actors: {actors.join(', ')}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          Audios: {audio_language.join(', ')}
        </Typography>
      </CardContent>
    </Card>
    </>
  )
}

export default MovieDetailCard