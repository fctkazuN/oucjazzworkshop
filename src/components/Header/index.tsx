import React from "react";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

import MainNav from "./MainNav";
// import SwitchThemeMode from "./SwitchThemeMode";
import { AppBar, Toolbar } from "@material-ui/core";

interface Props {
  siteTitle: string;
}

/**
 * Header component
 *
 * @param {Props} props
 */
const Header: React.FC<Props> = ({ siteTitle }) => {
  return (
    <div id="Header">
      <AppBar position="fixed" color="secondary">
        <Toolbar disableGutters>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography variant="h4">{siteTitle}</Typography>
          </Link>
          <MainNav />
          {/* <SwitchThemeMode /> */}
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
