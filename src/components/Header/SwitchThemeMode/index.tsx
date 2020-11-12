import React from "react";
import { connect } from "react-redux";
import { RootState } from "../../../state/store";
import {
  toggleThemeMode,
  ThemeType,
} from "../../../state/slices/colorThemeSlice";
import IconButton from "@material-ui/core/IconButton";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";

const SwitchThemeMode: React.FC<Props> = (props) => {
  return (
    <IconButton onClick={props.toggleThemeMode()}>
      {props.themeMode === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
    </IconButton>
  );
};

type Props = {
  themeMode: ThemeType;
  toggleThemeMode: Function;
};

const mapStateProps = (state: RootState) => ({
  themeMode: state.colorTheme.themeMode,
});

const mapDispatchToProps = {
  toggleThemeMode,
};

export default connect(mapStateProps, mapDispatchToProps)(SwitchThemeMode);
