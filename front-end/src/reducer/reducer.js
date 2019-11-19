import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL
} from "../actions/Loginactions";
import {
  CREATE_USER_START,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAIL
} from "../actions/createUserActions";

import {
  DELETE_PLANT_START,
  DELETE_PLANT_SUCCESS,
  DELETE_PLANT_FAIL
} from "../actions/deletePlantActions";

import {
  UPDATE_PLANT_START,
  UPDATE_PLANT_SUCCESS,
  UPDATE_PLANT_FAIL
} from "../actions/updatePlantActions";

import {
  GET_PLANTS_START,
  GET_PLANTS_SUCCESS,
  GET_PLANTS_FAIL
} from "../actions/getPlantsActions";

import {
  POST_PLANT_START,
  POST_PLANT_SUCCESS,
  POST_PLANT_FAIL
} from "../actions/postPlantActions";

const initialState = () => ({
  username: "",
  password: "",
  primaryemail: ""
});

export const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER_START:
      return {
        ...state,
        username: action.payload,
        password: action.payload,
        primaryemail: action.payload
      };
    case CREATE_USER_SUCCESS:
        return{
            ...state
        };
        case CREATE_USER_FAIL:
            return{
                ...state,
                error: action.payload.error
            };
            default :
            return state;
  }
};