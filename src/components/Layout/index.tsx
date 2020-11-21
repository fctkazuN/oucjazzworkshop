import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";

import { connect } from "react-redux";
import { RootState } from "../../state/store";
import { ThemeMode } from "../../state/slices/colorThemeSlice";
import * as colorTheme from "../../assets/styles/theme";

import PageComponent from "./pageComponent";

const Layout: React.FC<Props> = ({ children, themeMode }) => {
  return (
    <ThemeProvider theme={colorTheme[themeMode]}>
      <PageComponent children={children} />
    </ThemeProvider>
  );
};

type Props = {
  children: React.ReactNode;
  themeMode: ThemeMode;
};

const mapStateProps = (state: RootState) => ({
  themeMode: state.colorTheme.themeMode,
});

export default connect(mapStateProps, {})(Layout);
