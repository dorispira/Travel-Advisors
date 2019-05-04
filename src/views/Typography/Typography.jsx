import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Quote from "components/Typography/Quote.jsx";
import Muted from "components/Typography/Muted.jsx";
import Primary from "components/Typography/Primary.jsx";
import Info from "components/Typography/Info.jsx";
import Success from "components/Typography/Success.jsx";
import Warning from "components/Typography/Warning.jsx";
import Danger from "components/Typography/Danger.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import ChartistGraph from "react-chartist";

import {
  avg_flight_fare
} from "variables/charts.jsx";

const style = {
  typo: {
    paddingLeft: "25%",
    marginBottom: "40px",
    position: "relative"
  },
  note: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    bottom: "10px",
    color: "#c0c1c2",
    display: "block",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "13px",
    left: "0",
    marginLeft: "20px",
    position: "absolute",
    width: "260px"
  },
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};
function TypographyPage(props) {
  const { classes } = props;
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
    <Card chart>
      <CardHeader color="primary">
        <h4 className={classes.cardTitleWhite}>The average flight fare for each quater from Year 2014 to Year 2017</h4>
        <p className={classes.cardCategoryWhite}>
          Departured from San Francisco
        </p>
      <ChartistGraph
                  className="ct-chart"
                  data={avg_flight_fare.data}
                  labels={avg_flight_fare.labels}
                  type="Line"
                  options={avg_flight_fare.options}
                  listener={avg_flight_fare.animation}
                />
      </CardHeader>
      <CardBody>
                <p className={classes.cardCategory}>
                  White: Tampa, FL (Metropolitan Area)
                  <br></br>
                  Coral: Washington, DC (Metropolitan Area)
                  <br></br>
                  Yellow: Spokane, WA
                  <br></br>
                  Brown: Seattle, WA
                  <br></br>
                  Black: St. Louis, MO
                  <br></br>
                  Green: Tucson, AZ
                </p>
              </CardBody>
    </Card>
    </GridItem>
    </GridContainer>
  );
}

export default withStyles(style)(TypographyPage);
