import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppLayout from "../components/AppLayout";
import { RootState } from "../reducers";
import { getUserDataAsync } from "../reducers/user";

const user = () => {
  const dispatch = useDispatch();
  const { user, getUserLoading } = useSelector(({ user }: RootState) => user);

  const onClickGetUser = useCallback(() => {
    dispatch(getUserDataAsync.request("test"));
  }, []);

  return (
    <AppLayout>
      <div>
        <button onClick={onClickGetUser}>유저정보 불러오기</button>
      </div>
      <div>
        {getUserLoading && <div>로딩중...</div>}
        {user && (
          <>
            <div>{user.name}</div>
            <div>{user.email}</div>
            <div>{user.age}</div>
            <div>{user.from}</div>
            <div>{user.message}</div>
          </>
        )}
      </div>
    </AppLayout>
  );
};

export default user;
