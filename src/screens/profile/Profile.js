import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "../../common/header/Header";
import "./Profile.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function Profile(props) {
    const [char, setChar] = useState([]);
    useEffect(() => {
        axios
            .get(`https://rickandmortyapi.com/api/character/${props.match.params.id}`)
            .then(res => {
                setChar(res.data);
                console.log("Response:", res);
            })
            .catch(err => {
                console.log(err.message);
            });
    }, [props.match.params.id]);

    return (
        <div>
            <Header />
            <div className="container">
                <div className="navigation-panel">
                    <Link to="/RickMortyApi/">
                        <Button variant="contained" color="success" className="custom-btn">
                            Home
                        </Button>
                    </Link>
                </div>
                <div className="flex-container-solochar">
                    <div className="characters-solochar">
                        <Card sx={{ minWidth: 275 }} key={"item" + char.id} style={{ marginBottom: 20 + 'px' }}>
                            <CardMedia
                                component="img"
                                image={char.image}
                                alt={char.name}
                            />
                            <CardContent>
                                <Typography variant="body2">
                                    Status: {char.status}
                                    <br />
                                    Species: {char.species}
                                    <br />
                                    {char.gender}
                                    <br />
                                    {char.origin && char.origin.name}
                                </Typography>
                            </CardContent>
                            <CardActions style={{ justifyContent: "center", color: "black", fontWeight: "bolder" }}>
                                {char.name}
                            </CardActions>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}

