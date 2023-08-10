import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./Styles.css";

const Fonts = () => {
  const cardData = [
    {
      title: "1001 freefonts",
      imageUrl: "./font1.png",
      cardText: "The Ultimate Font Download",
      cardLink: "https://www.1001freefonts.com/",
    },
    {
      title: "Font space",
      imageUrl: "./font2.png",
      cardText: "The top free fonts of 2023",
      cardLink: "https://www.fontspace.com/popular/fonts",
    },
    {
      title: "Dafont",
      imageUrl: "./font3.png",
      cardText: "Fonts from A-Z",
      cardLink: "https://www.dafont.com/",
    },
    {
      title: "Creative fabrica",
      imageUrl: "./font4.png",
      cardText: "We bring the best possible tools for improving your creativity and productivity",
      cardLink: "https://www.creativefabrica.com/",
    },
    {
      title: "Befonts",
      imageUrl: "./font5.png",
      cardText: "Free Fonts are here! High quality design resources for free",
      cardLink: "https://befonts.com/",
    },
    {
      title: "Font bundles",
      imageUrl: "font6.png",
      cardText: "Fontbundles.net offer exclusive deals on the highest quality premium and free fonts from independent designers",
      cardLink: "https://fontbundles.net/free-fonts",
    },

  ];

  return (
    <>
      <div className="card-container">
        {cardData.map((card, index) => (
          <Card id="card_hover" key={index} sx={{ maxWidth: 345, minWidth: 350, margin: "16px" }}>
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
};

export default Fonts;
