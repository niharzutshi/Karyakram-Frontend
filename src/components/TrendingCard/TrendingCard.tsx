import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import "./TrendingCard.scss";

export const TrendingCard = () => {
  return (
    <Card
      square={true}
      sx={{ width: "200px", borderRadius: 1 }}
      className="trending-card__container"
    >
      <CardMedia
        component="img"
        height="90"
        image="https://i.imgur.com/n6pXXMg.png"
        alt="trending"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          className="trending-card__title"
        >
          XYZ Organization
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" className="trending-card__register-button">
          Register
        </Button>
        <Button size="small" className="trending-card__bookmark-button">
          Bookmark
        </Button>
      </CardActions>
    </Card>
  );
};
