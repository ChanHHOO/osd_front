import * as types from 'actions/ActionTypes';
import host from "config";

export function GetGroupListRequest(page, sort) {
  return (dispatch) => {
    return fetch(`${host}/group/groupList/`+page+"/"+sort, {
      headers: { 'Content-Type': 'application/json' },
      method: "get"
    }).then((response) => {
        return response.json();
      }).then((data) => {
        console.log("group data >>", data);
        if (!data) {
          console.log("no data");
          data = [];
        }
        if (page === 0) {
          dispatch(GroupListClear(data));
          return;
        }
        dispatch(GetGroupList(data));
      }).catch((error) => {
        dispatch(GroupListFail());
        console.log("err", error);
      });
  }
};

export function GetGroupList(data) {
  return {
    type: types.GET_GROUP_LIST,
    GroupList : data
  }
};

export function GroupListClear(data) {
  return {
    type: types.GROUP_LIST_CLEAR,
    GroupList: data,
    GroupListAdded: []
  }
}

export function GroupListFail() {
  return {
    type: types.GROUP_LIST_FAIL,
    GroupList: [],
    GroupListAdded: []
  }
}

export function GetGroupDetailRequest(id) {
  return (dispatch) => {
    return fetch(`${host}/group/groupDetail/`+id, {
      headers: { "Content-Type": "application/json" },
      method: "get"
    }).then((response) => {
        return response.json();
      }).then((data) => {
        console.log("group Detail data >>", data);
        if (!data) {
          console.log("no data");
          data = [];
        }
        dispatch(GetGroupDetail(data));
      }).catch((error) => {
        console.log("err", error);
      });
  }
};

export function GetGroupDetail(data) {
  return {
    type: types.GET_GROUP_DETAIL,
    GroupDetail : data
  }
};

// 그룹 안에 속한 디자인 리스트 가져오기
export function GetDesignInGroupRequest(id, page, sort) {
  return (dispatch) => {
    return fetch(`${host}/group/groupDetail/`+id+"/design/"+page+"/"+sort, {
      headers: { "Content-Type": "application/json" },
      method: "get"
    }).then((response) => {
        return response.json();
      }).then((data) => {
        console.log("design in group data >>", data);
        if (!data) {
          console.log("no data");
          data = [];
        }
        if (page === 0) {
          dispatch(DesignInGroupClear(data));
          return;
        }
        dispatch(GetDesignInGroup(data));
      }).catch((error) => {
        console.log("err", error);
      });
  }
};

export function GetDesignInGroup(data) {
  return {
    type: types.GET_DESIGN_IN_GROUP,
    DesignInGroup : data
  }
};

export function DesignInGroupClear(data) {
  return {
    type: types.GET_DESIGN_IN_GROUP_CLEAR,
    DesignInGroup: data,
    DesignInGroupAdded: []
  }
};

// 그룹 안에 속한 그룹 리스트 가져오기
export function GetGroupInGroupRequest(id, page, sort) {
  return (dispatch) => {
    return fetch(`${host}/group/groupDetail/`+id+"/group/"+page+"/"+sort, {
      headers: { "Content-Type": "application/json" },
      method: "get"
    }).then((response) => {
        return response.json();
      }).then((data) => {
        console.log("group in group data >>", data);
        if (!data) {
          console.log("no data");
          data = [];
        }
        if (page === 0) {
          dispatch(GroupInGroupClear(data));
          return;
        }
        dispatch(GetGroupInGroup(data));
      }).catch((error) => {
        console.log("err", error);
      });
  }
};

export function GetGroupInGroup(data) {
  return {
    type: types.GET_GROUP_IN_GROUP,
    GroupInGroup : data
  }
};

export function GroupInGroupClear(data) {
  return {
    type: types.GET_GROUP_IN_GROUP_CLEAR,
    GroupInGroup: data,
    GroupInGroupAdded: []
  }
};

export function CreateNewGroupRequest(data) {
  return (dispatch) => {
    dispatch(CreateNewGroup());
    return fetch(`${host}/group/createGroup`, {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(data)
    }).then((response) => {
      return response.json();
    }).catch((error) => {
      dispatch(CreateGroupFailure());
      console.log(error);
    })
  }
};

export function CreateNewGroup() {
  return {
    type: types.CREATE_NEW_GROUP
  }
};

export function CreateGroupFailure() {
  return {
    type: types.CREATE_GROUP_FAILURE
  }
};
