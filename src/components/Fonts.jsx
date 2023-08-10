import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./Styles.css";

const Fonts = () => {
  const cardData = [
    {
      title: "Card 1",
      imageUrl: "https://via.placeholder.com/300",
      cardText: "This is the text for card 1.",
    },
    {
      title: "Card 2",
      imageUrl: "https://via.placeholder.com/300",
      cardText: "This is the text for card 2.",
    },
    {
      title: "Card 2",
      imageUrl: "https://via.placeholder.com/300",
      cardText: "This is the text for card 2.",
    },
    {
      title: "Card 2",
      imageUrl: "https://via.placeholder.com/300",
      cardText: "This is the text for card 2.",
    },
    {
      title: "Card 2",
      imageUrl: "https://via.placeholder.com/300",
      cardText: "This is the text for card 2.",
    },
    {
      title: "Card 2",
      imageUrl: "https://via.placeholder.com/300",
      cardText: "This is the text for card 2.",
    },
  ];

  return (
    <>
      <div className="card-container">
        {cardData.map((card, index) => (
          <Card key={index} sx={{ maxWidth: 345, margin: "16px" }}>
            <CardMedia
              component="img"
              height="140"
              image={card.imageUrl}
              alt="Card Image"
            />
            <CardContent>
              <Typography variant="h6" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.cardText}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Fonts;
