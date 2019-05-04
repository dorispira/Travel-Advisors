import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import ChartistGraph from "react-chartist";
import {
  avg_flight_fare
} from "variables/charts.jsx";


const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

function TableList(props) {
  const { classes } = props;
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Departure From San Francisco</h4>
            <p className={classes.cardCategoryWhite}>
              The average flight fare for each quater from Year 2014 to Year 2015. 
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Destinations", "Year 2014 Q1", "Year 2014 Q2", "Year 2014 Q3", "Year 2014 Q4",
            "Year 2015 Q1", "Year 2015 Q2", "Year 2015 Q3", "Year 2015 Q4"]}
              tableData={[
                ["Tampa, FL (Metropolitan Area)", "298.01", "325.80", "322.40", "352.44", '335.89', '330.12', '322.77', '319.71'],
                ["Washington, DC (Metropolitan Area)", '332.34', '336.69', '336.03', '342.84', '361.22', '351.25', '349.77', '348.56'],
                ["Spokane, WA", '200.18', '206.57', '213.9', '198.93', '178.4', '184.84', '202.31', '187.21'],
                ["Seattle, WA", '154.25', '152.05', '148.27', '143.25', '143.79', '150.09', '162.51', '156.64'],
                ["St. Louis, MO", '264.66', '284.78', '258.98', '277.65', '287.64', '274.26', '268.58', '259.18'],
                ["Tucson, AZ", '230.33', '226.6', '224.89', '231.37', '226.27', '230.38', '247.59', '225.72']
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Departure From San Francisco</h4>
            <p className={classes.cardCategoryWhite}>
              The average flight fare for each quater from Year 2016 to Year 2017. 
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Destinations", "Year 2016 Q1", "Year 2016 Q2", "Year 2016 Q3", "Year 2016 Q4",
            "Year 2017 Q1", "Year 2017 Q2", "Year 2017 Q3"]}
              tableData={[
                ["Tampa, FL (Metropolitan Area)", '314.3', '299.19', '316.02', '321.72', '320.25', '305.98', '297.61'],
                ["Washington, DC (Metropolitan Area)", '366.95', '355.77', '351.04', '362.27', '386.02', '370.09', '340.79'],
                ["Spokane, WA", '191.59', '180.75', '191.38', '193.76', '200.42', '208.38', '202.8'],
                ["Seattle, WA", '160.74', '153.07', '155.91', '154.32', '160.08', '168.14', '156.02'],
                ["St. Louis, MO", '280.85', '260.15', '255.5', '248.28', '270.77', '272.28', '264.94'],
                ["Tucson, AZ", '236.56', '237.28', '226.82', '212.14', '220.1', '209.34', '197.77']
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
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

export default withStyles(styles)(TableList);
