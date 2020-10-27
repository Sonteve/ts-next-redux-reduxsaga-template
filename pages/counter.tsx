import React, { useCallback } from "react";
import AppLayout from "../components/AppLayout";
import styled from "styled-components";
import { RootState } from "../reducers";
import { useDispatch, useSelector } from "react-redux";
import { increaseSync, decreaseSync } from "../reducers/counter";

const Counter = () => {
  const { count } = useSelector(({ counter }: RootState) => counter);
  const dispatch = useDispatch();
  const onIncrease = useCallback(() => {
    dispatch(increaseSync());
  }, []);
  const onDecrease = useCallback(() => {
    dispatch(decreaseSync());
  }, []);
  return (
    <AppLayout>
      <CounterBlock>
        <div>{count}</div>
        <div>
          <button onClick={onDecrease}>-1</button>
          <button onClick={onIncrease}>+1</button>
        </div>
      </CounterBlock>
    </AppLayout>
  );
};

export default Counter;

const CounterBlock = styled.div``;
