import React, { Component } from 'react'
import { Modal} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
// import close from "source/close_white.png"

const CustomModal = styled(Modal)`
min-width: 1200px;
height: 900px;
border-radius: 35px; 
font-family: Noto Sans KR;
.title {
    padding: 0 0;
    margin: 0 auto;
    margin-top: 44px;
    text-align: center;
    line-height: 37px;
    color: #FF0000;
    font-size: 25px;
    font-weight: 500;
    width: 450px;
    height: 37px;
}
}
`
class SignInModal extends Component {
    _signin = () => {
        let success = true
        this.props.signin(success)
    }
    onClose = () => { this.props.close() }
    render() {
        // <div style={{ float: "right", position: "absolute", left: "0px", top: "0px", transform: "translateX(-500%)", backgroundImage: `url(${close})`, backgroundSize: "cover", backgroundPosition: "center center", width: "32.26px", height: "32.26px" }} />
        const { open } = this.props
        return (
            <CustomModal open={open} onClose={this.onClose}>
                <Modal.Content>
                    <div className="title">OPEN SOURCE DESIGN, OPEN DESIGN</div>
                    <form style={{ marginTop: "136px", marginLeft: "225px" }} onSubmit={this._signin}>
                        <div style={{ marginLeft: "0px", fontSize: "20px", fontWeight: "500", color: "#707070", lineHeight: "29px", textAlign: "left", width: "56px", height: "29px" }}>아이디</div>
                        <div style={{ marginTop: "16px", width: "708px", height: "48px", padding: "0px" }}><input style={{ textIndent: "35px", width: "708px", height: "48px", border: "none", color: "#707070", fontSize: "20px", fontWeight: "300", borderRadius: "15px", backgroundColor: "#EFEFEF" }} placeholder="아이디(이메일주소)를 입력하세요(ex. opensrcdesign@gmail.com)." /></div>
                        <div style={{ marginTop: "53px", marginLeft: "7px", fontSize: "20px", fontWeight: "500", color: "#707070", lineHeight: "29px", textAlign: "left", width: "74px", height: "29px" }}>비밀번호</div>
                        <div style={{ marginTop: "16px", width: "708px", height: "48px", padding: "0px" }}><input style={{ textIndent: "35px", width: "708px", height: "48px", border: "none", color: "#707070", fontSize: "20px", fontWeight: "300", borderRadius: "15px", backgroundColor: "#EFEFEF" }} placeholder="비밀번호를 입력하세요" /></div>
                        <div style={{ width: "56px", height: "29px", borderBottom: "1.5px solid red", marginTop: "65px", marginLeft: "653px", color: "#FF0000", fontWeight: "700", fontSize: "20px", lineHeight: "29px", textAlign: "left" }} >로그인</div>
                        <div style={{ marginTop: "65px", marginLeft: "7px", width: "178px", height: "29px" }} >
                            <Link style={{ fontSize: "20px", fontWeight: "500", color: "#707070", lineHeight: "29px", textAlign: "left" }} to="/findidpw" onClick={this.onClose}>아이디/비밀번호 찾기</Link></div>
                        <div style={{ marginTop: "65px", marginLeft: "7px", lineHeight: "35px", width: "203px", height: "64px", fontSize: "20px", fontWeight: "500", color: "#707070", textAlign: "left" }}>
                            아직 계정이 없으신가요?<br /><Link style={{ color: "#FF0000" }} to="/signup" onClick={this.onClose}>회원가입</Link></div>
                    </form>
                </Modal.Content>
            </CustomModal>
        )
    }
}


export default SignInModal