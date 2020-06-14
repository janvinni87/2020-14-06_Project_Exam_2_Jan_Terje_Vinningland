import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Hamburger from '../../components/hamburger';
import Menu from '../../components/menu';

const useStyles = makeStyles(theme => ({
  rootdefault: {
    background: '#000',
    padding: '0',
    width: '100%',
    textAlign: 'center',
  },
  rootlanding: {
    position: 'absolute',
    width: '100%',
    textAlign: 'center',
    top: '0px',
  },
}));

const Header = ({ type = 'default' }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <header className={classes[`root${type}`]}>
      {matches
        ? <Hamburger type={type} />
        : <Menu type={type} />}
    </header>
  );
};

Header.propTypes = {
  type: PropTypes.string,
};

export default Header;

export { Header };
