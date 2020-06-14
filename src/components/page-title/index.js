import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center',
    padding: '40px 0 60px',
  },
  title: {
    textTransform: 'uppercase',
  },
}));

const PageTitle = ({ title = '', variant = 'h1' }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant={variant}>{title}</Typography>
    </div>
  );
};

PageTitle.propTypes = {
  title: PropTypes.string,
  variant: PropTypes.string,
};

export default PageTitle;

export { PageTitle };
