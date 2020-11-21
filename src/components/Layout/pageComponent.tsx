import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import Header from "../Header";
import Footer from "../Footer";

const useStyles = makeStyles((theme) => ({
  layout: {
    backgroundColor: theme.palette.background.default,
    minHeight: "100%",
  },
}));

const PageComponent: React.FC<Props> = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.layout}>
      <Container id="Layout" maxWidth="md">
        <Header siteTitle="OUC Jazz-Workshop" />
        <div id="content">{children}</div>
        <Footer />
      </Container>
    </div>
  );
};

type Props = {
  children: React.ReactNode;
};

export default PageComponent;
