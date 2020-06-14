import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';

import Header from '../../modules/header';
import Footer from '../../modules/footer';

const useStyles = makeStyles(theme => ({
  root: {
    alignItems: 'center',
    background: "url('./img/landing.jpg')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    display: 'flex',
    minHeight: '100vh',
    justifyContent: 'center',
    width: '100%',
    textAlign: 'center',
  },
  inner: {
    margin: '0 auto',
    maxWidth: '800px',
    padding: '20px 20px 80px',
  },
  logo: {
    marginTop: '100px',
    maxWidth: '1000px',
    width: '100%',
  }
}));

const Landing = () => {
  const classes = useStyles();

  return (
    <>
      <Header type='landing' />
      <div className={classes.root}>
        <div className={classes.inner}>
          <NavLink to='/about'>
            <img className={classes.logo} src='./img/logo-full.png' alt='logo' />
          </NavLink>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Landing;

export { Landing };
