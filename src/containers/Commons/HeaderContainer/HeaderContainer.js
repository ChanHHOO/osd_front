<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 390cdf52ed7ead96e5630749dc83fb05a6093b5f
import React, { Component } from 'react'
import Header from "components/Commons/Header"

class HeaderContainer extends Component {
    render() {
        return (
            <Header />
        )
    }
}

export default HeaderContainer
<<<<<<< HEAD
=======
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Header from "components/Commons/Header";
import { SignOutRequest } from "actions/Registration";
import { SetActive } from "actions/OpenDesign";
// import {GetNotification} from "actions/Commons/Notification"
class HeaderContainer extends Component {
  render() {
    return (
      <Header {...this.props} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.Authentication.status.token,
    valid: state.Authentication.status.valid,
    // notification: state.Authentication.status.notification,
    userInfo: state.Authentication.status.userInfo,
    isActive: state.OpenDesign.isActive
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // GetNotification: ()=>{
    // return dispatch(GetNotification())
    // },
    SignOutRequest: () => {
      return dispatch(SignOutRequest());
    },
    SetActive: (active) => {
      return dispatch(SetActive(active))
    }
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HeaderContainer));
>>>>>>> d451c5fa80bf0a4cd1c0565cf5cff1f3b0edae71
=======
>>>>>>> 390cdf52ed7ead96e5630749dc83fb05a6093b5f
