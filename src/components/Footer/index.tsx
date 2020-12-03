import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { useLocation } from "react-router";
import { Follow } from "react-twitter-widgets";

const useStyles = makeStyles(() => ({
  vertical: {
    display: "flex",
    flexDirection: "column",
  },
}));

/**
 * Footer component
 */
const Footer: React.FC = () => {
  const classes = useStyles();
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const content = document.getElementById("content") as HTMLElement;
    if (content.scrollHeight < window.innerHeight * 0.9) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  }, [location]);

  return (
    <Toolbar
      id="Footer"
      disableGutters
      className={classes.vertical}
      style={{ position: isSticky ? "absolute" : "static", bottom: 0, left: 0 }}
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
