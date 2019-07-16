<<<<<<< HEAD
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// pages
import MainPage from "pages/Main"
import TourPage from "pages/Tour"
import DesignListPage from "pages/DesignList"
import GroupListPage from "pages/GroupList"
import DesignerListPage from "pages/DesignerList"
import CreateDesignPage from "pages/CreateDesign"
import DesignDetailPage from "pages/DesignDetail"
import DesignerDetailPage from "pages/DesignerDetail"
import CreateGroupPage from "pages/CreateGroup"
import GroupDetailPage from "pages/GroupDetail"
import MessagesPage from "pages/Messages"
import SignUpPage from "pages/SignUp"
import NotFoundPage from "pages/NotFound"

// template
import ClientTemplate from "templates/ClientTemplate"

// temporary
import host from "./config"

function App() {
  console.log("backend: ", host)
  console.log("process.env: ", process.env)

  return (
    <BrowserRouter>
      <ClientTemplate>
        <Switch>
          {/* index */}
          <Route exact path="/" component={MainPage} />
          <Route path="/tour" component={TourPage} />
          {/* design */}
          <Route path="/design" component={DesignListPage} />
          <Route path="/createDesign" component={CreateDesignPage} />
          <Route path="/designDetail" component={DesignDetailPage} />
          {/* designer */}
          <Route path="/designer" component={DesignerListPage} />
          <Route path="/designerDetail" component={DesignerDetailPage} />
          {/* group */}
          <Route path="/group" component={GroupListPage} />
          <Route path="/createGroup" component={CreateGroupPage} />
          <Route path="/groupDetail" component={GroupDetailPage} />
          {/* mics. */}
          <Route path="/messages" component={MessagesPage} />
          <Route path="/signup" component={SignUpPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </ClientTemplate>
    </BrowserRouter>
  )
}

export default App
=======
import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DesignListPage, { DesignDetailPage } from "pages/DesignPage";
import GroupListPage, { GroupDetailPage } from "pages/GroupPage";
import DesignerListPage, { DesignerDetailPage } from "pages/DesignerPage";
import CreateDesignPage from "pages/CreateDesignPage";
import ModifyDesignPage from "pages/ModifyDesignPage";
import CreateGroupPage from "pages/CreateGroupPage";
import ModifyGroupPage from "pages/ModifyGroupPage";
import InserUserDetailPage from "pages/InserUserDetailPage"
import SignUpPage from "pages/SignUpPage";
import SignInPage from "pages/SignInPage";
import RequiresAuth from "containers/Commons/RequiresAuth";
import MainPage from "pages/MainPage/MainPage";
import FooterPage from "pages/FooterPage";
import MyDetailPage from "pages/MyDetailPage";
import MyDetailModifyPage from "pages/MyDetailModifyPage";
import ResetPwPage from "pages/ResetPwPage";
import { GetCategoryLevel1Request, GetCategoryLevel2Request, GetCategoryAllRequest } from "actions/Categorys";
import SearchPage from "pages/SearchPage";
import MessagePage from "pages/MessagePage";

class App extends Component {
  componentDidMount(){
    this.props.GetCategoryLevel1Request().then(() => {
      this.props.GetCategoryLevel2Request(null);
    });
    this.props.GetCategoryAllRequest();
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainPage}/>
          <Route path="/createdesign" component={RequiresAuth(CreateDesignPage)}/>
          <Route path="/designDetail/:id" component={DesignDetailPage}/>
          <Route path="/design/:sorting?/:cate1?/:cate2?" component={DesignListPage}/>
          <Route path="/createGroup" component={RequiresAuth(CreateGroupPage)}/>
          <Route path="/designModify/:id" component={RequiresAuth(ModifyDesignPage)}/>
          <Route path="/groupDetail/:id/modify" component={RequiresAuth(ModifyGroupPage)}/>
          <Route path="/groupDetail/:id/:sorting?" component={GroupDetailPage}/>
          <Route path="/group/:sorting?" component={GroupListPage}/>
          <Route path="/designerDetail/:id/:type?" component={DesignerDetailPage}/>
          <Route path="/designer/:sorting?/:cate1?/:cate2?" component={DesignerListPage}/>
          <Route path="/signup" component={SignUpPage}/>
          <Route path="/signin" component={SignInPage}/>
          <Route path="/inserUserDetail" component={RequiresAuth(InserUserDetailPage)}/>
          <Route path="/myPage/:type?/:type2?" component={RequiresAuth(MyDetailPage)}/>
          <Route path="/myPage" component={RequiresAuth(MyDetailPage)}/>
          <Route path="/myModify" component={RequiresAuth(MyDetailModifyPage)}/>
          <Route path="/Term/:page" component={FooterPage}/>
          <Route path="/Privacy/:page" component={FooterPage}/>
          <Route path="/Info/:page" component={FooterPage}/>
          <Route path="/search/:type?/:sort?/:keyword?" component={SearchPage}/>
          <Route path="/message/:id?/:name?" component={RequiresAuth(MessagePage)}/>
          <Route path="/resetPw" component={ResetPwPage}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    GetCategoryLevel1Request: () => {
      return dispatch(GetCategoryLevel1Request());
    },
    GetCategoryLevel2Request: (id) => {
      return dispatch(GetCategoryLevel2Request(id));
    },
    GetCategoryAllRequest: () => {
      return dispatch(GetCategoryAllRequest());
    }
  };
};

export default connect(null, mapDispatchToProps)(App);
>>>>>>> d451c5fa80bf0a4cd1c0565cf5cff1f3b0edae71
