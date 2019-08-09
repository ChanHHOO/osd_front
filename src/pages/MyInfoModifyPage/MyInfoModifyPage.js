import React, { Component } from 'react'
import SelectBox from "components/Commons/SelectBox"
import styled from 'styled-components'

const category1 = [
    { id: 0, value: "대분류를 선택해 주세요" }, { id: 1, value: "패션" }, { id: 2, value: "제품" },
    { id: 3, value: "커뮤니케이션" }, { id: 4, value: "공간" }, { id: 5, value: "엔터테인먼트" },
    { id: 6, value: "소프트웨어" }, { id: 7, value: "새분야" }
]
const scrollmenu_data = [
    { txt: "기본 정보", tag: "#basic" }, { txt: "보안", tag: "#security" }, { txt: "부가 정보", tag: "#additional" }
]

class MyInfoModifyPage extends Component {
    state = { nick: true, selected: 0 }
    componentDidMount() {
        document.addEventListener("scroll", this.handleScroll, true)
    }
    componentWillUnmount() {
        document.removeEventListener("scroll", this.handleScroll, true)
    }
    handleScroll = () => {
        let sections = document.querySelectorAll("section")
        console.log(sections)
        sections.forEach(item => { console.log(item) })
    }

    scrollMove = (menu, selected) => {
        this.setState({ selected: selected })
        window.location.href = menu.tag
    }
    submit = () => {
        alert(":)")
    }
    render() {
        const scrollmenu = scrollmenu_data
        const { selected } = this.state
        const Section_Basics = () => {
            return (
                <section id="basic">
                    {/* thumbnail */}
                    <div style={{ width: "1200px" }}>
                        <div style={{ display: "flex" }}>
                            <div style={{ width: "100px", height: "29px", lineHeight: "29px", fontSize: "20px", fontWeight: "500", color: "#707070", textAlign: "left" }}>프로필 사진</div>
                            <div style={{ marginLeft: "67px", width: "200px", height: "200px", borderRadius: "50%", backgroundColor: "#EFEFEF" }} />
                            <div style={{ marginLeft: "65px", marginTop: "100px" }}>
                                <div style={{ width: "63px", height: "25px", cursor: "pointer" }}>
                                    <div style={{ fontWeight: "500", fontSize: "17px", borderBottom: "1.5px solid #FF0000", lineHeight: "25px", textAlign: "left", color: "#FF0000" }}>찾아보기</div></div>
                                <div style={{ width: "341px", height: "45px", marginTop: "11px", fontWeight: "300", fontSize: "14px", lineHeight: "20px", textAlign: "left", color: "#707070" }}>프로필 사진은 대표적으로 보이게 되는 사진으로, JPG/<br />JPEG/PNG 파일을 등록 가능합니다.</div>
                            </div>
                        </div>
                    </div>
                    {/* nick */}
                    <div style={{ marginTop: "86px", width: "1544px" }}>
                        <div style={{ display: "flex" }}>
                            <div style={{ marginRight: "117px", width: "56px", height: "29px", fontSize: "20px", lineHeight: "29px", fontWeight: "500", color: "#707070" }}>닉네임</div>
                            <div style={{
                                width: "505.5px", height: "56px", backgroundColor: "#EFEFEF", borderRadius: "5px",
                                fontSize: "20px", lineHeight: "29px", fontWeight: "500", color: "#707070"
                            }} >
                                <input type="text" style={{ outline: "none", marginLeft: "27px", marginTop: "12px", height: "29px", lineHeight: "29px", width: "451.5px", border: "none", color: "#707070", backgroundColor: "#EFEFEF" }} placeholder="닉네임을 입력하세요." />
                            </div>
                            <div style={{ marginTop: "16px", marginLeft: "27.5px", fontSize: "17px", fontWeight: "300", lineHeight: "25px", color: "#707070", width: "230px", height: "25px" }}>
                                {this.state.nick ? <div>사용 가능한 닉네임입니다.</div> : <div style={{ color: "#FF0000" }}>사용 하실 수 없는 닉네임입니다.</div>}
                            </div>
                        </div>
                    </div>
                    {/* introduction */}
                    <div style={{ marginTop: "50px", display: "flex" }}>
                        <div style={{ width: "75px", height: "29px", fontSize: "20px", lineHeight: "29px", fontWeight: "500", color: "#707070" }}>자기소개</div>
                        <div style={{ width: "717.5px", height: "244px", marginLeft: "98px", backgroundColor: "#EFEFEF", borderRadius: "5px", marginTop: "14px", }}>
                            <textarea style={{
                                width: "717.5px", height: "244px", backgroundColor: "#EFEFEF", outline: "none", border: "none", resize: "none", lineHeight: "35px",
                                textAlign: "left", fontSize: "20px", fontWeight: "300", color: "#707070", paddingTop: "26px", paddingLeft: "22px", paddingBottom: "34px", paddingRight: "32.5px"
                            }} placeholder="자기소개를 입력하세요." />
                        </div>
                    </div>
                </section>
            )
        }
        const Section_Security = () => {
            return (
                <section id="security">
                    {/* pw */}
                    <div style={{ marginTop: "38px", display: "flex" }}>
                        <div style={{ width: "75px", height: "29px", fontSize: "20px", lineHeight: "29px", fontWeight: "500", color: "#707070" }}>비밀번호</div>
                        <div style={{
                            marginLeft: "98px", marginTop: "9px",
                            width: "505.5px", height: "56px", backgroundColor: "#EFEFEF", borderRadius: "5px",
                            fontSize: "20px", lineHeight: "29px", fontWeight: "500", color: "#707070"
                        }} >
                            <input type="password"
                                style={{
                                    outline: "none", border: "none",
                                    marginLeft: "12px", marginTop: "13px",
                                    width: "481.5px", height: "29px", lineHeight: "29px",
                                    color: "#707070", backgroundColor: "#EFEFEF"
                                }} placeholder="비밀번호를 입력하세요." />
                        </div>
                    </div>
                    {/* pw verify */}
                    <div style={{ marginTop: "55px", display: "flex" }}>
                        <div style={{ width: "115px", height: "29px", fontSize: "20px", lineHeight: "29px", fontWeight: "500", color: "#707070" }}>비밀번호 확인</div>
                        <div style={{
                            marginLeft: "60px", marginTop: "9px",
                            width: "505.5px", height: "56px", backgroundColor: "#EFEFEF", borderRadius: "5px",
                            fontSize: "20px", lineHeight: "29px", fontWeight: "500", color: "#707070"
                        }} >
                            <input type="password" style={{
                                outline: "none", border: "none",
                                marginLeft: "12px", marginTop: "13px",
                                width: "481.5px", height: "29px", lineHeight: "29px",
                                color: "#707070", backgroundColor: "#EFEFEF"
                            }} placeholder="비밀번호를 입력하세요." />
                        </div>
                    </div>
                </section>
            )
        }
        const Section_Additional = () => {
            return (
                <section id="additional">
                    {/* category */}
                    <div style={{ marginTop: "51px", display: "flex" }}>
                        <div style={{ width: "74px", height: "29px", fontSize: "20px", lineHeight: "29px", fontWeight: "500", color: "#707070" }}>카테고리</div>
                        <div style={{ marginLeft: "98px", marginTop: "4px", width: "410px", height: "56px", backgroundColor: "#EFEFEF", borderRadius: "5px" }}>
                            <SelectBox items={category1} width="410" /></div>
                        <div style={{ marginLeft: "30px", marginTop: "4px", width: "410px", height: "56px", backgroundColor: "#EFEFEF", borderRadius: "5px" }}>
                            <SelectBox items={category1} width="410" /></div>
                    </div>
                </section>
            )
        }
        return (<>
            <div style={{ width: "1920px", display: "flex", justifyContent: "center" }}>
                <div id="basic" style={{ marginTop: "45px", width: "196px", height: "37px", fontFamily: "Noto Sans KR", fontSize: "25px", fontWeight: "700", lineHeight: "37px", textAlign: "center", color: "#707070" }}>내 프로필 수정하기</div>
            </div>

            <div style={{ display: "flex", marginTop: "60px" }}>
                {/* scroll - menu */}
                <div style={{ width: "325px", marginLeft: "64px" }}>
                    <div style={{ position: "fixed", top: "197px", width: "325px", height: "190px", backgroundColor: "#F5F4F4", borderRadius: "5px" }}>
                        {scrollmenu.map((menu, index) => {
                            return (<div onClick={() => this.scrollMove(menu, index)} style={{ cursor: "pointer", height: "62px", lineHeight: "29px", borderBottom: index + 1 === scrollmenu.length ? "none" : "2px solid #FFFFFF", paddingTop: "18px", paddingLeft: "36px" }} key={menu.txt}>
                                <div style={{ color: selected === index ? "#FF0000" : "#707070", fontSize: "20px", fontFamily: "Noto Sans KR", fontWeight: "300", textAlign: "left" }}>{menu.txt}</div>
                            </div>)
                        })}
                    </div>
                </div>
                {/* form */}
                <div style={{ marginLeft: "45px" }}>
                    <div style={{ width: "1422px", height: "1619px", borderRadius: "5px", border: "8px solid #F5F4F4", paddingTop: "46px", paddingLeft: "50.5px" }}>
                        <form onSubmit={this.submit}>
                            <Section_Basics />
                            <Section_Security />
                            <Section_Additional />
                            {/* submit */}
                            <div style={{ marginTop: "56px", marginLeft: "1470px", marginBottom: "156px" }}>
                                <button type="submit" style={{ width: "74px", height: "29px", lineHeight: "29px", color: "#FF0000", fontSize: "20px", borderBottom: "1.5px solid #FF0000", fontWeight: "500", cursor: "pointer" }}>등록하기</button></div>
                        </form>
                    </div>
                </div>
            </div>
        </>)
    }
}

export default MyInfoModifyPage

//            <div style={{ width: "1920px", display: "block", height: "48px", marginTop: "8px", backgroundColor: "#EFEFEF" }}>
//                <div style={{
//                    display: "inline-block", marginLeft: "65px", marginTop: "9px", width: "92px", height: "29px",
//                    fontFamily: "Noto Sans KR", fontWeight: "500", textAlign: "left", lineHeight: "29px", color: "#707070", fontSize: "20px"
//                }}>마이페이지</div>
//            </div>
