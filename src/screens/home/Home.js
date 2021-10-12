import React, { useState, useEffect, Component } from "react";
import Header from "../../common/header/Header";
import "./Home.css";
import axios from "axios";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from '@mui/material/CardMedia';
import { Link } from "react-router-dom";

export default function Home() {

  const [chars, setChars] = useState([]);

  useEffect(() => {

    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(res => {
        setChars(res.data.results);
      })
      .catch(err => {
        alert(err.message);
      })
  }, [])

  console.log(chars);

  return (
    <div>
      <Header />
      <div className="container">
        <div className="flex-container">
          <div className="characters">
            {chars.map((item, index) => (
              <Link to={`/item/${item.id}`} key={item.id}>
                <Card sx={{ minWidth: 275 }} key={"char" + index} style={{ marginBottom: 0 + 'px' }}>
                  <CardMedia
                    component="img"
                    image={item.image}
                    alt={item.name}
                  />
                  <CardActions style={{ justifyContent: "center", color: "black", fontWeight: "bolder" }}>
                    {item.name}
                  </CardActions>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>


  );


}
