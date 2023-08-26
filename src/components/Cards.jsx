import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./Styles.css";

const Cards = ({cardData}) => {
 
  return (
    <>
      <div className="card-container">
        {cardData.map((card, index) => (
          <Card
            key={index}
            id="card_hover"
            sx={{ maxWidth: 345, minWidth: 350, margin: "16px" }}
          >
            <CardMedia
              component="img"
              height="140"
              src={card.imageUrl}

              alt="Card Image"
            />
            <CardContent>
              <Typography variant="h6" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.cardText}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <a href={card.cardLink} target="_blank" style={{textDecoration: "none", color: "red"}}>
                  Visit website
                </a>
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};


export default Cards;