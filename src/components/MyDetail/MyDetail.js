import React, { Component } from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import { Grid, Icon } from "semantic-ui-react";
import MyDesignContainer from "containers/MyPage/MyDesignContainer";
import MyGroupContainer from "containers/MyPage/MyGroupContainer";
import MyLikeDesignContainer from "containers/MyPage/MyLikeDesignContainer";
import MyLikeDesignerContainer from "containers/MyPage/MyLikeDesignerContainer";

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
    min-height: 40px;
    font-weight: bold;
    font-size: 24px;
    text-align: center;
    padding: 10px 0;
  }
  & .category {
    min-height: 20px;
    text-align: center;
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
    padding: 0 30px;
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


class MyDetail extends Component {
  componentWillMount() {
    this.props.GetMyDetailRequest(this.props.token);
    this.props.GetMyDesignListRequest(this.props.token);
  }

  typeChange = (e) => {
    let url = "/myPage"+e.target.id;
    this.props.history.replace(url, {token: this.props.token});
  }

  render(){
    let MyInfo = this.props.MyDetail;
    let count;
    if (MyInfo.count != null) {
      count = MyInfo.count;
    } else {
      count = {
        total_like: 0,
        total_design: 0,
        total_group: 0,
        total_view: 0
      };
    }

    return(
      <div>
        {MyInfo !== null &&
          <Container>
            <Wrapper padded={false} columns={2}>
              <Grid.Row className="edit">
                <button>내 정보 수정</button>
              </Grid.Row>
              <Grid.Row>
                <HeadContainer width={4}>
                  <ProfileSection>
                    <div className="imgContainer">
                      <div>{MyInfo.thumbnailUrl? <img src={MyInfo.thumbnailUrl} alt="프로필 이미지"/> : "등록된 이미지 없음"}</div>
                    </div>
                    <div className="title">
                      <h3>{MyInfo.nick_name}</h3>
                    </div>
                    <div className="category">
                      {MyInfo.categoryName}
                    </div>
                  </ProfileSection>
                  <CountSection>
                    <div className="list">
                      <Icon name="signup" color="grey" size="tiny"></Icon> 등록한 디자인
                      <span>{count.total_design}</span>
                    </div>
                    <div className="list">
                      <Icon name="window restore" color="grey" size="tiny"></Icon> 등록한 그룹
                      <span>{count.total_group}</span>
                    </div>
                    <div className="list">
                      <Icon name="user" color="grey" size="tiny"></Icon> 내 조회수
                      <span>{count.total_view}</span>
                    </div>
                    <div className="list">
                      <Icon name="heart" color="grey" size="tiny"></Icon> 내가 받은 좋아요
                      <span>{count.total_like}</span>
                    </div>
                  </CountSection>
                  <InfoSection>
                    <h4>소개</h4>
                    <p className="explanation">{MyInfo.explanation}</p>
                  </InfoSection>
                </HeadContainer>
                <TabContainer width={12}>
                  <Head devided="vertically" padded={true}>
                    <Grid.Row>
                      <Grid.Column as="ul">
                        <li id="/design"
                            className={this.props.type === "design" || this.props.type === null? "onSelected" : ""}
                            onClick={this.typeChange}>내 디자인</li>
                        <li id="/group"
                            className={this.props.type === "group"? "onSelected" : ""}
                            onClick={this.typeChange}>내 그룹</li>
                        <li id="/likeDesign"
                            className={this.props.type === "likeDesign"? "onSelected" : ""}
                            onClick={this.typeChange}>좋아요한 디자인</li>
                        <li id="/likeDesigner"
                            className={this.props.type === "likeDesigner"? "onSelected" : ""}
                            onClick={this.typeChange}>좋아요한 디자이너</li>
                        <div className="clear"></div>
                      </Grid.Column>
                    </Grid.Row>
                  </Head>
                  <ContentBox>
                    <Route path="/myPage/:type?"
                           component={this.props.type === "likeDesigner"? MyLikeDesignerContainer
                                      : this.props.type === "likeDesign"? MyLikeDesignContainer
                                      : this.props.type === "group"? MyGroupContainer
                                      : MyDesignContainer}/>
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

export default MyDetail;
