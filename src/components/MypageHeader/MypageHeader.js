import React, { Component } from 'react';
import styled from 'styled-components';

//img
import noimg from "source/noimg.png"
import iForked from "source/baseline_library_books_black_48dp.png"
import iThumbUp from "source/thumbup_icon_black.png"
import IconView from "source/IconView"
import DateFormat from 'modules/DateFormat';
import NumberFormat from "modules/NumberFormat";
import iEdit from 'source/edit_1.png';
//CSS
const BackgroundBox = { position: "relative", overFlow: "hidden", width: "1920px", height: "336px", marginTop: "36px", background: "#EFEFEF" };
const ProfileBox = styled.div`
    position: absolute;
    width: 200px;
    height: 200px;
    top: 90px;
    left: 70px;
    border-radius: 200px;
    background: #D6D6D6;
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: cover;
    background-image: url(${props => props.img});
`;
    const Name = { position: "absolute", width: "200px", height: "29px", top: "41px", left: "70px", color: "#707070", fontFamily: "Noto Sans KR", fontSize: "20px", fontWeight: "500", textAlign: "center" }
    const Title = { position: "absolute", width: "479px", height: "29px", top: "41px", left: "418px", color: "#FF0000", fontFamily: "Noto Sans KR", fontSize: "20px", fontWeight: "200", textAlign: "left" }
    const ExplainBox01 = {wordWrap:"break-word",
        position: "absolute", overflow: "hidden", width: "479px", height: "149px", top: "90px", left: "418px",
        color: "#707070", fontSize: "20px", fontFamily: "Noto Sans KR", fontWeight: "200", textAlign: "left", lineHeight: "35px"
    }
    const ExplainBox02 = {
        position: "absolute", overflow: "hidden", width: "479px", height: "149px", top: "90px", left: "976px",
        color: "#707070", fontSize: "20px", fontFamily: "Noto Sans KR", fontWeight: "200", textAlign: "left", lineHeight: "35px"
    }
    const SummaryIconBox = {position: "absolute", width: "479px", height: "22px", bottom: "50px", left: "418px" }
    const Summary_View_Icon = { display: "inline-block", width: "17px", height: "17px" }
    const Summary_View = { marginLeft: "5px", display: "inline-block", width: "54px", height: "21px" }
    const Summary_ThumbUp_Icon = {
        display: "inline-block", width: "13px", height: "13px", opacity: "0.55",
        background: `url(${iThumbUp})`, backgroundSize: "cover", backgroundPosition: "center center"
    }
    const Summary_ThumbUp = { marginLeft: "5px", display: "inline-block", width: "54px", height: "21px", }
    const Summary_Forked_Icon = {
        display: "inline-block", width: "15px", height: "15px", opacity: "0.55",marginTop:"3px",marginBottom:"-3px",
        background: `url(${iForked})`, backgroundSize: "cover", backgroundPosition: "center center"
    }
    const Summary_Forked = { marginLeft: "5px", display: "inline-block", width: "54px", height: "21px", }

const interestDesignerBox = { position: "absolute", width: "250px", height: "45px", top: "90px", right: "72px", textAlign: "right" }
const interestDesignerTitle = {
    cursor: "pointer",
    display: "inline-block", width: "164px", height: "25px",
    color: "#707070", fontFamily: "Noto Sans KR", fontSize: "17px", fontWeight: "200", textAlign: "right"
}
const UpdateTimeBox = {
    position: "absolute", width: "146px", height: "25px", top: "273px", right: "72px",
    color: "#707070", fontFamily: "Noto Sans KR", fontSize: "17px", fontWeight: "200", textAlign: "right"
}
const defaultCount = {
    total_like: 1,
    total_group: 1,
    total_design: 1,
    total_view: 1,
}
let about_me = ["", ""];
let descriptionLengthCheck = "";

class MypageHeader extends Component {
    constructor(props) {
        super(props);
        this.state = { tmpLike: false, likeDialog: false, forkDialog: 0 };
    }
    gotoMyModify = () => {
        let href = window.location.href.substring(0, window.location.href.search("mypage"))
        window.location.href = href + 'mymodify';
    }
    render() {
        const MypageInfo = this.props.MyDetail;

        const countInfo = MypageInfo.count || defaultCount;
        const thumbnailInfo = MypageInfo.profileImg ? MypageInfo.profileImg.m_img : noimg;

        if (MypageInfo&&MypageInfo.about_me !=null ) {
            about_me[0] = MypageInfo.about_me.length < 199 ? MypageInfo.about_me : MypageInfo.about_me.slice(0, 199);
            descriptionLengthCheck = MypageInfo.about_me.length < 400 ? "" : " ...";
            about_me[1] = MypageInfo.about_me.length < 199 ? "" : MypageInfo.about_me.slice(200, 399) + descriptionLengthCheck;
        }

        console.log("date", this.props);
        return (
            <React.Fragment>
                    <div style={BackgroundBox}>
                    <div style={Name}>{MypageInfo.nick_name}</div>
                    <ProfileBox img={thumbnailInfo} />
                    <div style={Title}>{MypageInfo.categoryName}</div>
                    <div style={ExplainBox01}>{about_me[0]}</div>
                    <div style={ExplainBox02}>{about_me[1]}</div>
                    <div style={SummaryIconBox}>
                        <div style={Summary_View_Icon}><IconView width="17px" height="13px" fill="#707070" /></div>
                        <div style={Summary_View}>{NumberFormat(countInfo.total_view)}</div>
                        <div style={Summary_ThumbUp_Icon}></div>
                        <div style={Summary_ThumbUp}>{NumberFormat(countInfo.total_like)}</div>
                        <div style={Summary_Forked_Icon}></div>
                        <div style={Summary_Forked}>{NumberFormat(countInfo.total_group + countInfo.total_design)}</div>
                    </div>

                    <div onClick={this.gotoMyModify} style={interestDesignerBox
                    }>
                        <div style={interestDesignerTitle}>정보 수정하기</div>
                        <div style={{
                            cursor: "pointer", display: "inline-block", height: "40px", marginLeft: "15px", marginBottom: "-7px",
                            backgroundSize: "cover", backgroundPosition: "center center"
                        }}><img alt="icon" src={iEdit} style={{ paddingLeft: "15px" }} /></div>

                    </div>

                    <div style={UpdateTimeBox}>최근 업데이트 {DateFormat(MypageInfo.update_time)}</div>

                    {this.state.likeDialog === false ? null :
                        <div style={{
                            position: "absolute", top: "47px", left: "763px", width: "396px", height: "138px",
                            background: "#FFFFFF 0% 0% no-repeat padding-box", boxShadow: "0px 3px 6px #000000", borderRadius: "5px", opacity: "1"
                        }}>
                            <div style={{
                                marginTop: "31.5px", marginLeft: "62.5px", width: "273px", height: "69px", fontFamily: "Noto Sans KR",
                                fontSize: "20px", lineHeight: "40px", textAlign: "center", fontWeight: "500", color: "#707070"
                            }}>관심 디자이너로 등록되었습니다.<br />마이페이지에서 확인 가능합니다.
                        </div>
                        </div>}
                </div>

            </React.Fragment>
        );

    };
}
export default MypageHeader;
