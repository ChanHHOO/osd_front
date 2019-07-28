<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 390cdf52ed7ead96e5630749dc83fb05a6093b5f
import React, { Component } from 'react'
import ScrollList from "components/Commons/ScrollList"
import Design from "components/Designs/Design"

class DesignListContainer extends Component {
    render() {
        return (
            <ScrollList getListRequest={this.getList}
                ListComponent={Design}
                dataList={this.props.dataList}
                dataListAdded={this.props.dataListAdded}
                mobile={16} tablet={5} computer={4} largeScreen={2} widescreen={2} customClass="largeCustom"
            />
        )
    }
}
<<<<<<< HEAD
export default DesignListContainer
=======
import React, { Component } from "react";
import { connect } from "react-redux";
import { GetDesignListRequest, GetDesignTotalCountRequest } from "actions/Design";
import DesignList from "components/Designs/DesignList";

class DesignListContainer extends Component {
  render() {
    return(
      <div>
        <DesignList {...this.props}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    DesignList: state.DesignList.status.DesignList,
    DesignListAdded: state.DesignList.status.DesignListAdded,
    userInfo: state.Authentication.status.userInfo,
    category1: state.CategoryAll.status.category1,
    category2: state.CategoryAll.status.category2,
    Count: state.DesignList.status.Count
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      GetDesignListRequest: (page, sort, categoryLevel1, categoryLevel2) => {
        return dispatch(GetDesignListRequest(page, sort, categoryLevel1, categoryLevel2))
      },
      GetDesignTotalCountRequest: (category1, category2) => {
        return dispatch(GetDesignTotalCountRequest(category1, category2))
      }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DesignListContainer);
>>>>>>> d451c5fa80bf0a4cd1c0565cf5cff1f3b0edae71
=======
export default DesignListContainer
>>>>>>> 390cdf52ed7ead96e5630749dc83fb05a6093b5f
