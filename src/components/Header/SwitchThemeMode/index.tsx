import React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../../state/store';
import { toggleThemeMode, ThemeType } from '../../../state/slices/colorThemeSlice';
import Icon from 'utils/Icon';
import IconButton from '@material-ui/core/IconButton'

const SwitchThemeMode: React.FC<Props> = (props) => {
  return (
    <IconButton onClick={props.toggleThemeMode()}>
      <Icon icon={props.themeMode === 'light' ? 'moon' : 'sun'} />
    </IconButton>
  );
};

type Props = {
  themeMode: ThemeType;
  toggleThemeMode: Function;
}

const mapStateProps = (state: RootState) => ({
  themeMode: state.colorTheme.themeMode
})

const mapDispatchToProps = {
  toggleThemeMode
}

export default connect(mapStateProps, mapDispatchToProps)(SwitchThemeMode);
