import React from 'react';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    background: '#373736',
    padding: '20px 0',
    textAlign: 'center',
    textTransform: 'uppercase',
    width: '100%',
  },
}));

const Footer = () => {
  const classes = useStyles();
  const year = moment().format('YYYY');

  return (
    <footer className={classes.root}>
      <Typography variant='body2'>&copy; Copyright {year} Sindre Ellingsen</Typography>
    </footer>
  );
};

export default Footer;

export { Footer };
