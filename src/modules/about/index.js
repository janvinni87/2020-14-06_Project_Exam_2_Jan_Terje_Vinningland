import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Image from 'material-ui-image';

import Header from '../../modules/header';
import Footer from '../../modules/footer';
import Slider from '../../components/slider';
import Button from '../../components/button';

import content from '../../content.json';

const images = [
  '1.jpg',
  '2.jpg',
  '3.jpg',
  '4.jpg',
  '5.jpg',
  '6.jpg',
  '7.jpg',
  '8.jpg',
  '9.jpg',
  '10.jpg',
  '11.jpg',
];

const useStyles = makeStyles(theme => ({
  root: {
    background: "url('./img/home.jpg')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%',
    paddingTop: '56px',
  },
  inner: {
    margin: '0 auto',
    maxWidth: '800px',
    padding: '20px 20px 80px',
  },
  title1: {
    marginBottom: '12px',
  },
  title2: {
    marginBottom: '60px',
  },
  text1: {
    marginBottom: '12px',
  },
  text2: {
    marginBottom: '12px',
  },
  spacing1: {
    textAlign: 'center',
    padding: '40px 40px 52px',
  },
  spacing2: {
    textAlign: 'center',
    padding: '60px 12px 60px',
  },
  spacing3: {
    textAlign: 'center',
    padding: '0px 12px 52px',
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <>
      <Header />
      <Slider path='slides/' images={images} />
      <div className={classes.root}>
        <div className={classes.inner}>
          <Typography className={classes.title1} variant='h1'>{content.about.title}</Typography>
          <Typography className={classes.title2} variant='h2'>{content.about.description}</Typography>
          <Typography className={classes.text1} variant='body1'>{content.about.text1}</Typography>
          <Typography className={classes.text2} variant='body1'>{content.about.text2}</Typography>

          <div className={classes.spacing1}>
            <Button text={content.about.buttons[0].text} link={content.about.buttons[0].url} />
          </div>

          <Image
            src={content.about.image}
            aspectRatio='(21/9)'
          />

          <div className={classes.spacing2}>
            <Typography variant='body1'>{content.about.text3}</Typography>
            <Typography variant='body1'>{content.about.text4}</Typography>
          </div>

          <div className={classes.spacing3}>
            <Button text={content.about.buttons[1].text} link={content.about.buttons[1].url} />
            <Button text={content.about.buttons[2].text} link={content.about.buttons[2].url} />
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;

export { About };
