import React, { Component } from 'react';
import { connect } from "react-redux";
import Comment from 'components/Commons/Comment';
import { GetDesignCommentRequest, CreateDesignCommentRequest, DeleteDesignCommentRequest } from "redux/modules/design";

class DesignComment extends Component {
    componentDidMount() {
        this.props.GetDesignCommentRequest(this.props.designId);
    }
    comment = (data) => {
        this.props.CreateDesignCommentRequest(data, this.props.designId, this.props.token)
            .then(res => {
                this.props.GetDesignCommentRequest(this.props.designId);
            })
    }
    removeComment = (commentId) => {
        this.props.DeleteDesignCommentRequest(this.props.designId, commentId, this.props.token)
            .then(res => {
                this.props.GetDesignCommentRequest(this.props.designId);
            })
    }
    render() {
        console.log(this.props.Comment);
        let parentComments = this.props.Comment.filter(item => item.d_flag === null);
        let comments = parentComments.map(parent => {
            let replies = this.props.Comment.filter(item => item.d_flag === parent.uid);
            return { ...parent, replies };
        })
        console.log(comments);
        return (<React.Fragment>
          <Comment comments={comments} my={this.props.userInfo} comment={this.comment} removeComment={this.removeComment} />
        </React.Fragment>)
    }
};
const mapStateToProps = state => {
    return {
        Comment: state.DesignComment.status.Comment,
        token: state.Authentication.status.token,
        userInfo: state.Authentication.status.userInfo,
    };
};
const mapDispatchToProps = dispatch => {
    return {
        GetDesignCommentRequest: (design_id) => {
            return dispatch(GetDesignCommentRequest(design_id));
        },
        CreateDesignCommentRequest: (data, design_id, token) => {
            return dispatch(CreateDesignCommentRequest(data, design_id, token));
        },
        DeleteDesignCommentRequest: (design_id, comment_id, token) => {
            return dispatch(DeleteDesignCommentRequest(design_id, comment_id, token));
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(DesignComment);
