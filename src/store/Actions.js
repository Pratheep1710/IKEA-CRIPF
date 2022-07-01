// Action Types
export const ActionsTypes = {
  INITIAL_TOKEN_LOADING: "INITIAL_TOKEN_LOADING",
  INITIAL_TOKEN_SUCCESS: "INITIAL_TOKEN_SUCCESS",
  INITIAL_TOKEN_ERROR: "INITIAL_TOKEN_ERROR",
  SET_BUTTON_TOGGLE: "SET_BUTTON_TOGGLE",
  SET_HOME_TOGGLE: "SET_HOME_TOGGLE",
  SET_MARKETDATA_LOADING: "SET_MARKETDATA_LOADING",
  SET_MARKETDATA_SUCCESS: "SET_MARKETDATA_SUCCESS",
  SET_MARKETDATA_ERROR: "SET_MARKETDATA_ERROR",
};

// Action Creators
export default class Actions {
  static getTokenRequest = () => {
    return {
      type: ActionsTypes.INITIAL_TOKEN_LOADING,
    };
  };

  static getTokenSuccess = (token) => {
    return {
      type: ActionsTypes.INITIAL_TOKEN_SUCCESS,
      payload: token,
    };
  };

  static getTokenFailure = (errorMsg) => {
    return {
      type: ActionsTypes.INITIAL_TOKEN_ERROR,
      payload: errorMsg,
    };
  };

  static userInputAction = () => ({
    type: ActionsTypes.SET_BUTTON_TOGGLE,
  });

  static homeToggleAction = () => ({
    type: ActionsTypes.SET_HOME_TOGGLE,
  });

  static getMarketDataRequest = () => {
    return {
      type: ActionsTypes.SET_MARKETDATA_LOADING,
    };
  };

  static getMarketDataSuccess = (marketData) => {
    return {
      type: ActionsTypes.SET_MARKETDATA_SUCCESS,
      payload: marketData,
    };
  };

  static getMarketDataFailure = (errorMsg) => {
    return {
      type: ActionsTypes.SET_MARKETDATA_ERROR,
      payload: errorMsg,
    };
  };
}
