import React from "react";
import { useRouter } from "next/router";

const Test = () => {
  const router = useRouter();
  const { page } = router.query;
  console.log(router.query);
  return <div>{`router.query.page = ${page}`}</div>;
};

export default Test;
