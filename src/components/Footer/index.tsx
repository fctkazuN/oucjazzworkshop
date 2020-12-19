import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Follow } from "react-twitter-widgets";

const useStyles = makeStyles(() => ({
  vertical: {
    display: "flex",
    flexDirection: "column",
    marginTop: "auto",
  },
}));

/**
 * Footer component
 */
const Footer: React.FC = () => {
  const classes = useStyles();

  return (
    <Toolbar
      id="Footer"
      disableGutters
      className={classes.vertical}
      // style={{ position: isSticky ? "absolute" : "static", bottom: 0, left: 0 }}
    >
      <div>
        <Follow username="ouc_jazz" options={{ lang: "ja" }} />
        <div id="analytics" />
      </div>
      <Typography variant="caption" align="left" color="textSecondary">
        © 2020 Otaru University of Commerce Jazz Workshop.
      </Typography>
      <br />
    </Toolbar>
  );
};

export default Footer;
