import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GetDesignInDesignerRequest } from "redux/modules/designer";
import ScrollList from "components/Commons/ScrollList";
import Design from "components/Design";

class DesignInDesignerContainer extends Component {
  componentWillMount() {
    this.props.GetDesignInDesignerRequest(this.props.match.params.id, 0);
  }

  getList = (page) => {
    return this.props.GetDesignInDesignerRequest(this.props.match.params.id, page);
  }

  render() {
    return(
      <div>
        <ScrollList getListRequest={this.getList}
                    ListComponent={Design}
                    dataList={this.props.dataList} dataListAdded={this.props.dataListAdded}
                    mobile={16} tablet={8} computer={8} largeScreen={5} widescreen={2} customClass="largeCustom"/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dataList: state.DesignerDetail.status.DesignInDesigner,
    dataListAdded: state.DesignerDetail.status.DesignInDesignerAdded
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    GetDesignInDesignerRequest: (id, page) => {
        return dispatch(GetDesignInDesignerRequest(id, page))
      }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DesignInDesignerContainer);
