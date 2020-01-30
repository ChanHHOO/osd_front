import React, { Component } from "react";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";
// import InfiniteScroll from "react-infinite-scroller";

// CSS STYLE
const ScrollContainer = styled.div`
  padding-right: 10px;
  height: 330px;
  display: flex;
  overflow-x: scroll;
  ::-webkit-scrollbar { display: none; };
  .arrow {
    position: absolute;
    width: 35px;
    height: 35px;
    display: none;
    margin-top: 125px;
    border-radius: 50%;
    background: #EFEFEF;
    border: 1px solid #EEEEEE;
    &.left {
      padding-top: 4px;
      margin-left: 7px;
    }
    &.right {
      padding-top: 4px;
      margin-left: ${1790 - 30}px;
    }
  }
  :hover {
    .arrow {
      display: block;
    }
  }
`;

class ScrollListHorizontal extends Component {
  constructor(props) {
    super(props);
    this.state = { hasMore: true, loading: false };
    this.scrollHorizon = this.scrollHorizon.bind(this);
  };
  scrollHorizon(far) {
    document.getElementById("content").scrollLeft += far;
  }
  scrollLeft = e => {
    console.log("clicked", this.scroller);
  };
  render() {
    const { ListComponent } = this.props;
    const List = this.props.getMore ? this.props.dataListAdded : this.props.dataList

    return (
      <ScrollContainer id="content">
        <div className="arrow left" onClick={() => this.scrollHorizon(-500)}>
          <Icon name="caret left" size="big" /></div>

        <div className="arrow right" onClick={() => this.scrollHorizon(500)}>
          <Icon name="caret right" size="big" /></div>

        {List.length ? List.map(item =>
          <div key={item.uid} style={{ paddingRight: "10px", marginRight: "45px" }}>
            <ListComponent data={item} /></div>) : (
            <div style={{ marginLeft: "auto", marginRight: "auto" }}>노 데이타!</div>)}
      </ScrollContainer>
    );
  }
}

export default ScrollListHorizontal;