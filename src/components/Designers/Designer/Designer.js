import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";
import eximg from "source/eximg.jpeg";

// css styling

const Designerli = styled.li`
  width: 100%;
  margin: 0 auto 2rem;
  font-size: 13px;
  border-radius: 3px 3px 3px 3px;
  overflow: hidden;
  box-shadow: 0 1px 2px rgba(25,25,25,0.2);
  background-color: #fff;
  & a {
    cursor: pointer;
    display: block;
  }
`;

const ImgPart = styled.div`
  width: 100%;
  height: 140px;
  overflow: hidden;
  & img {
    width: 100%;
    height: 100%;
  }
`;

const TextPart = styled.div`
  padding: 10px 10px;
  & .date, & .userName {
    line-height: 1.35;
  }
  & .date {
    font-weight: 400;
    color: dimgrey;
  }
  & .userName {
    margin: 10px 0;
    font-weight: bold;
    line-height: 20px;
    height: 40px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
  }
  & .cate {
    color: #EB3324;
    font-weight: 300;
    font-size: 12px;
  }
`;

const Count = styled.div`
  background-color: #000;
  padding: 5px 10px;
  color: white;
  font-weight: 400;
  font-size: 12px;
  & div {
    float: left;
    width: 40px;
  }
  &::after{
    display: block;
    content: "";
    clear: both;
}
`;

class designer extends Component {
  render(){
    let designer = this.props.data;

    return(
      <NavLink to={"/designerDetail/"+designer.uid}>
        <Designerli>
          <ImgPart><img src={eximg} alt="썸네일이미지"/></ImgPart>
          <TextPart>
            <div className="cate">{designer.categoryName}</div>
            <div className="userName">{designer.nick_name}</div>
            <div className="date">2018-04-01 부터 활동</div>
          </TextPart>
          <Count>
            <div>
              <Icon name="signup" size="mini"></Icon>
              {designer.total_design? designer.total_design : 0}
            </div>
            <div>
              <Icon name="unhide" size="mini"></Icon>
              {designer.total_view? designer.total_view : 0}
            </div>
            <div>
              <Icon name="heart" size="mini"></Icon>
              {designer.total_like? designer.total_like : 0}
            </div>
          </Count>
        </Designerli>
      </NavLink>
    );
  }
}

export default designer;
