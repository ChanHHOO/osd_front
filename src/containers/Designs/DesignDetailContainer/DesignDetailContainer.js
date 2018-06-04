import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { GetDesignDetailRequest, DesignDetailResetRequest } from "actions/Design";
import DesignDetail from "components/Designs/DesignDetail";

class DesignDetailContainer extends Component {
  render() {
    return (
      <div>
        <DesignDetail {...this.props}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    DesignDetail: state.DesignDetail.status.DesignDetail,
    valid: state.Authentication.status.valid,
    userInfo: state.Authentication.status.userInfo
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    GetDesignDetailRequest: (id) => {
      return dispatch(GetDesignDetailRequest(id))
    },
    DesignDetailResetRequest: () => {
      return dispatch(DesignDetailResetRequest())
    }
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DesignDetailContainer));
