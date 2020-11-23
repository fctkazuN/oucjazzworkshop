import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { navItems } from "../../../assets/constants/pageNavigations";

const useStyles = makeStyles((theme) => ({
  horizontal: {
    display: "flex",
    flexDirection: "row",
    alignItems: "row",
  },
  menuButton: {
    width: theme.spacing(11),
    marginRight: theme.spacing(0.5),
    textTransform: "none",
    fontWeight: 700,
  },
  hoverPrimaryMain: {
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
  },
  menuButtonHoverDark: {
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));

const MainNavLg: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  const handleNavButtonClick = (slug: string) => () => {
    history.push(slug);
  };

  return (
    <div id="menu" className={classes.horizontal}>
      {navItems.map((item) => (
        <Button
          variant="contained"
          disableElevation
          color={item.slug === location.pathname ? "primary" : "secondary"}
          className={clsx(classes.menuButton, {
            [classes.hoverPrimaryMain]: item.slug === location.pathname,
            [classes.menuButtonHoverDark]: item.slug !== location.pathname,
          })}
          onClick={handleNavButtonClick(item.slug)}
        >
          {item.title}
        </Button>
      ))}
    </div>
  );
};

export default MainNavLg;
