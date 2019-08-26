import React, { Component } from 'react'
import thumbup from "source/thumbup.png"
import email from "source/email.png"
import IconView from "source/IconView"
import DateFormat from "modules/DateFormat"
import forked from "source/forked.svg"
import noimg from "source/noimg.png"

class DesignInfo extends Component {
    state = { tmpLike: false, likeDialog: false, forkDialog: false }
    like() {
        if (this.state.tmpLike) { //dislike
            this.setState({ tmpLike: !this.state.tmpLike })
        } else {
            this.setState({ tmpLike: !this.state.tmpLike, likeDialog: true })
            // request like design
            setTimeout(() => { this.setState({ likeDialog: false }) }, 1500)
        }
    }
    fork() {
        this.setState({ forkDialog: true })
    }
    render() {
        const { DesignDetail, Count, like } = this.props
        const thumbnail = (DesignDetail && DesignDetail.img && DesignDetail.img.l_img) || noimg

        return (
            <>
                {this.state.forkDialog && <div style={{ position: "absolute", top: "255px", left: "618px", width: "576px", height: "200px", background: "#FFFFFF 0% 0% no-repeat padding-box", boxShadow: "0px 3px 6px #000000", borderRadius: "5px", opacity: "1" }}>
                    <div style={{ marginTop: "31.5px", marginLeft: "62.5px", width: "394px", height: "69px", textAlign: "center", font: "Medium 20px/40px Noto Sans KR", letterSpacing: "0", color: "#707070", opacity: "1" }}>
                        {DesignDetail.userName}님의 디자인 / {DesignDetail.title}<br />
                        파생 디자인을 생성하시겠습니까?
                    </div>
                    <div style={{ width: "120px", height: "29px", textAlign: "center", font: "Medium 20px/40px Noto Sans KR", letterSpacing: "0", color: "#FF0000", opacity: "1" }}>
                        네, 생성합니다.
                    </div>
                </div>}
                {this.state.likeDialog && <div style={{
                    position: "absolute", top: "47px", left: "763px", width: "396px", height: "138px",
                    background: "#FFFFFF 0% 0% no-repeat padding-box", boxShadow: "0px 3px 6px #000000", borderRadius: "5px", opacity: "1"
                }}><div style={{ marginTop: "31.5px", marginLeft: "62.5px", width: "273px", height: "69px", fontFamily: "Noto Sans KR", fontSize: "20px", lineHeight: "40px", textAlign: "center", fontWeight: "500", color: "#707070" }}>관심 디자인으로 등록되었습니다.<br />마이페이지에서 확인 가능합니다.</div></div>}
                <div style={{ marginTop: "21px", display: "flex", backgroundColor: "#EFEFEF", width: "1920px", height: "237px" }}>
                    {DesignDetail.parent_design && <div style={{ position: "absolute", marginTop: "19px", marginLeft: "220px", width: "20px", height: "42px", backgroundImage: `url(${forked})`, backgroundSize: "cover" }} />}
                    <div style={{ marginTop: "19px", marginLeft: "65px", background: `url(${thumbnail})`, backgroundSize: "cover", backgroundPosition: "center center", backgroundImage: `url${thumbnail}`, backgroundColor: "#D6D6D6", borderRadius: "15px", width: "200px", height: "200px", backgroundRepeat: "no-repeat" }}></div>
                    <div style={{ marginTop: "19px", marginLeft: "42px", }}>
                        <div style={{ width: "165px", height: "29px", marginTop: "0px", marginLeft: "0px", fontSize: "20px", color: "#707070", fontWeight: "500", textAlign: "left", lineHeight: "29px", cursor: "pointer" }} title={DesignDetail.title}>{DesignDetail.title.slice(0, 8)}{DesignDetail.title.length > 8 ? "..." : ""}</div>
                        {DesignDetail.parent_design && <div style={{ width: "165px", height: "25px", marginTop: "9px", marginLeft: "0px", fontSize: "17px", color: "#707070", fontWeight: "300", textAlign: "left", lineHeight: "25px", cursor: "pointer", color: "#FF0000" }} title={DesignDetail.parent_title}>{DesignDetail.parent_title.slice(0, 4)}{DesignDetail.parent_title.length > 4 && "..."}에서 파생됨</div>}
                        <div style={{ width: "170px", height: "29px", marginTop: DesignDetail.parent_design ? "8px" : "13px", marginLeft: "0px", fontSize: "20px", color: "#707070", fontWeight: "300", textAlign: "left", lineHeight: "29px", cursor: "pointer" }}>{DesignDetail.userName.slice(0, 8)} {(DesignDetail.member && DesignDetail.member.length > 1) && "외 " + (DesignDetail.member.length - 1).toString() + "명"}</div>
                        <div style={{ width: "165px", height: "29px", marginTop: DesignDetail.parent_design ? "40px" : "69px", marginLeft: "0px", fontSize: "17px", color: "#FF0000", fontWeight: "500", textAlign: "left", lineHeight: "29px", display: "flex", alignItems: "bottom" }}>{DesignDetail.is_parent && "파생된 디자인 "}{DesignDetail.is_parent && <div style={{ marginLeft: "10px" }}>{DesignDetail.children_count["count(*)"]}</div>}</div>
                        <div style={{ width: "165px", height: "29px", marginTop: DesignDetail.parent_design ? "0px" : "13px", marginLeft: "0px", fontSize: "15px", color: "#707070", fontWeight: "500", textAlign: "left", display: "flex" }}>
                            <div style={{ marginTop: "auto" }}><IconView width="17.24px" height="11.41px" fill="#707070" /></div>
                            <div style={{ marginTop: "auto", marginLeft: "5.85px", width: "34px" }}>{Count.view_count}</div>
                            <div style={{ marginTop: "auto", marginLeft: "22px", width: "22px", height: "22px", padding: "0px" }}><i style={{ marginTop: "auto", fontSize: "20px" }} className="material-icons">thumb_up</i></div>
                            <div style={{ marginTop: "auto", marginLeft: "6px", width: "34px" }}>{Count.like_count}</div>
                        </div>
                    </div>
                    <div style={{ marginTop: "19px", marginLeft: "65px" }}>
                        <div style={{ width: "100px", height: "25px", color: "#FF0000", fontSize: "17px", fontFamily: "Noto Sans KR", lineHeight: "25px", fontWeight: "300", textAlign: "left" }}>{DesignDetail.categoryName}</div>
                        <div style={{ width: "423px", height: "158px", marginTop: "17px", color: "#707070", fontSize: "20px", fontFamily: "Noto Sans KR", lineHeight: "29px", fontWeight: "300" }}>{DesignDetail.explanation ? DesignDetail.explanation.slice(0, 150) : DesignDetail.userName + "님의 " + DesignDetail.title + "디자인입니다."}</div>
                    </div>
                    <div style={{ marginTop: "19px", marginLeft: "65px" }}>
                        <div style={{ width: "100px", height: "25px", color: "#FF0000", fontSize: "17px", fontFamily: "Noto Sans KR", lineHeight: "25px", fontWeight: "300", textAlign: "left" }}></div>
                        <div style={{ width: "423px", height: "158px", marginTop: "17px", color: "#707070", fontSize: "20px", fontFamily: "Noto Sans KR", lineHeight: "29px", fontWeight: "300" }}>{DesignDetail.explanation && DesignDetail.explanation.slice(150, 300 - 3)}{(DesignDetail.explanation.length > 300 - 3) ? "..." : ""}</div>
                    </div>
                    <div style={{ marginTop: "19px", marginLeft: "auto", marginRight: "72px" }}>
                        <div style={{ marginTop: "0px", fontFamily: "Noto Sans KR", fontSize: "20px", color: "#FF0000", textAlign: "right", marginLeft: "auto", fontWeight: "500", cursor: "pointer" }} onClick={() => this.fork()}>파생 디자인 생성</div>
                        <div style={{ height: "45px", display: "flex", marginTop: "17px", marginLeft: "auto", cursor: "pointer" }} onClick={() => this.like()}>
                            <div style={{ marginTop: "16px", height: "25px", fontFamily: "Noto Sans KR", fontSize: "17px", fontWeight: "300", color: "#707070", textAlign: "right" }}>관심 디자인 {this.state.tmpLike ? "취소하기" : "등록하기"}</div>
                            <div style={{ marginLeft: "15px", width: "45px", height: "45px", background: `url(${thumbup})`, opacity: this.state.tmpLike ? "1" : "0.45", backgroundSize: "cover", backgroundPosition: "center center", }}></div>
                        </div>
                        <div style={{ height: "45px", display: "flex", marginTop: "15px", marginLeft: "auto" }}>
                            <div style={{ marginTop: "16px", height: "25px", fontFamily: "Noto Sans KR", fontSize: "17px", marginLeft: "auto", fontWeight: "300", color: "#707070", textAlign: "right" }}>메시지 보내기</div>
                            <div style={{ marginLeft: "15px", width: "45px", height: "45px", background: `url(${email})`, backgroundSize: "cover", backgroundPosition: "center center", }}></div>
                        </div>
                        <div style={{ marginTop: "29px", height: "25px", fontFamily: "Noto Sans KR", fontSize: "17px", color: "#707070", lineHeight: "40px", textAlign: "right", marginLeft: "auto", fontWeight: "300" }}>최근 업데이트 {DateFormat(DesignDetail.update_time)}</div>
                    </div>
                </div>
            </>
        )
    }
}
export default DesignInfo