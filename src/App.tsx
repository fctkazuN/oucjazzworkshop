import React, { useEffect } from "react";
import { useLocation, useHistory, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Member from "./pages/member";
import ScheduleSm from "./pages/scheduleSm";
import ScheduleLg from "./pages/scheduleLg";
import Contact from "./pages/contact";
import Link from "./pages/link";
import { navItems } from "./assets/constants/pageNavigations";
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery";

const App = () => {
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
      <Route exact path="/">
        <Home sm={sm} />
      </Route>
      <Route exact path="/member">
        <Member />
      </Route>
      <Route exact path="/schedule">
        {sm ? <ScheduleLg /> : <ScheduleSm />}
      </Route>
      <Route exact path="/contact">
        <Contact />
      </Route>
      <Route exact path="/link">
        <Link />
      </Route>
    </Layout>
  );
};

export default App;
