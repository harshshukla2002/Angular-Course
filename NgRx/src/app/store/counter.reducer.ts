import { createReducer, on } from '@ngrx/store';
import { decrement, increment } from './counter.action';

const intialState = 0;

export const counterReducer = createReducer(
  intialState,
  on(increment, (state, action) => state + action.value),
  on(decrement, (state) => state - 1)
);
