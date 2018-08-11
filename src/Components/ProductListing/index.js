import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import { injectMessageManager } from 'react-message-manager';
import CircularProgress from '@material-ui/core/CircularProgress';
import Card from '@material-ui/core/Card';
import Chip from '@material-ui/core/Chip';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import { withRouter } from 'react-router-dom';

import { STATUS } from '../../redux/Constants'

import reduxContainerHOC from './reduxContainerHOC';

import FoodCard from './FoodCard';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  searchBar: {
    flex: 4,
    borderBottomColor: '#fff',
    marginRight: 80,
  },
  progressContainer: {
    position: 'fixed',
    left: '50%',
    backgroundColor: '#fff',
    borderRadius: '50%',
    height: 30,
    width: 30,
    textAlign: 'center',
    marginTop: -10,
    paddingTop: 2,
    boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
  },
  welcomeText: {
    textAlign: 'center',
    fontSize: 48,
    marginTop: 80,
    color: '#95a5a6',
  },
  card: {
    width: 280,
    height: 400,
    marginRight: '1%',
    display: 'inline-block',
    marginLeft: '2%',
    marginBottom: 20,
    position: 'relative',
    padding: 0,
  },
  chip: {
    padding: 0,
    height: 24,
    margin: '1px 2px 1px 0px',
  },
  imageContainer: {
    '& img': {
      height: 180,
      width: '100%',
    }
  },
  foodName: {
    margin: '8px 0px',
    fontWeight: 600,
    textShadow: '1px 1px 5px gray'
  },
  loadMoreIcon: {
    height: 120,
    width: 120,
  },
  bottomBarContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: '#fff',
    padding: 10,
    width: '100%',
    boxShadow: '1px 1px 7px -2px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  priceLabel: {
    fontWeight: 900,
  }
};

@withRouter
@injectMessageManager
@withStyles(styles)
@reduxContainerHOC
class Search extends Component {

  state = {
    search: ''
  };

  componentDidMount() {
    this.props.getFoodList();
  }

  handleChange = (e, key) => {
    this.setState({ [key]: e.target.value });
  };

  render() {
    const { classes, getFoodStatus, foodList } = this.props;
    const { search } = this.state;
    let filteredList = [...foodList];
    filteredList = filteredList.filter(food => {
      return food.title.toLowerCase().indexOf(search.toLowerCase()) > -1;
    });
    return (
      <div className={classes.root}>
        <AppBar style={{ marginBottom: 20 }} position="fixed">
          <Toolbar>
            <TextField
              id="with-placeholder"
              label="Food item name"
              placeholder="eg. Champagne"
              className={classes.searchBar}
              margin="normal"
              value={search}
              onChange={(e) => this.handleChange(e, 'search')}
            />
            <Button onClick={() => {}} color="inherit">Filter</Button>
          </Toolbar>
        </AppBar>
        <div style={{ height: 90 }} />


        {
          (
            getFoodStatus === STATUS.LOADING
          )  && (
            <div style={{ position: 'relative' }}>
              <div className={classes.progressContainer}>
                <CircularProgress size={25} className={classes.progress} />
              </div>
            </div>
          )
        }

        {
          filteredList.length <= 0 && getFoodStatus !== STATUS.LOADING && (
            <div className={classes.welcomeText}>
              No Food Items Found... Change your Search :)
            </div>
          )
        }

        {
          filteredList.map((food, index) => {
            return (
              <FoodCard
                key={food.title}
                food={food}
                classes={classes}
              />
            )
          })
        }

      </div>
    );
  }
}

export default Search;