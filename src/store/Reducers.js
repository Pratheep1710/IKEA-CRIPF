import { ActionsTypes } from "./Actions";

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: "",
  toggleButton: false,
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
        ...state, toggleButton: action.payload 
    };
    default:
      return state;
  }
};

export default Reducers;
