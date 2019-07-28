<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 390cdf52ed7ead96e5630749dc83fb05a6093b5f
import React, { Component } from 'react'
import styled from "styled-components"

import noimg from "source/noimg.png"
import forked from "source/forked.svg"
import iForked from "source/forked_icon_black.png"
import iThumbUp from "source/thumbup_icon_black.png"
<<<<<<< HEAD
import iView from "source/view.svg"
=======
// import iView from "source/view.svg"
>>>>>>> 390cdf52ed7ead96e5630749dc83fb05a6093b5f
import IconView from "source/IconView"

const GroupComp = styled.div`
    min-width:902px;
    min-height:230px;
    width: 902px;
    height: 230px;
    border-radius: 15px;
    background-color: #EFEFEF;
    margin-right: 96px; 
    color: #707070;
    font-size: 20px;
    font-family: "Noto Sans KR";
    display: flex;

    .thumbnail-box {
        top: 0px;
        width: 230px;
        height: 230px;
        border-radius: 15px;
        background-color: #D6D6D6;
        background-position: center center;
        background-size: cover;
        &.mini {
            width: 70px;
            height: 70px;
            margin-right: 5px;
        }
    }
    .content-box {
        width: 586.08px;
        height: 209.93px;
        margin: 0 0;
        margin-left: 53.92px;
        padding: 0 0;
    }
}
.category {
    position: absolute;
    margin-left: 763px;
    margin-top: 14px;
    font-size: 20px;
    line-height: 29px;
    text-align: left;
    color: #FF0000;
}
.forked {
    position: absolute;
    margin-left: 553.01px;
    margin-top: 0px;
    width: 32.63px;
    height: 70.48px;
    background-image: url(${forked});
}
.not{
    position: relative;
    margin-left: 263.93px;
    margin-top: 0px;
    width: 32.63px;
    height: 70.48px;
}
`
class Group extends Component {
    render() {
        const thm_url = "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/8c591282228133.5d1a240959aed.jpg"
        return (
            <GroupComp>
                <div className="category">패션</div>
                <div className="thumbnail-box" style={{ backgroundImage: `url(${thm_url}),url(${noimg})` }} />
                <div style={{ position: "absolute", display: "flex", marginLeft: "575px", marginTop: "139.93px" }}><div className="thumbnail-box mini" /><div className="thumbnail-box mini" /><div className="thumbnail-box mini" /><div className="thumbnail-box mini" /></div>
                <div className="content-box" >
                    <div className="forked" />
                    <div style={{ marginTop: "23px", marginLeft: "0.08px", width: "167px", fontWeight: "700" }}>캡스톤 디자인 2019</div>
                    <div style={{ marginTop: "11px", marginLeft: "0.08px", width: "516px", lineHeight: "35px", height: "69px", fontWeight: "100" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore </div>
                    <div style={{ marginTop: "21px", marginLeft: "0.08px", width: "291px", fontWeight: "300" }}>진아님의 그룹</div>
<<<<<<< HEAD
                    <div style={{ marginTop: "17px", display: "flex", justifyContent: "space-start", width: "291px", textAlign: "left", lineHeight: "40px", fontSize: "15px", fontWeight: "500", display: "flex", alignItems: "center" }}>
=======
                    <div style={{ marginTop: "17px", display: "flex", justifyContent: "space-start", width: "291px", textAlign: "left", lineHeight: "40px", fontSize: "15px", fontWeight: "500", alignItems: "center" }}>
>>>>>>> 390cdf52ed7ead96e5630749dc83fb05a6093b5f
                        <div style={{ marginRight: "4.25px" }}><IconView width="13.83px" height="9.16px" fill="black" opacity="0.55" /></div>
                        <div style={{ marginRight: "8px" }}>220</div>
                        <div style={{ marginRight: "4.25px" }}><img alt="icon" style={{ opacity: "0.55", width: "12px", height: "12px" }} src={iThumbUp} /></div>
                        <div style={{ marginRight: "8px" }}>220</div>
                        <div style={{ marginRight: "4.25px" }}><img alt="icon" style={{ opacity: "0.55", width: "13px", height: "13px" }} src={iForked} /></div>
                        <div>220</div>
                    </div>
                </div>
            </GroupComp >
        )
    }
}

<<<<<<< HEAD
export default Group
=======
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import eximg from "source/myPage.jpeg";
import { Icon } from "semantic-ui-react";
import StyleGuide from "StyleGuide";
import DateFormat from "modules/DateFormat";
import NumberFormat from "modules/NumberFormat";
import TextFormat from "modules/TextFormat";

// css styling

const Groupli = styled.li`
  width: 100%;
  margin: 0 auto 2rem;
  font-size: 13px;
  border-radius: 3px 3px 3px 3px;
  overflow: hidden;
  box-shadow: 0px 2px 10px 2px rgba(0,0,0,0.1);
  background-color: #fff;
  list-style-type: none;
  box-sizing: border-box;
  padding: 10px;
`;

const ImgPart = styled.div`
  width: 100%;
  height: 140px;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  & img {
    width: 100%;
    height: 100%;
  }
`;

const TextPart = styled.div`
  padding: 10px 10px;
  font-size: ${StyleGuide.font.size.paragraph};
  & .owner {
    line-height: 1.35;
    margin: 5px 0;
    color: ${StyleGuide.color.geyScale.scale6};
  }
  & .title {
    font-size: 16px;
    font-weight: bold;
    line-height: 20px;
    height: 20px;
    color: ${StyleGuide.color.geyScale.scale7};
  }
  & .cate {
    color: ${StyleGuide.color.geyScale.scale6};
    font-size: ${StyleGuide.font.size.small};
  }
`;

const Count = styled.div`
  background-color: #fff;
  padding: 5px 10px;
  color: ${StyleGuide.color.geyScale.scale6};
  border-top: 1px solid ${StyleGuide.color.geyScale.scale1};
  font-weight: 400;
  font-size: 12px;
  & div {
    float: left;
    padding-right: 10px;
  }
  &::after{
    display: block;
    content: "";
    clear: both;
  }
`;


class Group extends Component {
  refresh = (id) => {
    if (this.props.rerender) {
      window.location.href(`/groupDetail/${id}`);
    } else {
      return;
    }
  }

  render() {
    let group = this.props.data;

    return (
      <NavLink to={"/groupDetail/" + group.uid} onClick={() => this.refresh(group.uid)}>
        <Groupli>
          <ImgPart style={group.thumbnailUrl ? { backgroundImage: `url(${group.thumbnailUrl.m_img})` } : { backgroundImage: `url(${eximg})` }} />
          <TextPart>
            <div className="title"><TextFormat txt={group.title} /></div>
            <div className="owner" style={{ display: "flex" }}><TextFormat txt={group.userName} chars={10} /> 님의 그룹</div>
            <div className="cate">
              최근 업데이트 {DateFormat(group.child_update_time)}
            </div>
          </TextPart>
          <Count>
            <div>
              <Icon name="window restore" /> {group.group ? NumberFormat(group.group) : 0}
            </div>
            <div>
              <Icon name="signup" /> {group.design ? NumberFormat(group.design) : 0}
            </div>
            <div>
              <Icon name="heart" /> {group.like ? NumberFormat(group.like) : 0}
            </div>
          </Count>
        </Groupli>
      </NavLink>
    );
  }
}

export default Group;
>>>>>>> d451c5fa80bf0a4cd1c0565cf5cff1f3b0edae71
=======
export default Group
>>>>>>> 390cdf52ed7ead96e5630749dc83fb05a6093b5f
