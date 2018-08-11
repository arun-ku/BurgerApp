import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getFoodList } from 'Actions';

export default (WrappedComponent) => {
  class HOCInner extends Component {
    state = {};

    render() {
      return (
        <WrappedComponent
          {...this.props}
        />
      );
    }
  }

  function mapStateToProps(state) {
    return {
      getFoodStatus: state.Foods.getFoodStatus,
      foodList: state.Foods.foodList,
    };
  }

  function mapDispatchToProps(dispatch) {
    return {
      dispatch,
      ...bindActionCreators({
          getFoodList,
        },
        dispatch),
    };
  }

  return connect(mapStateToProps, mapDispatchToProps)(HOCInner);
};
