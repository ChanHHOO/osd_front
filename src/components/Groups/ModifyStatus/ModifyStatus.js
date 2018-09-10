import React, { Component } from 'react';
import { Modal } from "semantic-ui-react";
import Button from "components/Commons/Button";
import styled from "styled-components";
import MyExistDesignListContainer from "containers/Groups/MyExistDesignListContainer";
import MyExistGroupListContainer from "containers/Groups/MyExistGroupListContainer";

const ModalContent = styled.div`
  padding: 30px;
`;

const ModalBtn = styled(Button)`
`;

const ExitGroupWrap = styled.div`
  display: inline-block;
`;

const Title = styled.h2`
  margin-bottom: 2rem;
`;

const ExitTab = styled.div`
  border-bottom: 1px solid rgba(0,0,0,0.1);
  margin-bottom: 2rem;
  &::after{
    display: block;
    content: "";
    clear: both;
  }
`;

const TabItem = styled.button`
  padding: 1rem 2.5rem;
  border: 0;
  background-color: transparent;
  &.active{
    color: #EB3324;
  }
`;

class ModifyStatus extends Component {
  state = {
    open: false,
    active: "design"
  }

  handleModal = () => {
    if (!this.props.token) {
      alert("로그인을 해주세요.");
      return;
    } else {
      this.setState({ open: true });
    }
  }

  handleCloseModal = () => {
    this.setState({ open: false, active: "design" });
  }

  handleChangeTab = (tab) => {
    this.setState({ active: tab });
  }

  render(){
    return(
      <ExitGroupWrap>
        <ModalBtn color="Solid" onClick={this.handleModal}>그룹 탈퇴</ModalBtn>
        <Modal open={this.state.open}
               closeOnEscape={true}
               closeOnDimmerClick={true}
               onClose={this.handleCloseModal}>
          <Modal.Content>
            <ModalContent>
              <Title>그룹 탈퇴하기</Title>
              <ExitTab>
                <TabItem className={this.state.active === "design" && "active"} onClick={() => this.handleChangeTab("design")} >디자인</TabItem>
                <TabItem className={this.state.active === "group" && "active"} onClick={() => this.handleChangeTab("group")} >그룹</TabItem>
              </ExitTab>
              { this.state.active === "design"
                ? <MyExistDesignListContainer handleCloseModal={this.handleCloseModal} id={this.props.id}/>
                : this.state.active === "group"
                ? <MyExistGroupListContainer handleCloseModal={this.handleCloseModal} id={this.props.id}/>
                : null }
            </ModalContent>
          </Modal.Content>
        </Modal>
      </ExitGroupWrap>
    );
  }
}

export default ModifyStatus;
