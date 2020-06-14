import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Image from 'material-ui-image';
import { NavLink } from 'react-router-dom';

import Header from '../../modules/header';
import Footer from '../../modules/footer';
import PageTitle from '../../components/page-title';

import content from '../../content.json';

const useStyles = makeStyles(theme => ({
  root: {
    background: "url('./img/gallery.jpg')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%',
  },
  inner: {
    margin: '0 auto',
    maxWidth: '1200px',
    padding: '20px 20px 80px',
  },
  gallery: {
    flexGrow: 1,
    margin: '0 0 60px',
  },
  text: {
    color: '#fff',
    padding: '6px 0 0',
    textTransform: 'uppercase',
  },
  spacer: {
    textAlign: 'center',
  },
  backLink: {
    textTransform: 'uppercase',
    color: '#fff',
    textDecoration: 'none',
  },
}));

const Gallery = () => {
  const classes = useStyles();
  const items = content.gallery.list || [];

  const GalleryList = () => {
    const galleries = items.map((value, index) => (

      <Grid key={index} item xs={12} sm={6} md={4}>
        <Link to={`/gallery/${value.slug}`}>
          <Image
            src={`./img/gallery/${value.slug}/${value.featured}`}
            aspectRatio='(21/9)'
          />
          <Typography className={classes.text} variant='body1'>{value.name}</Typography>
        </Link>
      </Grid>
    ));

    return galleries;
  };

  return (
    <>
      <Header />
      <div className={classes.root}>
        <div className={classes.inner}>
          <PageTitle title={content.gallery.title} />

          <Grid className={classes.gallery} container item xs={12} spacing={3}>
            <GalleryList />
          </Grid>

          <div className={classes.spacer}>
            <Typography variant='body1'>
              <NavLink className={classes.backLink} to='/about'>Back</NavLink>
            </Typography>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Gallery;

export { Gallery };
