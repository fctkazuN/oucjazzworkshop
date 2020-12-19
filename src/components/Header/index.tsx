import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import MenuIcon from "@material-ui/icons/Menu";

import MainNavLg from "./MainNav/largePage";
import MainNavSm from "./MainNav/smallPage";
// import SwitchThemeMode from "./SwitchThemeMode";

const useStyles = makeStyles((theme) => ({
  titleText: {
    color: theme.palette.getContrastText(theme.palette.background.paper),
    fontFamily: "Impact",
    textDecoration: "none",
  },
  titleLarge: {
    fontSize: 32,
    minWidth: 257,
  },
  titleMedium: {
    fontSize: 28,
    minWidth: 225,
  },
  titleSmall: {
    fontSize: 24,
    minWidth: 193,
  },
  colorPrimary: {
    color: theme.palette.primary.main,
  },
  drawer: {
    width: theme.spacing(20),
    padding: theme.spacing(2),
  },
}));

/**
 * Header component
 *
 */
const Header: React.FC = () => {
  const classes = useStyles();
  const isNotSmall = useMediaQuery("(min-width:310px)");
  const isLarge = useMediaQuery("(min-width:800px)");
  const [openDrawer, setOpenDrawer] = useState(false);

  // 画面幅縮小でdrawer閉じた後画面幅拡大で勝手に開かないように
  useEffect(() => {
    isLarge && setOpenDrawer(false);
  }, [isLarge]);

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  return (
    <div id="Header">
      <AppBar position="fixed" color="secondary">
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <Link
              to="/"
              className={clsx(classes.titleText, {
                [classes.titleLarge]: isLarge,
                [classes.titleMedium]: !isLarge && isNotSmall,
                [classes.titleSmall]: !isNotSmall,
              })}
            >
              OUC <span className={classes.colorPrimary}>Jazz</span>-Workshop
            </Link>
          </div>
          {isLarge ? (
            <div style={{ marginLeft: "28px" }}>
              <MainNavLg />
            </div>
          ) : (
            <IconButton onClick={handleDrawerOpen}>
              <MenuIcon style={{ color: "#fff" }} />
            </IconButton>
          )}
          {/* <SwitchThemeMode /> */}
        </Toolbar>
      </AppBar>
      <Toolbar />
      {!isLarge ? (
        <SwipeableDrawer
          anchor="right"
          open={openDrawer}
          onClose={handleDrawerClose}
          onOpen={handleDrawerOpen}
          PaperProps={{
            className: classes.drawer,
          }}
        >
          <MainNavSm setOpenDrawer={setOpenDrawer} />
        </SwipeableDrawer>
      ) : null}
    </div>
  );
};

export default Header;
