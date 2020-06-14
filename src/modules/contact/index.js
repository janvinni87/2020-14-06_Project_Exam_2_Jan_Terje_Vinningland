import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import Header from '../../modules/header';
import Footer from '../../modules/footer';
import PageTitle from '../../components/page-title';
import Form from '../../components/form';

import content from '../../content.json';

const useStyles = makeStyles(theme => ({
  root: {
    background: "url('./img/contact.jpg')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%',
  },
  inner: {
    margin: '0 auto',
    maxWidth: '800px',
    padding: '20px 20px 80px',
  },
  name: {
    fontSize: '36px',
    margin: '80px 0 50px',
    textTransform: 'uppercase',
  },
  address1: {
    fontSize: '22px',
  },
  address2: {
    fontSize: '22px',
  },
  address3: {
    fontSize: '22px',
    marginBottom: '60px',
  },
  phone: {
    fontSize: '22px',
    marginBottom: '50px',
  },
  email: {
    fontSize: '22px',
    marginBottom: '50px',
  },
  text: {
    fontSize: '22px',
    marginBottom: '30px',
  },
}));

const Contact = () => {
  const classes = useStyles();

  return (
    <>
      <Header />
      <div className={classes.root}>
        <div className={classes.inner}>
          <PageTitle title={content.contact.title} />

          <Typography className={classes.name} variant='body1'>{content.contact.name}</Typography>

          <Typography className={classes.address1} variant='body1'>{content.contact.address1}</Typography>
          <Typography className={classes.address2} variant='body1'>{content.contact.address2}</Typography>
          <Typography className={classes.address3} variant='body1'>{content.contact.address3}</Typography>

          <Typography className={classes.phone} variant='body1'>{content.contact.phone}</Typography>

          <Typography className={classes.email} variant='body1'>{content.contact.email}</Typography>

          <Typography className={classes.text} variant='body1'>{content.contact.text}</Typography>
          <Form />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;

export { Contact };
