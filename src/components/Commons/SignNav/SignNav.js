import React, { Component } from 'react'
import styled from 'styled-components'
import SignInModal from "components/Commons/SignNav/SignInModal"

const SignNavContainer = styled.div`
    font-family: "Noto Sans KR";
    font-size: 20px;
    display:flex;
    img {
        margin-right: 10px;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        border: 0px;
        background-color: #D6D6D6;
    }
`
const UserPopup = styled.div`
    background-color: white;
    border-radius: 15px 15px 15px 15px;
    border: 1px solid red;
    display: block;
    position: relative;
    width: 154px;
    height: 150px;
    text-align: center;
`
const UserPopupMenu = styled.div`
    width: 100%;
    height: 50px;
    vertical-align: middle;
    :hover{
        color: white;
        background-color: red;
    }
`
const UserProfile = styled.div`
    position: relative;
    display: flex;
`
class SignNav extends Component {
    state = { valid: false, user_popup: false, signin_modal: false }
    _handleClick = () => { }
    _open_signin_modal = () => { this.setState({ signin_modal: !this.state.signin_modal }) }
    handleCloseModal = () => { this.setState({ signin_modal: false }) }
    handleSignIn = (success) => { this.setState({ valid: success, signin_modal: false }) }
    handleSignOut = () => { this.setState({ valid: false }) }
    gotoMyDetail = () => { window.location.href = "/designerDetail" }
    gotoSignUp = () => { window.location.href = "/signup" }
    _popup = () => { this.setState({ user_popup: !this.state.user_popup }) }
    render() {
        const User = () => {
            return (
                <UserProfile onClick={this._popup}>
                    <img />
                    {this.props.nickname}
                    {this.state.user_popup &&
                        <UserPopup>
                            <UserPopupMenu onClick={this.gotoMyDetail}>마이페이지</UserPopupMenu>
                            <UserPopupMenu onClick={this.handleSignOut}>로그아웃</UserPopupMenu>
                        </UserPopup>
                    }
                </UserProfile>)
        }
        const NonUser = () => {
            return (
                <div style={{ display: "flex" }}>
                    <div style={{ marginLeft: "0px" }} onClick={this._open_signin_modal}>로그인</div>
                    <div style={{ marginLeft: "15px" }} onClick={this.gotoSignUp}>회원가입</div>
                </div>)
        }
        return (
            <SignNavContainer onClick={this._handleClick}>
                {this.state.valid ? <User /> : <NonUser />}
                {this.state.signin_modal && <SignInModal open={this.state.signin_modal} signin={this.handleSignIn} close={this.handleCloseModal} />}
            </SignNavContainer>
        )
    }
}
export default SignNav 