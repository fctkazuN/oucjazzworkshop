import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { navItems } from "../../../assets/constants/pageNavigations";

const useStyles = makeStyles((theme) => ({
  horizontal: {
    display: "flex",
    flexDirection: "row",
    alignItems: "row",
  },
  divider: {
    backgroundColor: theme.palette.getContrastText(
      theme.palette.background.paper
    ),
    margin: theme.spacing(1, 0),
  },
  menuButton: {
    width: theme.spacing(15),
    margin: theme.spacing(1, 0),
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

const MainNavSm: React.FC<Props> = ({ setOpenDrawer }) => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  const handleNavButtonClick = (slug: string) => () => {
    history.push(slug);
    setOpenDrawer(false);
    window.scroll(0, 0);
  };

  return (
    <List>
      <div id="menu">
        <Typography color="textSecondary" align="center">
          Page Menu
        </Typography>
        <Divider className={classes.divider} />
        {navItems.map((item) => (
          <Button
            variant="contained"
            size="large"
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
    </List>
  );
};

type Props = {
  setOpenDrawer: React.Dispatch<boolean>;
};

export default MainNavSm;
