import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Header from 'components/Header';
import Footer from 'components/Footer';
import { ThemeProvider } from '@material-ui/core/styles'

import { connect } from 'react-redux';
import { RootState } from 'state/store';
import * as colorTheme from 'assets/styles/theme';
import { ThemeType } from '../../state/slices/colorThemeSlice';

type Props = {
  themeMode: ThemeType;
  children: React.ReactNode;
}

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

  return (
    <ThemeProvider theme={colorTheme[themeMode]}>
      <Header siteTitle={data.site.siteMetadata.title} />
      {children}
      <Footer />
    </ThemeProvider>
  );
};

const mapStateProps = (state: RootState) => ({
  themeMode: state.colorTheme.themeMode
})


export default connect(mapStateProps, {})(Layout);