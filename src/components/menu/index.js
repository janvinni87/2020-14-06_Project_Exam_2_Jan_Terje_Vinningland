/* eslint react/jsx-indent: 0 */

import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import settings from '../../settings.json';

const useStyles = makeStyles(theme => ({
  linkdefault: {
    color: '#fff',
    fontSize: '20px',
    padding: '0 12px',
    textDecoration: 'none',
    textTransform: 'uppercase',
    '&:hover': {
      textDecoration: 'underline',
      textUnderlinePosition: 'under',
    },
    '&.current': {
      textDecoration: 'underline',
      textUnderlinePosition: 'under',
    },
  },
  linklanding: {
    color: '#fff',
    fontSize: '24px',
    padding: '32px 12px',
    textDecoration: 'none',
    textTransform: 'uppercase',
    '&:hover': {
      textDecoration: 'underline',
      textUnderlinePosition: 'under',
    },
  },
  navigation: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    maxWidth: '1000px',
    margin: '0 auto',
  },
  logo: {
    padding: '12px 0',
  },
  social: {
    position: 'absolute',
    top: '28px',
    right: '20px',
  },
  socialItem: {
    margin: '4px',
  },
  spacer: {
    display: 'block',
    width: '100px',
    height: '20px',
  }
}));

const Menu = ({ type = 'default' }) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.navigation}>
        <NavLink className={classes[`link${type}`]} to='/about' activeClassName='current'>About</NavLink>
        <NavLink className={classes[`link${type}`]} to='/gallery' activeClassName='current'>Gallery</NavLink>

        {type !== 'landing'
          ? <NavLink className={classes.logo} to='/' activeClassName='current'>
              <img width={300} src='./img/logo.png' alt='logo' />
            </NavLink>
          : <div className={classes.spacer} />}

        <NavLink className={classes[`link${type}`]} to='/clients' activeClassName='current'>Clients</NavLink>
        <NavLink className={classes[`link${type}`]} to='/contact' activeClassName='current'>Contact</NavLink>
      </div>
      <div className={classes.social}>
        <span className={classes.socialItem}>
          <a target='_blank' rel='noopener noreferrer' href={settings.instagram}>
            <img height='32' width='32' src='./img/instagram.png' alt='instagram' />
          </a>
        </span>
      </div>
    </>
  );
};

Menu.propTypes = {
  type: PropTypes.string,
};

export default Menu;

export { Menu };
