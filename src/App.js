import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import SimpleReactLightbox from "simple-react-lightbox";

import Landing from './modules/landing';
import About from './modules/about';
import Gallery from './modules/gallery';
import GallerySingle from './modules/gallerySingle';
import Clients from './modules/clients';
import Contact from './modules/contact';

import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

theme.typography.h1 = {
  fontSize: '2.6rem',
  fontWeight: 'normal',
  [theme.breakpoints.up('md')]: {
    fontSize: '3.2rem',
  },
};

theme.typography.h2 = {
  fontSize: '1.8rem',
  fontWeight: 'normal',
  [theme.breakpoints.up('md')]: {
    fontSize: '2.6rem',
  },
};

theme.typography.h3 = {
  fontSize: '1.8rem',
  fontWeight: 'normal',
  [theme.breakpoints.up('md')]: {
    fontSize: '2.2rem',
  },
};

const App = () => {
  return (
    <SimpleReactLightbox>
      <div className='container'>
        <Router>
          <ThemeProvider theme={theme}>
            <Route exact path='/' component={Landing} />
            <Route exact path='/about' component={About} />
            <Route exact path='/gallery' component={Gallery} />
            <Route exact path='/gallery/:slug' component={GallerySingle} />
            <Route exact path='/clients' component={Clients} />
            <Route exact path='/contact' component={Contact} />
          </ThemeProvider>
        </Router>
      </div>
    </SimpleReactLightbox>
  );
};

export default App;
