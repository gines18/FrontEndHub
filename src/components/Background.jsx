import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import './Styles.css';

const Background = () => {

  const cardData = [
    {
      title: "Bg generator",
      imageUrl: "./color7.png",
      cardText: "Image Templates of Colorful Style",
      cardLink: "https://bggenerator.com/"
    },
    {
      title: "Cool background",
      imageUrl: "./background2.png",
      cardText: "As a sample of a few options available, the following list of images are ready to use for any application",
      cardLink: "https://coolbackgrounds.io/"
    },
    {
      title: "Super designer",
      imageUrl: "background3.png",
      cardText: "A collection of free design tools to create unique backgrounds, patterns, shapes, images, and more with just a few clicks",
      cardLink: "https://superdesigner.co/"
    },
    {
      title: "BG Jar",
      imageUrl: "./background4.png",
      cardText: "Free svg background generator for your websites, blogs and app",
      cardLink: "https://bgjar.com/"
    },
    {
      title: "Haikei",
      imageUrl: "./background5.png",
      cardText: "Haikei is built around generators. Each generator has a unique set of properties and features to help you discover and create unlimited design assets.",
      cardLink: "https://https://haikei.app/generators/.com/"
    },
    {
      title: "SVG backgrounds",
      imageUrl: "./background6.png",
      cardText: "Create stunning websites easily with fullscreen graphics under 5KB",
      cardLink: "https://www.svgbackgrounds.com/"
    },


  ];

  return (
    <>
    <div className="card-container">
      {cardData.map((card, index) => (
        <Card key={index} sx={{ maxWidth: 345, margin: '16px' }}>
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

export default Background;
