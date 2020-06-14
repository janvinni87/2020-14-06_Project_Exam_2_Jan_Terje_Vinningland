import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { slide as Menu } from 'react-burger-menu'

import settings from '../../settings.json';

const useStyles = makeStyles(theme => ({
  logo: {
    display: 'block',
    padding: '24px 0 20px',
  },
  link: {
    color: '#fff',
    paddingBottom: '24px',
    textTransform: 'uppercase',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

const styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '20px',
    top: '30px'
  },
  bmBurgerBars: {
    background: '#fff',
    height: '15%',
  },
  bmBurgerBarsHover: {
    background: '#0a0a0a',
  },
  bmCrossButton: {
    height: '24px',
    width: '24px',
  },
  bmCross: {
    background: '#fff',
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%',
  },
  bmMenu: {
    background: '#000',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em',
  },
  bmMorphShape: {
    fill: '#373a47',
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em',
  },
  bmItem: {
    outline: 'none',
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)',
  },
};

const Hamburger = ({ type = 'default' }) => {
  const classes = useStyles();

  return (
    <>
      <Menu styles={styles}>
        <NavLink className={classes.link} to='/about'>About</NavLink>
        <NavLink className={classes.link} to='/gallery'>Gallery</NavLink>
        <NavLink className={classes.link} to='/clients'>Clients</NavLink>
        <NavLink className={classes.link} to='/contact'>Contact</NavLink>
        <a target='_blank' rel='noopener noreferrer' href={settings.instagram}>
          <img height='32' width='32' src='./img/instagram.png' alt='instagram' />
        </a>
      </Menu>

      {type !== 'landing' &&
        <NavLink className={classes.logo} to='/'>
          <img width={200} src='./img/logo.png' alt='logo' />
        </NavLink>}
    </>
  );
};

Hamburger.propTypes = {
  type: PropTypes.string,
};

export default Hamburger;

export { Hamburger };
