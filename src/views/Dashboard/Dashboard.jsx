import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Tasks from "components/Tasks/Tasks.jsx";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
import Danger from "components/Typography/Danger.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import { bugs, website, server } from "variables/general.jsx";

import {
  airlines,
  flights_for_each_airline,
  origin_flights,
  destination_flights
} from "variables/charts.jsx";

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

class Dashboard extends React.Component {
  state = {
    value: 0
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={6} md={4}>
            <Card>
              <CardHeader color="info" stats icon>
                <CardIcon color="info">
                  <Icon>flight</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>Top Five Airlines in U.S domestic flights from 1996 to 2018</p>
              </CardHeader>
              <CardBody>
              <ul>
                  <li>Southwest</li> 
                  <li>Delta</li>
                  <li>American Airlines</li>
                  <li>US Airway</li>
                  <li>United Airlines</li>
                </ul>  
              </CardBody>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Danger>
                    <Warning />
                  </Danger>
                  <a href="https://en.wikipedia.org/wiki/US_Airways#Final_years_and_ceasing_operations" onClick={e => e.Default()}>
                  In February 2013, American Airlines and US Airways announced plans to merge, creating the largest airline in the world.
                  </a>
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={4}>
            <Card>
              <CardHeader color="info" stats icon>
                <CardIcon color="info">
                <Icon>flight_takeoff</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>Top Five Origins in U.S domestic flights from 1996 to 2018</p>
              </CardHeader>
              <CardBody>
                <Table
                  tableHead={["Origin", "Numbers of flights that has at least 10 passengers daily"]}
                  tableData={[
                    ["Atlanta", "5088"],
                    ["Chicago", "4957"],
                    ["Dallas/Fort Worth", "4425"],
                    ["Boston", "4357"],
                    ["Denver", "3477"]
                  ]}
                />
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={4}>
            <Card>
              <CardHeader color="info" stats icon>
                <CardIcon color="info">
                  <Icon>flight_land</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>Top Five Destinations in U.S domestic flights from 1996 to 2018</p>
              </CardHeader>
              <CardBody>
              <Table
                tableHead={["Destination", "Numbers of flights that has at least 10 passengers daily"]}
                tableData={[
                  ["Washington DC", "6051"],
                  ["San Francisco", "4124"],
                  ["Tampa Florida", "3965"],
                  ["New York City", "3804"],
                  ["Orlando Florida", "3498"]
                ]}
                />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card chart>
              <CardHeader color="success">
                <ChartistGraph
                  className="ct-chart"
                  data={airlines.data}
                  type="Line"
                  options={airlines.options}
                  listener={airlines.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Numbers of Airlines for U.S domestic flights</h4>
                <p className={classes.cardCategory}>
                  <span className={classes.successText}>
                  </span>{" "}
                  There were 30 airline companies operating U.S domestic flights in 1996. The numbers of airline companies operating U.S domestic flights dropped to 10 in 2016. And the number remains till 2018.
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> updated 4 minutes ago
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <Card chart>
              <CardHeader color="success">
                <ChartistGraph
                  className="ct-chart"
                  data={flights_for_each_airline.data}
                  type="Bar"
                  options={flights_for_each_airline.options}
                  responsiveOptions={flights_for_each_airline.responsiveOptions}
                  listener={flights_for_each_airline.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Numbers of domestic flights that had at least 10 passengers daily operated by each airline company from 2014 to 2018</h4>
                <p className={classes.cardCategory}>
                  White: Year 2014
                  <br></br>
                  Coral: Year 2015
                  <br></br>
                  Yellow: Year 2016
                  <br></br>
                  Brown: Year 2017
                  <br></br>
                  Black: Year 2018
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <Card chart>
              <CardHeader color="success">
                <ChartistGraph
                  className="ct-chart"
                  data={origin_flights.data}
                  type="Line"
                  options={origin_flights.options}
                  listener={origin_flights.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Numbers of flights that had at least 10 passengers daily for top five origins from 2014 to 2017</h4>
                <p className={classes.cardCategory}>
                  White: Atlanta, GA
                  <br></br>
                  Coral: Chicago, IL
                  <br></br>
                  Yellow: Dallas/Fort Worth, TX
                  <br></br>
                  Brown: Boston, MA
                  <br></br>
                  Black: Denver, CO
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <Card chart>
              <CardHeader color="success">
                <ChartistGraph
                  className="ct-chart"
                  data={destination_flights.data}
                  type="Line"
                  options={destination_flights.options}
                  listener={destination_flights.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Numbers of flights that had at least 10 passengers daily for top five destinations from 2014 to 2017</h4>
                <p className={classes.cardCategory}>
                  White: Washington, DC
                  <br></br>
                  Coral: San Francisco, CA
                  <br></br>
                  Yellow: Tampa, FL
                  <br></br>
                  Brown: New York City, NY
                  <br></br>
                  Black: Orlando, FL
                </p>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
       
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
