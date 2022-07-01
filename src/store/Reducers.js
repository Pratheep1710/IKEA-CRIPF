import { ActionsTypes } from "./Actions";

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: "",
  toggleButton: null,
  marketData: [],
};

const Reducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionsTypes.INITIAL_TOKEN_LOADING:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case ActionsTypes.INITIAL_TOKEN_SUCCESS:
      let stringifiedToken = JSON.stringify(action.payload);
      let copyOfToken = JSON.parse(stringifiedToken);
      return {
        ...state,
        data: copyOfToken,
        loading: false,
      };
    case ActionsTypes.INITIAL_TOKEN_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case ActionsTypes.SET_BUTTON_TOGGLE:
      return {
        ...state,
        toggleButton: true,
      };
    case ActionsTypes.SET_HOME_TOGGLE: {
      return {
        ...state,
        toggleButton: false,
      };
    }
    case ActionsTypes.SET_MARKETDATA_LOADING: {
      return {
        ...state,
        loading: true,
        error: "",
      };
    }
    case ActionsTypes.SET_MARKETDATA_SUCCESS: {
      return {
        ...state,
        marketData: action.payload,
        loading: false,
      };
    }
    case ActionsTypes.SET_MARKETDATA_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }
    default:
      return state;
  }
};

export default Reducers;
