import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Header from "components/Header";
import Footer from "components/Footer";
import { ThemeProvider } from "@material-ui/core/styles";

import { connect } from "react-redux";
import { RootState } from "state/store";
import * as colorTheme from "assets/styles/theme";
import { ThemeType } from "../../state/slices/colorThemeSlice";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
  },
}));

type Props = {
  themeMode: ThemeType;
  children: React.ReactNode;
};

/**
 * Layout component
 *
 * @param {Props} props
 */
const Layout: React.FC<Props> = ({ themeMode, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const classes = useStyles();

  return (
    <ThemeProvider theme={colorTheme[themeMode]}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className={classes.root}>{children}</div>
      <Footer />
    </ThemeProvider>
  );
};

const mapStateProps = (state: RootState) => ({
  themeMode: state.colorTheme.themeMode,
});

export default connect(mapStateProps, {})(Layout);
