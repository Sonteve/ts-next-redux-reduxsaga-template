import { ActionType, createAction, createReducer } from "typesafe-actions";
import produce from "immer";

const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

export const increaseSync = createAction(INCREASE)();
export const decreaseSync = createAction(DECREASE)();

type CounterAction = ActionType<typeof increaseSync | typeof decreaseSync>;

export interface CounterState {
  count: number;
}

export const initialState = {
  count: 0,
};

const counter = createReducer<CounterState, CounterAction>(initialState, {
  [INCREASE]: (state) =>
    produce(state, (draft) => {
      draft.count = state.count + 1;
    }),
  [DECREASE]: (state) =>
    produce(state, (draft) => {
      draft.count = state.count - 1;
    }),
});

export default counter;
