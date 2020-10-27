import React, { ReactChild } from "react";
import Link from "next/link";
interface Props {
  children: ReactChild | ReactChild[];
}

const AppLayout = ({ children }: Props) => {
  return (
    <>
      <div
        style={{
          width: "100%",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <Link href="/">
            <a>홈</a>
          </Link>
          <Link href="/counter">
            <a>sync</a>
          </Link>
          <Link href="/user">
            <a>async</a>
          </Link>
          <Link href="/dynamic">
            <a>SSr & dynamic</a>
          </Link>
        </div>
      </div>
      <div>{children}</div>
    </>
  );
};

export default AppLayout;
