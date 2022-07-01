import "whatwg-fetch";
import React from "react";
import axios from "axios";
import Actions, { ActionsTypes } from "./Actions";

var bodyFormData = new FormData();
bodyFormData.append("user", "cripf");
bodyFormData.append("password", "api");

let getAccessToken;
export default class Middleware {
  static initialToken = () => {
    return (dispatch) => {
      dispatch(Actions.getTokenRequest());
      axios({
        method: "post",
        url: "https://buyabletool-u5ngogn2ia-ew.a.run.app/User",
        data: bodyFormData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
        .then((getData) => {
          const token = getData.data;
          console.log(getData.data.token);
          getAccessToken = getData.data.token;
          dispatch(Actions.getTokenSuccess(token));
        })
        .catch((error) => {
          const errorMsg = error.message;
          dispatch(Actions.getTokenFailure(errorMsg));
        });
    };
  };

  static getItemsMarketData = (items, market) => {
    //30351317,70530256
    return (dispatch) => {
      dispatch(Actions.getMarketDataRequest());
      axios({
        method: "get",
        url:
          "https://buyabletool-u5ngogn2ia-ew.a.run.app/markets/" +
          market +
          "/items?ids=" +
          items,
        headers: {
          Authorization: getAccessToken,
        },
      })
        .then((getData) => {
          console.log(getData.data);
          const marketData = getData.data;
          dispatch(Actions.getMarketDataSuccess(marketData));
          //  dispatch(getTokenSuccess(token));
        })
        .catch((error) => {
          const errorMsg = error.message;
          dispatch(Actions.getMarketDataFailure(errorMsg));
        });
    };
  };
}
