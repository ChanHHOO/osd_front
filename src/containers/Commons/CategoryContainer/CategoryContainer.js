import React, { Component } from "react";
import { connect } from "react-redux";
import { GetCategoryLevel1Request, GetCategoryLevel2Request, GetCategoryLevel2AllRequest } from "actions/Categorys";
import Category from "components/Commons/Category";
import Category2 from "components/Commons/Category2";
import { withRouter } from "react-router";

class CategoryContainer extends Component {
  render() {
    return(
      <div style={{width: "50%"}}>
       <Category2 {...this.props}/>
       <Category {...this.props}/>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    category1: state.Categorys.status.level1,
    category2: state.Categorys.status.level2,
    category2All: state.CategoryAll.status.level2List
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    GetCategoryLevel1Request: () => {
      return dispatch(GetCategoryLevel1Request());
    },
    GetCategoryLevel2Request: (id) => {
      return dispatch(GetCategoryLevel2Request(id));
    },
    GetCategoryLevel2AllRequest: (cate1) => {
      return dispatch(GetCategoryLevel2AllRequest(cate1))
    }
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CategoryContainer));
