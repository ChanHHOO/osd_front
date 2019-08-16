import { reducer as formReducer } from 'redux-form'

import Authentication from "./auth"
import Account from "./account"
import Category from "./category"
import { Design, DesignCard, DesignComment, DesignList } from "./design"
import { Designer } from "./designer"
import { Group, GroupList } from "./group"
import Search from "./search"
import Personal from "./personal"
import Message from "./message"

import { combineReducers } from "redux"

export default combineReducers({
    form: formReducer,
    Account, Authentication,
    Category,
    Design, DesignCard, DesignComment, DesignList,
    Designer,
    Group, GroupList,
    Search, Personal, Message
})
