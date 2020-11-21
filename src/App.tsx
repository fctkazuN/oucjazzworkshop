import React, { useEffect } from "react";
import { useLocation, useHistory, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/home";
import Member from "./pages/member";
import Schedule from "./pages/schedule";
import Contact from "./pages/contact";
import Link from "./pages/link";
import { navItems } from "./components/Header/MainNav";

const App = () => {
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if (location && !navItems.some((item) => item.slug === location.pathname)) {
      alert("存在しないページです");
      history.push("/");
    }
  }, [location, history]);

  return (
    <Layout>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/member">
        <Member />
      </Route>
      <Route exact path="/schedule">
        <Schedule />
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
