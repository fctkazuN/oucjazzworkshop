import React, { useEffect } from "react";
import { useLocation, useHistory, Route, Switch } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Layout from "./components/Layout";
import HomePage from "./pages/Home";
import MemberPage from "./pages/member";
import SchedulePage from "./pages/Schedule";
import ContactPage from "./pages/contact";
import LinkPage from "./pages/link";
import { navItems } from "./assets/constants/pageNavigations";
import { connect } from "react-redux";
import { RootState } from "./state/store";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";

const App: React.FC<Props> = ({ backdrop }) => {
  const history = useHistory();
  const location = useLocation();
  const sm = useMediaQuery("(min-width:600px)");

  useEffect(() => {
    if (location && !navItems.some((item) => item.slug === location.pathname)) {
      alert("存在しないページです");
      history.push("/");
    }
  }, [location, history]);

  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          <HomePage sm={sm} />
        </Route>
        <Route exact path="/member">
          <MemberPage />
        </Route>
        <Route exact path="/schedule">
          <SchedulePage sm={sm} />
        </Route>
        <Route exact path="/contact">
          <ContactPage />
        </Route>
        <Route exact path="/link">
          <LinkPage />
        </Route>
      </Switch>
      <Backdrop
        open={backdrop}
        style={{
          zIndex: 1701,
          color: "#fff",
        }}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </Layout>
  );
};

type Props = {
  backdrop: boolean;
};

const mapStateProps = (state: RootState) => ({
  backdrop: state.backdrop,
});

export default connect(mapStateProps, {})(App);
