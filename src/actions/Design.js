import * as types from "actions/ActionTypes";
import host from "config";

export function GetDesignListRequest(page, sort, cate1, cate2) {
  return (dispatch) => {
    return fetch(`${host}/design/designList/`+page+"/"+sort+"/"+cate1+"/"+cate2, {
      headers: { "Content-Type": "application/json" },
      method: "get"
    }).then((response) => {
        return response.json();
      }).then((data) => {
        console.log("design data >>", data);
        if (!data) {
          console.log("no data");
          data = [];
        }
        if (page === 0) {
          dispatch(DesignListClear(data));
          return;
        }
        dispatch(GetDesignList(data));
      }).catch((error) => {
        console.log("err", error);
      })
  }
};

export function GetDesignList(data) {
  return {
    type: types.GET_DESIGN_LIST,
    DesignList : data
  }
};

export function DesignListClear(data) {
  return {
    type: types.DESIGN_LIST_CLEAR,
    DesignList: data,
    DesignListAdded: []
  }
}

export function GetDesignDetailRequest(id) {
  return (dispatch) => {
    return fetch(`${host}/design/designDetail/`+id, {
      headers: { "Content-Type": "application/json" },
      method: "get"
    }).then((response) => {
        return response.json();
      }).then((data) => {
        console.log("design Detail data >>", data);
        if (!data) {
          console.log("no data");
          data = [];
        }
        dispatch(GetDesignDetail(data));
      }).catch((error) => {
        console.log("err", error);
      })
  }
};

export function GetDesignDetail(data) {
  return {
    type: types.GET_DESIGN_DETAIL,
    DesignDetail : data
  }
};

export function GetDesignDetailViewRequest(id) {
  return (dispatch) => {
    return fetch(`${host}/design/designDetail/`+id+"/view", {
      headers: { "Content-Type": "application/json" },
      method: "get"
    }).then((response) => {
        return response.json();
      }).then((data) => {
        console.log("design Detail View data >>", data);
        if (!data || data.length === 0) {
          console.log("no data");
          data = [];
        }
        dispatch(GetDesignDetailView(data));
      }).catch((error) => {
        console.log("err", error);
      })
  }
};

export function GetDesignDetailView(data) {
  return {
    type: types.GET_DESIGN_DETAIL_VIEW,
    DesignDetailView : data
  }
};

export function GetDesignDetailStepRequest(id) {
  return (dispatch) => {
    return fetch(`${host}/design/designDetail/`+id+"/step", {
      headers: { "Content-Type": "application/json" },
      method: "get"
    }).then((response) => {
        return response.json();
      }).then((data) => {
        console.log("design Detail Step data >>", data);
        if (!data) {
          console.log("no data");
          return;
        } else {
          dispatch(GetDesignDetailStep(data));
        }
      }).catch((error) => {
        console.log("err", error);
      })
  }
};

export function GetDesignDetailStep(data) {
  return {
    type: types.GET_DESIGN_DETAIL_STEP,
    DesignDetailStep : data
  }
};

export function GetDesignDetailStepCardRequest(id, card_id) {
  return (dispatch) => {
    return fetch(`${host}/design/designDetail/`+id+"/cardDetail/"+card_id, {
      headers: { "Content-Type": "application/json" },
      method: "get"
    }).then((response) => {
        return response.json();
      }).then((data) => {
        console.log("design Detail Card data >>", data);
        if (!data || data.length === 0) {
          console.log("no data");
          return;
        } else {
          dispatch(GetDesignDetailStepCard(data));
        }
      }).catch((error) => {
        console.log("err", error);
      })
  }
};

export function GetDesignDetailStepCard(data) {
  return {
    type: types.GET_DESIGN_DETAIL_STEP_CARD,
    DesignDetailStepCard : data
  }
};

export function GetDesignDetailIssueRequest(id) {
  return (dispatch) => {
    return fetch(`${host}/design/designDetail/`+id+"/issue", {
      headers: { "Content-Type": "application/json" },
      method: "get"
    }).then((response) => {
        return response.json();
      }).then((data) => {
        console.log("design Detail Issue data >>", data);
        if (!data || data.length === 0) {
          console.log("no data");
          return;
        } else {
          dispatch(GetDesignDetailIssue(data));
        }
      }).catch((error) => {
        console.log("err", error);
      })
  }
};

export function GetDesignDetailIssue(data) {
  return {
    type: types.GET_DESIGN_DETAIL_ISSUE,
    DesignDetailIssue : data
  }
};
