import React, { useState } from "react";
import Link from "../../Customs/gatsbyLink";
import Button from "@material-ui/core/Button";
import { List, ListItem } from "@material-ui/core";

type NavItem = {
  title: string;
  slug: string;
};

const navItems: NavItem[] = [
  {
    title: "Home",
    slug: "/home",
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
  return (
    <div id="menu">
      <List style={{ display: "flex", flexDirection: "row", padding: 0 }}>
        {navItems.map((item) => (
          <ListItem key={item.title}>
            <Link to={item.slug}>
              <Button variant="contained" color="primary">
                {item.title}
              </Button>
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default MainNav;
