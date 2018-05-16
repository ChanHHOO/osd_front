import Authentication from "./Authentication";
import { DesignList, DesignDetail, DesignDetailView, DesignDetailStep, DesignDetailStepCard, DesignDetailIssue } from "reducers/Designs";
import { DesignerList } from "reducers/Designers";
import { GroupList, GroupDetail } from "reducers/Groups";
import { SignIn, SignUp } from "reducers/Registration";
import { UserInfo } from "reducers/Users";
import { Categorys } from "reducers/Categorys";
import { reducer as formReducer } from 'redux-form';
import MyDetail from "./MyDetail";

import { combineReducers } from "redux";

export default combineReducers({
    Authentication,
    DesignList,
    DesignDetail,
    DesignDetailView,
    DesignDetailStep,
    DesignDetailStepCard,
    DesignDetailIssue,
    GroupList,
    GroupDetail,
    DesignerList,
    SignIn,
    SignUp,
    UserInfo,
    Categorys,
    form: formReducer,
    MyDetail
});
