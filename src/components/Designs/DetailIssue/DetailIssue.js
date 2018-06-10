import React, { Component } from "react";
import styled from "styled-components";
import { Link, Route, Switch } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import CreateIssue from "./CreateIssue.js";
import DetailIssueDetailContainer from "containers/Designs/DetailIssueDetailContainer";

// css styling
const IssueWrapper = styled(Grid)`
  min-width: 660px;
  position: relative;
  background-color: #fff;
  &.ui.grid {
    padding: 1rem;
  }
  & .noData {
    font-size: 14px;
    text-align: center;
  }
`;

const SearchWrapper = styled(Grid.Row)`
  & .ui.icon.input {
    width: 90%;
  }
`;

const ListWrapper = styled.div`
  width: 100%;
  margin-top: 15px;
`;

const List = styled.div`
  height: 100%;
  float: none;
  margin: auto;
  & li {
    cursor: pointer;
    height: 40px;
    width: 100%;
    line-height: 40px;
    border-bottom: 1px solid #e6ebf1;
  }
  & li:hover {
    background-color: #e6ebf1;
  }
  & li div {
    float: left;
    text-align: center;
    font-size: 13px;
  }
  & li .order {
    width: 10%;
  }
  & li .title {
    width: 50%;
    text-align: left;
    font-size: 14px;
    padding-left: 10px;
  }
  & li .user {
    width: 15%;
  }
  & li .date {
    width: 15%;
  }
  & li .cmtCount {
    width: 10%;
  }
  & li .flag {
    background-color: #0366d6;
    color: #fff;
    font-size: 13px;
    margin-left: 10px;
  }
  & li .flag.done {
    background-color: #f00;
  }
`;

class DetailIssue extends Component {
  render(){
    let issue = this.props.DesignDetailIssue;
    let user = this.props.location.state.user;
    const IssueList = () => {
      return (
        <div>
          <IssueWrapper>
            <SearchWrapper columns={2}>
              <Grid.Column>              
                <div className="ui icon input">
                  <input type="text" value="" tabIndex="0" className="prompt" autoComplete="off" />
                  <i aria-hidden="true" className="search icon"></i>
                </div>
              </Grid.Column>
              <Grid.Column textAlign="right">
                <Link to={ {pathname: this.props.match.url+"/createIssue",
                            state: {id: this.props.id}} }>
                  <button className="ui button">글쓰기</button>
                </Link>
              </Grid.Column>
            </SearchWrapper>
            <ListWrapper>
            {issue.length !== 0?
              <ul>
                {issue.map(list =>
                <Link key={list.uid} to={ {pathname: this.props.match.url+"/detailIssue/"+list.uid,
                                          state: { id: this.props.match.params.id, issue_id: list.uid }} }>
                  <List>
                    <li>
                      <div className="order">{list.uid}</div>
                      <div className="title">
                      {list.title}
                      {list.is_complete === 0? <span className="flag ing">진행중</span> : <span className="flag done">완료</span>}
                      </div>
                      <div className="user">{list.userName}</div>
                      <div className="date">{list.create_time.split("T")[0]}</div>
                      <div className="cmtCount">{list.commentCount["count(*)"]}</div>
                    </li>
                  </List>
                </Link>
                )}
              </ul>
              :
              <div className="noData">
                  <p>등록된 이슈가 없습니다.</p>
              </div>
              }
            </ListWrapper>
          </IssueWrapper>
        </div>
      );
    }
    return(
      <div>
        <Route exact path={this.props.match.url} component={IssueList}/>
        <Route exact path={this.props.match.url+"/createIssue"} component={CreateIssue}/>
        <Route exact path={this.props.match.url+"/detailIssue/:issue_id"} component={DetailIssueDetailContainer}/>
      </div>
    );
  }
}

export default DetailIssue;
