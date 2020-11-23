import React, { useEffect, useState } from "react";
import Toolbar from "@material-ui/core/Toolbar";
import { Typography } from "@material-ui/core";
import { useLocation } from "react-router";

/**
 * Footer component
 */
const Footer = () => {
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
      style={{ position: isSticky ? "absolute" : "static", bottom: 0, left: 0 }}
    >
      <Typography variant="caption" align="left" color="textSecondary">
        © 2020 Otaru University of Commerce Jazz Workshop.
      </Typography>
      <div id="twitter-follow-button?" />
      <div id="analytics" />
    </Toolbar>
  );
};

export default Footer;
