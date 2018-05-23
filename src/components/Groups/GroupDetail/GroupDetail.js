import React, { Component } from "react";
import { NavLink, Route, Link } from "react-router-dom";
import styled from "styled-components";
import { Grid, Icon } from "semantic-ui-react";
import Sorting from "components/Commons/Sorting";
import DesignInGroupContainer from "containers/Groups/DesignInGroupContainer";
import GroupInGroupContainer from "containers/Groups/GroupInGroupContainer";

// css styling

const Container = styled.div`
  width: 95%;
  margin: auto;
  min-width: 660px;
`;

const Wrapper = styled(Grid)`
  width: 100%;
  box-shadow: 3px 3px 3px rgba(0,0,0,0.3);
  &.ui.grid {
    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-left: 0rem;
    margin-right: 0rem;
  }
  &.ui.grid > .row,
  &.ui.grid > .row > .column {
    padding: 0;
  }
  & .edit {
    height: 30px;
    margin-bottom: 5px;
  }
  & .edit button {
    padding: 7px 14px;
    border-radius: 3px;
  }
`;

const HeadContainer = styled(Grid.Column)`
  border-right: 1px solid rgba(0,0,0,0.15);
  box-shadow: 0 0 5px rgba(0,0,0,0.25);
`;

const ProfileSection = styled.div`
  border-bottom: 1px solid rgba(0,0,0,0.15);
  padding: 1rem;
  & .imgContainer {
    width: 100%;
    height: 140px;
  }
  & .imgContainer > div {
    width: 140px;
    height: 140px;
    margin: auto;
    border-radius: 50%;
    border: 1px solid rgba(0,0,0,0.25);
    overflow: hidden;
  }
  & .title {
    min-height: 80px;
    font-weight: bold;
    font-size: 24px;
    text-align: center;
    padding: 10px 0;
  }
  & .issueContainer {
    min-height: 30px;
    line-height: 30px;
    font-weight: bold;
  }
  & .btnContainer {
    height: 60px;
    line-height: 60px;
    text-align: center;
    & button {
      margin-left: 10px;
      margin-right: 10px;
    }
  }
`; 

const CountSection = styled.div`
  padding: 1rem 2rem;
  & .list {
    height: 24px;
    width: 100%;
    font-size: 13px;
  }
  & .list span {
    float: right;
    font-size: 18px;
  }
`; 

const InfoSection = styled.div`
  padding: 1rem;
  & .explanation {
    font-size: 13px;
  }
`; 

const TabContainer = styled(Grid.Column)`
  background-color: white;
  & .columns {
    padding: 0 20px;
  } 
  & .ui.default.dropdown:not(.button)>.text, .ui.dropdown:not(.button)>.default.text {
    color: inherit;
  }
`;

const Head = styled(Grid)`
  border-bottom: 1px solid rgba(0,0,0,0.25);
  &.ui.grid > .row {
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;
  }
  & ul {
    line-height: 38px;
  }
  & li {
    float: left;
    width: 100px;
    text-align: center;
    cursor: pointer;
  }
  & li:hover {
    font-weight: 500;
  }
  & li.onSelected {
    color: red;
    position: relative;
  }
`;

const ContentBox = styled.div`
  width: 100%;
  padding: 0 3rem;
`;


class GroupDetail extends Component {
  state = {
    id: this.props.id,
    activeMoreBtn: false,
    activeIssue: false
  };

  componentWillMount() {
    this.props.GetGroupDetailRequest(this.props.id); // 그룹에 대한 디테일 정보
  }

  typeChange = (e) => {
    let url = "/groupDetail/"+this.props.id+"/"+e.target.id+"/"+this.props.sort;
    this.props.history.replace(url);
  }

  sortChange = (e, {value}) => {
    let type = this.props.type;
    let url = "/groupDetail/"+this.props.id;
    this.props.history.replace(`${url}/${type}/${value}`);
  }

  render(){
    let groupDetail = this.props.GroupDetail;
    let count;
    if (groupDetail.count != null) {
      count = groupDetail.count;
    } else {
      count = {
        member: 0,
        like: 0,
        design: 0,
        group: 0
      };
    }

    return(
      <div>
        {groupDetail.length !== 0 &&
          <Container>
            <Wrapper padded={false} columns={2}>
              <Grid.Row className="edit">
              { (this.props.userInfo && (this.props.userInfo.uid === groupDetail.user_id))? 
                <button>그룹 정보 수정</button> 
                : <div></div>
              }
              </Grid.Row>
              <Grid.Row>
                <HeadContainer width={4}>
                  <ProfileSection>
                    <div className="imgContainer">
                      <div>{groupDetail.thumbnailUrl? groupDetail.thumbnailUrl : "등록된 이미지 없음"}</div>
                    </div>
                    <div className="title">
                      <h3>{groupDetail.title}</h3>
                    </div>
                    <div className="issueContainer">
                      {groupDetail.issue == null? "공지가 없습니다" : groupDetail.issue.title}
                    </div>
                    <div className="btnContainer">
                      <button className="red">좋아요</button>
                      <button className="red">지난 공지</button>
                    </div>
                  </ProfileSection>
                  <CountSection>
                    <div className="list">
                      <Icon name="signup" color="grey" size="tiny"></Icon> 디자인 수
                      <span>{count.design}</span>
                    </div>
                    <div className="list">
                      <Icon name="window restore" color="grey" size="tiny"></Icon> 그룹 수
                      <span>{count.group}</span>
                    </div>
                    <div className="list">
                      <Icon name="user" color="grey" size="tiny"></Icon> 그룹장
                      <span>{groupDetail.userName}</span>
                    </div>
                    <div className="list">
                      <Icon name="heart" color="grey" size="tiny"></Icon> 좋아요
                      <span>{count.like}</span>
                    </div>
                  </CountSection>
                  <InfoSection>
                    <h4>소개</h4>
                    <p className="explanation">{groupDetail.explanation}</p>
                  </InfoSection>
                </HeadContainer>
                <TabContainer width={12}>
                  <Head devided="vertically" padded={true} columns={2}>
                    <Grid.Row>
                      <Grid.Column as="ul">
                        <li id="design" 
                            className={this.props.type === "design" || this.props.type === null? "onSelected" : ""}
                            onClick={this.typeChange}>디자인</li>
                        <li id="group" 
                            className={this.props.type === "group"? "onSelected" : ""}
                            onClick={this.typeChange}>그룹</li>
                        <div className="clear"></div>
                      </Grid.Column>
                      <Sorting computer={8} tablet={8} mobile={8} handleChange={this.sortChange}/>
                    </Grid.Row>
                  </Head>
                  <ContentBox>
                    <Route path="/groupDetail/:id/:type?/:sort?" 
                           component={this.props.type === "group"? GroupInGroupContainer : DesignInGroupContainer}/>
                  </ContentBox>
                </TabContainer>
              </Grid.Row>
            </Wrapper>
          </Container>
        }
      </div>
    );
  }
}

export default GroupDetail;