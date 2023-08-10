import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import './Colors.css';

const Colors = () => {

  const cardData = [
    {
      title: "Coolors ",
      imageUrl: './colors.png',
      cardText: "The super fast color pallet generator",
      cardLink: "https://coolors.co/",
    },
    {
      title: "Adobe",
      imageUrl: "./background.png",
      cardText: "Generate stunning palettes with Adobe's Color Wheel",
      cardLink: "https://color.adobe.com/create/color-wheel",
    },
    {
      title: "Canva",
      imageUrl: "./color3.png",
      cardText: "The easiest place to get colors from your photos",
      cardLink: "https://www.canva.com/colors/color-palette-generator/",
    },
    {
      title: "Mycolor.space",
      imageUrl: "./color4.png",
      cardText: "Generate nice Color Palettes",
      cardLink: "https://mycolor.space/",
    },
    {
      title: "Colormind",
      imageUrl: "color5.png",
      cardText: "Applying a color palette is an interpretive art. This page might give you some ideas.",
      cardLink: "http://colormind.io/",
    },
    {
      title: "htmlcolorcodes",
      imageUrl: "color6.png",
      cardText: "Get HTML color codes, Hex color codes, RGB and HSL values with our color picker, color chart and HTML color names. Let's go!",
      cardLink: "https://htmlcolorcodes.com/",
    },

  ];

  return (
    <>
    <div className="card-container">
      {cardData.map((card, index) => (
        <Card key={index} sx={{ maxWidth: 345, minWidth: 400, margin: '16px' }}>
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
            <Typography variant="body2" color="text.secondary">
            <a href={card.cardLink} target="_blank">Visit website</a> 
            </Typography>
         
          </CardContent>
        </Card>
      ))}
    </div>
    </>
  );
      }

export default Colors;
