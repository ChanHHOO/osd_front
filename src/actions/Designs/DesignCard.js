import * as types from "actions/ActionTypes";
import host from "config";

export const CreateDesignCardRequest = (data, design_id, board_id, token) => {
  return (dispatch) => {
    dispatch(CreateCard());
    console.log("request", data);
    return fetch(`${host}/design/designDetail/${design_id}/${board_id}/createCard`, { headers: { "x-access-token": token, 'Content-Type': 'application/json' }, method: "POST", body: JSON.stringify(data) })
      .then(function (res) {
        return res.json();
      })
      .then(function (res) {
        console.log("insert detail", res.desing_id);
        return dispatch(CreateCardSuccess(res));
      }).catch((error) => {
        console.log("insert detail err", error);
        return dispatch(CreateCardFailure(error));
      });
  };
};

export const CreateCard = () => {
  return {
    type: types.CREATE_CARD
  };
};

export const CreateCardSuccess = (res) => {
  return {
    type: types.CREATE_CARD_SUCCESS,
    success: res.success
  };
};

export const CreateCardFailure = (error) => {
  return {
    type: types.CREATE_CARD_FAILURE,
    success: error.success,
  };
};

export const GetDesignCardRequest = (id, board_id) => {
  return (dispatch) => {
    dispatch(GetCard(board_id));
    return fetch(`${host}/design/designDetail/${id}/${board_id}/getCardList`, { headers: { 'Content-Type': 'application/json' }, method: "GET" })
      .then(function (res) {
        return res.json();
      })
      .then(function (res) {
        console.log(res);
        return dispatch(GetCardSuccess(res, board_id));
      }).catch((error) => {
        console.log("insert detail err", error);
        return dispatch(GetCardFailure(error));
      });
  };
};

export const GetCard = (id) => {
  return {
    type: types.GET_CARD,
    id
  };
};

export const GetCardSuccess = (res, id) => {
  return {
    type: types.GET_CARD_SUCCESS,
    success: res.success,
    list: res.list,
    id
  };
};

export const GetCardFailure = (error) => {
  return {
    type: types.GET_CARD_FAILURE,
    success: error.success,
  };
};

export const GetCardDetailRequest = (id) => {
  return (dispatch) => {
    dispatch(GetCardDetail());
    return fetch(`${host}/design/designDetail/getCardDetail/${id}`, { headers: { 'Content-Type': 'application/json' }, method: "GET" })
      .then(function (res) {
        return res.json();
      })
      .then(function (res) {
        console.log(res);
        return dispatch(GetCardDetailSuccess(res));
      }).catch((error) => {
        console.log("insert detail err", error);
        return dispatch(GetCardDetailFailure(error));
      });
  };
};

export const GetCardDetail = () => {
  return {
    type: types.GET_CARD_DETAIL
  };
};

export const GetCardDetailSuccess = (res) => {
  return {
    type: types.GET_CARD_DETAIL_SUCCESS,
    success: res.success,
    detail: res.detail
  };
};

export const GetCardDetailFailure = (error) => {
  return {
    type: types.GET_CARD_DETAIL_FAILURE,
    success: error.success,
  };
};

export const UpdateCardTitleRequest = (data, token, id) => {
  return (dispatch) => {
    dispatch(UpdateCardTitle());
    return fetch(`${host}/design/designDetail/updateCardTitle/${id}`, { headers: { "x-access-token": token, 'Content-Type': 'application/json' }, method: "POST", body: JSON.stringify(data) })
      .then(function (res) {
        return res.json();
      })
      .then(function (res) {
        console.log(res);
        return dispatch(UpdateCardTitleSuccess(res));
      }).catch((error) => {
        console.log("insert detail err", error);
        return dispatch(UpdateCardTitleFailure(error));
      });
  };
};

export const UpdateCardTitle = (id) => {
  return {
    type: types.UPDATE_CARD_TITLE,
    id
  };
};

export const UpdateCardTitleSuccess = (res, id) => {
  return {
    type: types.UPDATE_CARD_TITLE_SUCCESS,
    success: res.success,
    list: res.list,
    id
  };
};

export const UpdateCardTitleFailure = (error) => {
  return {
    type: types.UPDATE_CARD_TITLE_FAILURE,
    success: error.success,
  };
};

export const UpdateCardContentRequest = (data, token, id) => {
  return (dispatch) => {
    dispatch(UpdateCardContent());
    return fetch(`${host}/design/designDetail/updateCardContent/${id}`, { headers: { "x-access-token": token, 'Content-Type': 'application/json' }, method: "POST", body: JSON.stringify(data) })
      .then(function (res) {
        return res.json();
      })
      .then(function (res) {
        console.log(res);
        return dispatch(UpdateCardContentSuccess(res));
      }).catch((error) => {
        console.log("insert detail err", error);
        return dispatch(UpdateCardContentFailure(error));
      });
  };
};

export const UpdateCardContent = (id) => {
  return {
    type: types.UPDATE_CARD_CONTENT,
    id
  };
};

export const UpdateCardContentSuccess = (res, id) => {
  return {
    type: types.UPDATE_CARD_CONTENT_SUCCESS,
    success: res.success,
    list: res.list,
    id
  };
};

export const UpdateCardContentFailure = (error) => {
  return {
    type: types.UPDATE_CARD_CONTENT_FAILURE,
    success: error.success,
  };
};

export const UpdateCardImagesRequest = (data, token, id) => {
  return (dispatch) => {
    dispatch(UpdateCardImages());
    return fetch(`${host}/design/designDetail/updateCardImages/${id}`, { headers: { "x-access-token": token }, method: "POST", body: data })
      .then(function (res) {
        return res.json();
      })
      .then(function (res) {
        console.log(res);
        return dispatch(UpdateCardImagesSuccess(res));
      }).catch((error) => {
        console.log("insert detail err", error);
        return dispatch(UpdateCardImagesFailure(error));
      });
  };
};

export const UpdateCardImages = (id) => {
  return {
    type: types.UPDATE_CARD_IMAGES
  };
};

export const UpdateCardImagesSuccess = (res) => {
  return {
    type: types.UPDATE_CARD_IMAGES_SUCCESS,
    success: res.success
  };
};

export const UpdateCardImagesFailure = (error) => {
  return {
    type: types.UPDATE_CARD_IMAGES_FAILURE,
    success: error.success,
  };
};

export const UpdateCardSourcesRequest = (data, token, id) => {
  return (dispatch) => {
    dispatch(UpdateCardSources());
    return fetch(`${host}/design/designDetail/updateCardSources/${id}`, { headers: { "x-access-token": token }, method: "POST", body: data })
      .then(function (res) {
        return res.json();
      })
      .then(function (res) {
        console.log(res);
        return dispatch(UpdateCardSourcesSuccess(res));
      }).catch((error) => {
        console.log("insert detail err", error);
        return dispatch(UpdateCardSourcesFailure(error));
      });
  };
};

export const UpdateCardSources = (id) => {
  return {
    type: types.UPDATE_CARD_SOURCES
  };
};

export const UpdateCardSourcesSuccess = (res) => {
  return {
    type: types.UPDATE_CARD_SOURCES_SUCCESS,
    success: res.success
  };
};

export const UpdateCardSourcesFailure = (error) => {
  return {
    type: types.UPDATE_CARD_SOURCES_FAILURE,
    success: error.success,
  };
};
