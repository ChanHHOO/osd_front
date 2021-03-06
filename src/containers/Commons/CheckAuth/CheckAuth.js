<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 390cdf52ed7ead96e5630749dc83fb05a6093b5f
import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

export default function CheckAuth(Components) {
    class AuthenticatedComponent extends Component {
        state = {
            valid: false
        }
        render() {
            return this.state.valid || <Components {...this.props} /> // <Dimmer active> <Loader /> </Dimmer>
        }
    }
    // const mapStateToProps = (state) => {
    // return {
    // state
    // }
    // }
    // const mapDispatchToProps = (dispatch) => {
    // return {
    // dispatch
    // }
    // }
    // return withRouter(connect(mapStateToProps, mapDispatchToProps)(AuthenticatedComponent))
    return withRouter(AuthenticatedComponent)
<<<<<<< HEAD
}
=======
import React, {Component} from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { CheckTokenRequest } from "actions/Authentication";
import { SignOutRequest } from "actions/Registration";
import { SetSession, GetSession } from "modules/Sessions";
import { Dimmer, Loader } from "semantic-ui-react";
import { SetActive } from "actions/OpenDesign";

export default function CheckAuth(Components) {
  class AuthenticatedComponent extends Component {
    state = {
      valid: false
    }
    componentWillMount() {
      this.checkAuth();
    }
    componentDidUpdate(nextProps) {
      if (this.props.token !== nextProps.token) {
        this.checkAuth();
      }
    }

    checkAuth() {
      if (this.props.token != null) {
        SetSession("opendesign_token", this.props.token);
      }
      GetSession("opendesign_token").then(token => {
        this.props.CheckTokenRequest(token).then(data => {
          if (data.info) {
            if (!data.info.isDetail) {
              if(this.props.location.pathname === "/inserUserDetail"){
                this.setState({ valid: true });
              } else {
                this.props.history.push("/inserUserDetail");
              }
            } else {
              this.setState({ valid: true });
            }
          } else {
            this.setState({ valid: true });
          }
        });
      }).catch(data => {
        this.props.SignOutRequest();
        this.setState({ valid: true });
      });
    }

    render() {
      return this.state.valid
        ? <Components {...this.props} />
        : (
          <Dimmer active>
            <Loader />
          </Dimmer>
        );
    }
  }
  const mapStateToProps = (state) => {
    return {
      token: state.Authentication.status.token,
      valid: state.Authentication.status.valid,
      userInfo: state.Authentication.status.userInfo,
      isActive: state.OpenDesign.isActive
    };
  };
  const mapDispatchToProps = (dispatch) => {
    return {
      CheckTokenRequest: (token) => {
        return dispatch(CheckTokenRequest(token));
      },
      SignOutRequest: () => {
        return dispatch(SignOutRequest());
      },
      SetActive: (active) => {
        return dispatch(SetActive(active))
      }
    };
  };
  return withRouter(connect(mapStateToProps, mapDispatchToProps)(AuthenticatedComponent));
};
>>>>>>> d451c5fa80bf0a4cd1c0565cf5cff1f3b0edae71
=======
}
>>>>>>> 390cdf52ed7ead96e5630749dc83fb05a6093b5f
