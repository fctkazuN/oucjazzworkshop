import React from "react";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  horizontal: {
    display: "flex",
    flexDirection: "row",
    alignItems: "row",
  },
  link: {
    textDecoration: "none",
  },
  menuButton: {
    width: theme.spacing(12),
    margin: theme.spacing(0, 0.5),
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

type NavItem = {
  title: string;
  slug: string;
};

export const navItems: NavItem[] = [
  {
    title: "Home",
    slug: "/",
  },
  {
    title: "Member",
    slug: "/member/",
  },
  {
    title: "Live",
    slug: "/live/",
  },
  {
    title: "Contact",
    slug: "/contact/",
  },
  {
    title: "Link",
    slug: "/link/",
  },
];

const MainNav: React.FC = () => {
  const classes = useStyles();
  const location = useLocation();
  console.log(location);

  return (
    <div id="menu" className={classes.horizontal}>
      {navItems.map((item) => (
        <Link to={item.slug} key={item.title} className={classes.link}>
          <Button
            variant="contained"
            disableElevation
            color={item.slug === location.pathname ? "primary" : "secondary"}
            className={clsx(classes.menuButton, {
              [classes.hoverPrimaryMain]: item.slug === location.pathname,
              [classes.menuButtonHoverDark]: item.slug !== location.pathname,
            })}
          >
            {item.title}
          </Button>
        </Link>
      ))}
    </div>
  );
};

export default MainNav;
