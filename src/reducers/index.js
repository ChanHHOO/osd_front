import Authentication from "./Authentication";
import { DesignList, DesignDetail, DesignDetailView, DesignDetailStep, DesignDetailStepCard, DesignCardComment, DesignIssueList, DesignIssueComment, DesignLike, DeleteDesign, ChangeToProject, UpdateDesign, DesignSourceDetail } from "reducers/Designs";
import { DesignerList, DesignerLike, DesignerDetail } from "reducers/Designers";
import { CreateGroup, GroupLike, GroupList, GroupDetail, GroupWaitingList, MyList, DeleteGroup, GroupIssue } from "reducers/Groups";
import { SignIn, SignUp } from "reducers/Registration";
import { UserInfo, MyDetail } from "reducers/Users";
import { MessageList, MessageDetail } from "reducers/Messages";
import { Categorys, CategoryAll } from "reducers/Categorys";
import { reducer as formReducer } from 'redux-form';
import { Search, SearchIssue, TopList } from "reducers/Commons";
import OpenDesign from "reducers/OpenDesign";

import { combineReducers } from "redux";

export default combineReducers({
    Authentication,
    DesignList,
    DesignDetail,
    DesignDetailView,
    DesignDetailStep,
    DesignDetailStepCard,
    DesignSourceDetail,
    DesignCardComment,
    DesignIssueList,
    DesignIssueComment,
    DesignLike,
    DeleteDesign,
    ChangeToProject,
    UpdateDesign,
    CreateGroup,
    GroupLike,
    GroupList,
    GroupDetail,
    GroupWaitingList,
    MyList,
    DeleteGroup,
    GroupIssue,
    DesignerList,
    DesignerLike,
    DesignerDetail,
    SignIn,
    SignUp,
    UserInfo,
    Categorys,
    CategoryAll,
    form: formReducer,
    MyDetail,
    Search,
    SearchIssue,
    TopList,
    OpenDesign,
    MessageList,
    MessageDetail
});
