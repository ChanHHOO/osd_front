<<<<<<< HEAD
<<<<<<< HEAD
import React, { Component } from "react"
import styled from "styled-components"
=======
import React, { Component } from 'react'
import styled from 'styled-components'
// import { NavLink } from 'react-router-dom'
>>>>>>> 390cdf52ed7ead96e5630749dc83fb05a6093b5f
// import StyleGuide from "opendesign_style"

import forked from "source/forked.svg"
import iForked from "source/forked_icon_white.png"
import iThumbUp from "source/thumbup_icon_white.png"
import IconView from "source/IconView"

// css 
const DesignElement = styled.div`
    min-width:330px;
    min-height:330px;
    width: 330px;
    height: 330px;
    border-radius: 15px;
    background-image: linear-gradient(#E8E8E8, #808080);
    margin-right: 63px; 
    color: white;
    font-size: 20px;
    font-family: "Noto Sans KR";
    .forked {
<<<<<<< HEAD
      position: relative;
      margin-left: 263.93px;
=======
      position: absolute;
      margin-left: 266px;
>>>>>>> 390cdf52ed7ead96e5630749dc83fb05a6093b5f
      margin-top: 0px;
      width: 32.63px;
      height: 70.48px;
      background-image: url(${forked});
    }
<<<<<<< HEAD
    .not{
      position: relative;
      margin-left: 263.93px;
      margin-top: 0px;
      width: 32.63px;
      height: 70.48px;
    }
`
class Design extends Component {
  state = { info: { title: "캡스톤 디자인 2019", author: "진아", counter: { view: 220, thumbup: 220, forked: 220 }, category: "패션" } }

  render() {
    const isForked = this.props.forked
    const info = this.state.info

    return (
      <DesignElement>
        {isForked ? <div className="forked" /> : <div className="not" />}
        <div style={{ width: "167px", fontFamily: "Noto Sans KR", marginLeft: "25px", marginTop: "136.45px" }}>
          <div style={{ fontSize: "20px", fontWeight: "700" }}>캡스톤 디자인 2019</div>
          <div style={{ fontSize: "20px", fontWeight: "300" }}>진아</div>
        </div>
        <div style={{ marginTop: "9px", display: "flex", justifyContent: "space-between" }}>
          <div style={{ marginLeft: "24.92px", fontWeight: "500", fontSize: "15px" }}>
            <IconView />
            {/* <img alt="icon" style={{ width: "13.83px", height: "9.16px", marginRight: "4.25px" }} src={iView} /> */}
            <span style={{ marginRight: "4.25px" }}>{info.counter.view}</span>
            <img alt="icon" style={{ width: "12px", height: "12px", marginRight: "4.25px" }} src={iThumbUp} />
            <span style={{ marginRight: "4.25px" }}>{info.counter.thumbup}</span>
            <img alt="icon" style={{ width: "13px", height: "13px", marginRight: "4.25px" }} src={iForked} />
            <span >{info.counter.forked}</span>
          </div>
          <div style={{ marginRight: "31px", width: "37px", height: "29px", fontSize: "20px", fontWeight: "300", color: "#F00" }}>{info.category}</div>
        </div>
      </DesignElement>)
=======
`
class Design extends Component {

  render() {
    const isForked = this.props.forked

    return (
      <DesignElement >
        {isForked && <div className="forked" />}
        <div style={{ position: "absolute", marginLeft: "262px", marginTop: "285px", width: "37px", height: "40px", fontSize: "20px", fontWeight: "300", color: "#FF0000" }}>패션</div>
        <div style={{ width: "167px", lineHeight: "40px", height: "69px", fontFamily: "Noto Sans KR", marginLeft: "25px", marginTop: "201px" }}>
          <div style={{ fontSize: "20px", fontWeight: "700" }}>캡스톤 디자인 2019</div>
          <div style={{ fontSize: "20px", fontWeight: "300" }}>진아</div>
        </div>
        <div style={{ marginLeft: "24.92px", marginTop: "14px", display: "flex", justifyContent: "space-start", width: "291px", height: "22px", textAlign: "left", lineHeight: "40px", fontSize: "15px", fontWeight: "500", alignItems: "center" }}>
          <div style={{ marginRight: "4.25px" }}><IconView width="13.83px" height="9.16px" fill="white" /></div>
          <div style={{ marginRight: "6px" }}>220</div>
          <div style={{ marginRight: "4px" }}><img alt="icon" style={{ width: "10px", height: "10px" }} src={iThumbUp} /></div>
          <div style={{ marginRight: "6px" }}>220</div>
          <div style={{ marginRight: "4px" }}><img alt="icon" style={{ width: "13px", height: "13px" }} src={iForked} /></div>
          <div style={{ marginRight: "0px" }}>220</div>
        </div>
      </DesignElement>
    )
>>>>>>> 390cdf52ed7ead96e5630749dc83fb05a6093b5f
  }
}
export default Design
// class Design extends Component {
//   render() {
//     let design = this.props.data;
//     // console.log("design", design)
//     return (
//       <NavLink to={"/designDetail/" + design.uid}>
//         <Designli>
//           <ImgPart style={design.thumbnailUrl ? { backgroundImage: `url(${design.thumbnailUrl.m_img})` } : { backgroundImage: `url(${noimg})` }}>
//             {design.parent_design === null
//               ? null
//               : <div className="icon-span">
//                 <i className="icon fork large icon-fork" />
//               </div>
//             }
//           </ImgPart>
//           <TextPart>
//             <div className="title">{design.title}</div>
//             {design.is_project === 1
//               ? <div className="userName" style={{ display: "flex", justifyContent: "space-between" }}>{design.userName}님의 프로젝트</div>
//               : <div className="userName" style={{ display: "flex" }}>{design.userName}님의 작품</div>
//             }
//             <div className="cate">
//               {design.categoryName ? design.categoryName : "전체"}
//               <span className="update">
//                 {design.update_time}
//               </span>
//             </div>
//           </TextPart>
//           <Count>
//             <div>
//               <Icon name="unhide"/>
//               {design.view_count ? design.view_count : 0}
//             </div>
//             <div>
//               <Icon name="heart" />
//               {design.like_count ? design.like_count : 0}
//             </div>
//             <div>
//               <Icon name="fork" />
//               {design.children_count ? design.children_count : 0}
//             </div>
//           </Count>
//         </Designli>
//       </NavLink>
//     )
//   }
// }
<<<<<<< HEAD
=======
import React, { Component } from "react";
import { NavLink} from "react-router-dom";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";
import eximg from "source/myPage.jpeg";
import StyleGuide from "StyleGuide";
import DateFormat from "modules/DateFormat";
import NumberFormat from "modules/NumberFormat";
import TextFormat from "modules/TextFormat";
// css styling

const Designli = styled.li`
  width: 100%;
  margin: 0 auto 2rem;
  font-size: 13px;
  border-radius: 3px 3px 3px 3px;
  overflow: hidden;
  box-shadow: 0px 2px 10px 2px rgba(0,0,0,0.1);
  background-color: #fff;
  text-align: left;
  list-style-type: none;
`;

const ImgPart = styled.div`
  width: 100%;
  height: 140px;
  overflow: hidden;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 3px 3px;
  div.icon-span{
    border-radius: 15%;
    background-color:#FFF;
    width: 23px;
    height: 23px;
    box-shadow: 0px 0.2px ${StyleGuide.color.geyScale.scale7};
  }
  i.icon-fork{
    color: ${StyleGuide.color.main.dark};
  }
`;

const TextPart = styled.div`
  padding: 10px 10px;
  font-size: ${StyleGuide.font.size.paragraph};
  & .title {
    font-weight: bold;
    line-height: 20px;
    height: 20px;
    color: ${StyleGuide.color.geyScale.scale7};
    font-size: 16px;
  }
  & .userName {
    line-height: 1.35;
    margin: 5px 0;
    color: ${StyleGuide.color.geyScale.scale6};
  }
  & .cate {
    color: ${StyleGuide.color.main.basic};
    font-weight: 300;
    font-size: ${StyleGuide.font.size.small};
  }
  & .update {
    color: ${StyleGuide.color.geyScale.scale7};
    padding-left : 10px;
    float: right;
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
  & .fork{
    transform: translateY(25%) rotate(90deg);
  }
`;

class Design extends Component {
  render() {
    let design = this.props.data;
    // console.log("design", design)
    return (
      <NavLink to={"/designDetail/" + design.uid}>
        <Designli>
          <ImgPart style={design.thumbnailUrl ? { backgroundImage: `url(${design.thumbnailUrl.m_img})` } : { backgroundImage: `url(${eximg})` }}>
            {design.parent_design === null
              ? null
              : <div className="icon-span">
                <i className="icon fork large icon-fork" />
              </div>
            }
          </ImgPart>
          <TextPart>
            <div className="title"><TextFormat txt={design.title} /></div>
            {design.is_project === 1
              ? <div className="userName" style={{ display: "flex", justifyContent: "space-between" }}><TextFormat style={{ flex: "1" }} txt={design.userName} chars={9} /><div style={{ flex: "1" }}>님의 프로젝트</div></div>
              : <div className="userName" style={{ display: "flex" }}><TextFormat txt={design.userName} chars={10} /> 님의 작품</div>
            }
            <div className="cate">
              {design.categoryName ? design.categoryName : "전체"}
              <span className="update">
                {DateFormat(design.update_time)}
              </span>
            </div>
          </TextPart>
          <Count>
            <div>
              <Icon name="unhide"/>
              {design.view_count ? NumberFormat(design.view_count) : 0}
            </div>
            <div>
              <Icon name="heart" />
              {design.like_count ? NumberFormat(design.like_count) : 0}
            </div>
            <div>
              <Icon name="fork" />
              {design.children_count ? NumberFormat(design.children_count) : 0}
            </div>
          </Count>
        </Designli>
      </NavLink>
    );
  }
}

export default Design;
>>>>>>> d451c5fa80bf0a4cd1c0565cf5cff1f3b0edae71
=======
>>>>>>> 390cdf52ed7ead96e5630749dc83fb05a6093b5f
