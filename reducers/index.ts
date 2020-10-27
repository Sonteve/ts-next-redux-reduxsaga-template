import { HYDRATE } from "next-redux-wrapper";
import { AnyAction, combineReducers } from "redux";
import counter, { CounterState } from "./counter";
import user, { UserState } from "./user";

export interface State {
  counter: CounterState;
  user: UserState;
}

const rootReducer = (state: State | undefined, action: AnyAction): State => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default: {
      const combineReducer = combineReducers({
        counter,
        user,
      });
      return combineReducer(state, action);
    }
  }
};

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
