import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./Styles.css";
import { useMediaQuery } from '@mui/material';
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";

const Cards = ({ cardData }) => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  return (
    <>
      <div className="card-container">
        {cardData.map((card, index) => (
          <Card
            key={index}
            className="card-width"
            id="card_hover"
            sx={{
              maxWidth: isSmallScreen ? 250 : 345,
              minWidth: isSmallScreen ? 250 : 350,
              margin: "16px",
            }}
          >
            <CardMedia
            className="round-shadow-img"
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
                {Array.isArray(card.cardText) ? (

                <ul>
                  {card.cardText.map((item, index) => (
                  <li key={index}>{item}</li>
                  ))}
                </ul>
                ) : (
                  card.cardText
                )}

              </Typography>
              <div className="arrow">
              <Typography variant="body2" color="text.secondary">
                <a href={card.cardLink} target="_blank">
                  <ExpandCircleDownIcon
                    style={{ width: "30px", rotate: "-140deg" }}
                  />
                </a>
              </Typography>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Cards;
