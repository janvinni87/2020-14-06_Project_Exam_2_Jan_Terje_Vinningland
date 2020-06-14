import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Header from '../../modules/header';
import Footer from '../../modules/footer';
import PageTitle from '../../components/page-title';

import content from '../../content.json';

const useStyles = makeStyles(theme => ({
  root: {
    background: "url('./img/clients.jpg')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    minHeight: '100vh',
    width: '100%',
  },
  inner: {
    margin: '0 auto',
    maxWidth: '800px',
    padding: '20px 20px 80px',
  },
  list: {
    listStyle: 'none',
    margin: 'none',
    padding: 'none',
  },
  item: {
    color: '#ffff',
    fontSize: '20px',
    lineHeight: '26px',
    textDecoration: 'none',
  },
}));

const Clients = () => {
  const classes = useStyles();

  const ListClients = () => {
    const items = content.clients.list || [];

    return (
      <ul className={classes.list}>
        {items.map((value, index) => {
          return <li key={index}><a className={classes.item} target='_blank' rel='noopener noreferrer' href={value.url}>{value.name}</a></li>;
        })}
      </ul>
    );
  };

  return (
    <>
      <Header />
      <div className={classes.root}>
        <div className={classes.inner}>
          <PageTitle title={content.clients.title} />
          <ListClients />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Clients;

export { Clients };
