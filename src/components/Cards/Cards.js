import React from "react";
import classes from "./Cards.module.scss";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading...";
  }

  const renderCards = () => {
    let typesOfData = [];
    const objectWithData = { confirmed, recovered, deaths };
    for (const key in objectWithData) {
      if (typeof objectWithData[key] === "object") {
        typesOfData.push({ name: key, ...objectWithData[key], lastUpdate });
      }
    }

    return typesOfData.map((type, index) => {
      const style = classes[type.name]; // вынес в переменную, чтобы потом использовать в cx
      return (
        <Grid
          key={index}
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(classes.card, style)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              {type.name.charAt(0).toUpperCase() + type.name.substring(1)}
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={type.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(type.lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              {type.name === "confirmed"
                ? "Number of active cases of COVID-19"
                : null}
              {type.name === "recovered"
                ? "Number of recoveries from COVID-19"
                : null}
              {type.name === "deaths"
                ? "Number of deaths caused by COVID-19"
                : null}
            </Typography>
          </CardContent>
        </Grid>
      );
    });
  };

  renderCards();

  return (
    <div className={classes.container}>
      <Grid container spacing={3} justify="center">
        {renderCards()}
      </Grid>
    </div>
  );
};

export default Cards;
