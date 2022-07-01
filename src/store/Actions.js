// Action Types
export const ActionsTypes = {
    INITIAL_TOKEN_LOADING: "INITIAL_TOKEN_LOADING",
    INITIAL_TOKEN_SUCCESS: "INITIAL_TOKEN_SUCCESS",
    INITIAL_TOKEN_ERROR: "INITIAL_TOKEN_ERROR",
    SET_BUTTON_TOGGLE : "SET_BUTTON_TOGGLE",
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

    static userInputAction = (buttonToggle) => ({
        type: ActionsTypes.SET_BUTTON_TOGGLE,
        payload: buttonToggle,
      });

}