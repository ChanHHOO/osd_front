import React, { Component } from "react";
import { connect } from "react-redux";
import { GetDesignDetailViewRequest, ChangeToProjectRequest } from "actions/Design";
import DetailView from "components/Designs/DetailView";
import { GetCardCommentRequest, CreateCardCommentRequest, DeleteCardCommentRequest } from "actions/Designs/DesignCard";

class DesignDetailViewContainer extends Component {
  render() {
    return (
      <div>
        <DetailView {...this.props}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    DesignDetailView: state.DesignDetailView.status.DesignDetailView,
    token: state.Authentication.status.token,
    userInfo: state.Authentication.status.userInfo,
    Comment: state.DesignCardComment.status.Comment
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    GetDesignDetailViewRequest: (id) => {
      return dispatch(GetDesignDetailViewRequest(id))
    },
    ChangeToProjectRequest: (id, token) => {
      return dispatch(ChangeToProjectRequest(id, token))
    },
    GetCardCommentRequest: (design_id, card_id) => {
      return dispatch(GetCardCommentRequest(design_id, card_id));
    },
    CreateCardCommentRequest: (data, design_id, card_id, token) => {
      return dispatch(CreateCardCommentRequest(data, design_id, card_id, token));
    },
    DeleteCardCommentRequest: (design_id, card_id, comment_id, token) => {
      return dispatch(DeleteCardCommentRequest(design_id, card_id, comment_id, token));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DesignDetailViewContainer);
