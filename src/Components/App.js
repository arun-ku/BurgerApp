import React, { Component, Fragment } from 'react';
import { withStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route } from 'react-router-dom'

import ProductListing from './ProductListing'

import styles from './styles';

@withStyles(styles)
class App extends Component {

  render() {
    return (
      <Router>
        <Fragment>
          <Route exact path="/" component={ProductListing} />
        </Fragment>
      </Router>
    );
  }
}

export default App;