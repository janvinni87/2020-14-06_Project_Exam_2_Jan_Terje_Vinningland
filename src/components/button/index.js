import React from 'react';
import PropTypes from 'prop-types';
import { Button as ButtonMUI } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    margin: '0 12px',
    color: '#fff',
    background: '#000',
    border: '1px solid #fff',
    '&:hover': {
      background: '#fff',
      color: '#000',
    },
    borderRadius: '0',
  },
}));

const Button = ({ text = '', link = '', type = '' }) => {
  const classes = useStyles();

  return (
    <>
      {link !== '' ? (
        <NavLink to={link}>
          <ButtonMUI type={type} className={classes.root} variant='contained'>{text}</ButtonMUI>
        </NavLink>
      ) : (
        <ButtonMUI type={type} className={classes.root} variant='contained'>{text}</ButtonMUI>
      )}
    </>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string,
  type: PropTypes.string,
};

export default Button;

export { Button };
