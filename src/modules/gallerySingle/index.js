import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Image from 'material-ui-image';
import { NavLink } from 'react-router-dom';
import { SRLWrapper } from 'simple-react-lightbox';

import Header from '../../modules/header';
import Footer from '../../modules/footer';

import galleries from '../../galleries.json';

const useStyles = makeStyles(theme => ({
  root: {
  },
  inner: {
    margin: '0 auto',
    maxWidth: '1000px',
    padding: '40px 20px 60px',
    textAlign: 'center',
  },
  gallery: {
    flexGrow: 1,
    marginBottom: '40px',
  },
  title1: {
    marginBottom: '40px',
  },
  title2: {
    marginBottom: '12px',
  },
  backLink: {
    textTransform: 'uppercase',
    color: '#fff',
    textDecoration: 'none',
  },
}));

const GallerySingle = ({ match, location }) => {
  const { params: { slug } } = match;
  const classes = useStyles();

  const title = galleries[slug].title || '';
  const client = galleries[slug].client || '';
  const images = galleries[slug].images || [];

  const GalleryList = () => {
    return images.map((value, index) => (
      <Grid key={index} item xs={2}>
        <Image
          src={`./img/gallery/${slug}/${value}`}
          aspectRatio='(1/1)'
        />
      </Grid>
    ));
  };

  return (
    <>
      <Header />
      <div className={classes.gallery}>
        <div className={classes.inner}>

          <Typography className={classes.title1} variant='h2'>{title}</Typography>

          <div className={classes.gallery}>
            <SRLWrapper>
              <Grid container spacing={1}>
                <Grid container item xs={12} spacing={3}>
                  <GalleryList />
                </Grid>
              </Grid>
            </SRLWrapper>
          </div>

          <Typography className={classes.title2} variant='h3'>{client}</Typography>
          <Typography variant='body1'>
            <NavLink className={classes.backLink} to='/gallery'>Back to gallery</NavLink>
          </Typography>
        </div>
      </div>
      <Footer />
    </>
  );
};

GallerySingle.propTypes = {
  match: PropTypes.string,
  location: PropTypes.string,
};

export default GallerySingle;

export { GallerySingle };
