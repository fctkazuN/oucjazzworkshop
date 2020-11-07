import React from 'react';
import Typography from '@material-ui/core/Typography'
import Link from '../Customs/gatsbyLink';

import MainNav from './MainNav';
import SwitchThemeMode from './SwitchThemeMode';

interface Props {
  siteTitle: string;
}

/**
 * Header component
 *
 * @param {Props} props
 */
const Header: React.FC<Props> = ({ siteTitle }) => (
  <div id='Header'>
    <Link to="/">
      <Typography variant='h4'>{siteTitle}</Typography>
    </Link>
    <MainNav />
    <SwitchThemeMode />
  </div>
);

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
