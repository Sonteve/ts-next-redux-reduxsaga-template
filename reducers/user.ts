import { ActionType, createAsyncAction, createReducer } from "typesafe-actions";
import produce from "immer";
import { UserData } from "../interface/user";
import { AxiosError } from "axios";

export const GET_USER_DATA_REQUEST = "GET_USER_DATA_REQUEST";
export const GET_USER_DATA_SUCCESS = "GET_USER_DATA_SUCCESS";
export const GET_USER_DATA_FAILURE = "GET_USER_DATA_FAILURE";
export const getUserDataAsync = createAsyncAction(
  GET_USER_DATA_REQUEST,
  GET_USER_DATA_SUCCESS,
  GET_USER_DATA_FAILURE
)<string, UserData, AxiosError>();

type UserAction = ActionType<typeof getUserDataAsync>;

export interface UserState {
  user: UserData | null;
  getUserLoading: boolean;
  getUserDone: boolean;
  getUserError: AxiosError | null;
}

export const initialState: UserState = {
  user: null,
  getUserLoading: false,
  getUserDone: false,
  getUserError: null,
};

const user = createReducer<UserState, UserAction>(initialState, {
  [GET_USER_DATA_REQUEST]: (state) =>
    produce(state, (draft) => {
      draft.getUserLoading = true;
      draft.getUserError = null;
    }),
  [GET_USER_DATA_SUCCESS]: (state, action) =>
    produce(state, (draft) => {
      draft.getUserLoading = false;
      draft.user = action.payload;
    }),
  [GET_USER_DATA_FAILURE]: (state, action) =>
    produce(state, (draft) => {
      draft.getUserLoading = false;
      draft.getUserError = action.payload;
    }),
});

export default user;
