import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "../Customs/gatsbyLink";

import MainNav from "./MainNav";
import SwitchThemeMode from "./SwitchThemeMode";
import { AppBar, Toolbar } from "@material-ui/core";

interface Props {
  siteTitle: string;
}

/**
 * Header component
 *
 * @param {Props} props
 */
const Header: React.FC<Props> = ({ siteTitle }) => (
  <div id="Header">
    <AppBar position="static" color="secondary">
      <Toolbar>
        <Link to="/">
          <Typography variant="h4">{siteTitle}</Typography>
        </Link>
        <MainNav />
        {/* <SwitchThemeMode /> */}
      </Toolbar>
    </AppBar>
  </div>
);

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
