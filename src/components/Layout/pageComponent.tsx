import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import Header from "../Header";
import Footer from "../Footer";
// eslint-disable-next-line
import backgroundImage from "../../assets/images/backgroundImage.png";

const useStyles = makeStyles((theme) => ({
  page: {
    // backgroundColor: theme.palette.background.default,
    minHeight: "100vh",
    height: "100%",
    backgroundColor: theme.palette.background.default,
  },
  backGroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    minWidth: "100%",
    width: "100%",
    minHeight: "100%",
    height: "100%",
    zIndex: -100,
    backgroundColor: theme.palette.background.default,
    // backgroundImage: `url(${backgroundImage})`,
    // backgroundSize: "auto",
    backgroundAttachment: "fixed",
    backgroundRepeat: "repeat",
    // backgroundPosition: "top left",
  },
}));

const PageComponent: React.FC<Props> = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.page}>
      {/* <div
        // alt="backgroundImage"
        // src={BackgroundImage}
        className={classes.backGroundImage}
      /> */}
      <Header />
      <Container id="content" maxWidth="md">
        <div>{children}</div>
      </Container>
      <Footer />
    </div>
  );
};

type Props = {
  children: React.ReactNode;
};

export default PageComponent;
