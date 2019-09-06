import React, { Component } from "react";
import { connect } from "react-redux";
import { GetDesignListRequest } from "redux/modules/design";
import Category from "components/Commons/Category"

import ScrollList from "components/Commons/ScrollList";
import Design from "components/Designs/Design";
import opendesign_style from 'opendesign_style';
import Loading from "../../Designer/DesignerListContainer/DesignerListContainer";
import Designer from "../../../components/Designers/Designer";


class ScrollDesignListContainer extends Component {
  state = {
    reload: false,
  }

  componentDidMount() {
    this.props.GetDesignListRequest(0, this.props.sort, this.props.cate1, this.props.cate2, this.props.keyword);
    // props가 바뀌면 제일 첫번째 페이지 리스트부터 새로 불러옴
  }
  getList = async (page) => {
    this.props.GetDesignListRequest(page, this.props.sort, this.props.cate1, this.props.cate2, this.props.keyword);
  };
  handleReload = () => {
    this.setState({ reload: !this.state.reload });
  }
  render() {
    return (
        <div>
          {this.props.status  === "INIT" ?
              <Loading /> :
              <ScrollList {...opendesign_style.design_margin} getListRequest={this.getList} reload={this.state.reload} ListComponent={Design} handleReload={this.handleReload}  dataList={this.props.dataList} dataListAdded={this.props.dataListAdded} />}
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    dataList: state.DesignList.status.DesignList,
    dataListAdded: state.DesignList.status.DesignListAdded,

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    GetDesignListRequest: (page, sort, categoryLevel1, categoryLevel2, keyword) => {
      return dispatch(GetDesignListRequest(page, sort, categoryLevel1, categoryLevel2, keyword))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ScrollDesignListContainer);
