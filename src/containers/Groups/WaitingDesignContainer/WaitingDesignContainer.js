import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GetWaitingDesignRequest, DeleteDesignInGroupRequest } from "actions/Group";
import ContentList from "components/Commons/ContentList";

class WaitingDesignContainer extends Component {
  componentWillMount(){
    this.props.GetWaitingDesignRequest(this.props.match.params.id, this.props.match.params.sort);
  }

  shouldComponentUpdate(nextProps) {
    if (JSON.stringify(this.props) !== JSON.stringify(nextProps)) {
      this.props.GetWaitingDesignRequest(this.props.match.params.id, null, this.props.match.params.sort);
      return true;
    } else {
      return false;
    }
  }

  setOut = (id) => {
    console.log(id);
    this.props.DeleteDesignInGroupRequest(this.props.match.params.id, id);
  }

  setAccept = (id) => {
    console.log(id);
  }

  render() {
    return(
      <ContentList data={this.props.waitingDesign} type="design" handleClick={this.setOut} handleAccept={this.setAccept}/>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    waitingDesign: state.GroupWaitingList.status.waitingDesign
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    GetWaitingDesignRequest : (id, sort) => {
      return dispatch(GetWaitingDesignRequest(id, sort))
    },
    DeleteDesignInGroupRequest : (id, designId) => {
      return dispatch(DeleteDesignInGroupRequest(id, designId))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WaitingDesignContainer);