import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import doris from "assets/img/faces/doris.jpeg";
import polly from "assets/img/faces/polly.jpeg";
import zoe from "assets/img/faces/zoe.jpeg";


const styles = {
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

function UserProfile(props) {
  const { classes } = props;
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <Card profile>
            <CardAvatar profile>
              <a href="https://www.linkedin.com/in/dorispira/" onClick={e => e.Default()}>
                <img src={doris} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h4 className={classes.cardTitle}>Doris Pira</h4>
              <p className={classes.description}>
              Extremely results driven Analyst, effective in generating key insights and identifying new opportunities. Experienced in using multiple ad serving platforms, Jira, Charles, Confluence, and various tools such SQL, Python, and Tableau to exceed performance benchmarks.
          
              </p>
              <Button color="primary" round href="https://github.com/dorispira" onClick={e => e.Default()}>
                Follow Me On Github
              </Button>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card profile>
            <CardAvatar profile>
              <a href="https://www.linkedin.com/in/polly-tam-736ba12b/" onClick={e => e.Default()}>
                <img src={polly} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h4 className={classes.cardTitle}>Polly Tam</h4>
              <p className={classes.description}>
              Detail Oriented, with strong investigative and problem solving skills.
              Excellent time management and organizational skills.
              Excellent verbal and written communication skills.
              Ability to learn quickly and take on new responsibilities.
              Dedication to building a career in the Marketing/Business field.
              </p>
              <Button color="primary" round href="https://github.com/pollytam" onClick={e => e.Default()}>
                Follow Me On Github
              </Button>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card profile>
            <CardAvatar profile>
              <a href="https://www.linkedin.com/in/zhuoyi-zou-a67b7415a/" onClick={e => e.Default()}>
                <img src={zoe} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h4 className={classes.cardTitle}>Zhuoyi Zou</h4>
              <p className={classes.description}>
              Experienced over 2 years in data analysis in course projects at the UC Berkeley. Built predictive models in Python and R, for reality datasets with the knowledge of machine learning, linear regression and time series. Growing expert in Excel VBA and Python, beginning to learn JavaScript. 
              </p>
              <Button color="primary" round href="https://github.com/ZhuoyiZou" onClick={e => e.Default()}>
                Follow Me On Github
              </Button>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default withStyles(styles)(UserProfile);
