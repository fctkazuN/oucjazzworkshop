import React, { useEffect } from "react";
import { useLocation, useHistory, Route, Switch } from "react-router-dom";
import { isMobile } from "react-device-detect";
import Layout from "./components/Layout";
import HomePage from "./pages/Home";
import MemberPage from "./pages/member";
import SchedulePage from "./pages/Schedule";
import ContactPage from "./pages/contact";
import LinkPage from "./pages/link";
import { NavItem, navItems } from "./assets/constants/pageNavigations";
import { connect } from "react-redux";
import { RootState } from "./state/store";
import InheritExecutives from "./pages/inheritExecutives";
// import Backdrop from "@material-ui/core/Backdrop";
// import CircularProgress from "@material-ui/core/CircularProgress";

const allPages: NavItem[] = [
  ...navItems,
  {
    title: "InheritExecutives",
    slug: "/inherit_executives/",
  },
];

const App: React.FC<Props> = ({ backdrop }) => {
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if (location && !allPages.some((item) => item.slug === location.pathname)) {
      alert("存在しないページです");
      history.push("/");
    }
  }, [location, history]);

  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          <HomePage sm={isMobile} />
        </Route>
        <Route exact path="/member">
          <MemberPage />
        </Route>
        <Route exact path="/schedule">
          <SchedulePage sm={isMobile} />
        </Route>
        <Route exact path="/contact">
          <ContactPage />
        </Route>
        <Route exact path="/link">
          <LinkPage />
        </Route>
        <Route exact path="/inherit_executives/">
          <InheritExecutives />
        </Route>
      </Switch>
      {/* <Backdrop
        open={backdrop}
        style={{
          zIndex: 1701,
          color: "#fff",
        }}
      >
        <CircularProgress color="inherit" />
      </Backdrop> */}
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
