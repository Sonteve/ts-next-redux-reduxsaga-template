import React from "react";
import Router from "next/router";
/* import { END } from "redux-saga"; */

const Page = () => {
  return (
    <>
      <div>dynamic routing</div>
      <div style={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
        {Array(20)
          .fill(null)
          .map((v, i) => (
            <button key={i + v} onClick={() => Router.push(`/test?page=${i}`)}>
              {`${i}page`}
            </button>
          ))}
      </div>
    </>
  );
};

export default Page;

/* export const getServerSideProps = wrapper.getServerSideProps(
    async (context) => {
      const ItemCode = context.query.itemcode as string;
      const Keyword = context.query.keyword as string;  
 
      context.store.dispatch(
        setCurrentItem({
          ItemCode,
          Keyword,
        })
      );  
      context.store.dispatch(
        getNewsAction.request({
          itemCode: ItemCode,
          start: 0,
          countPerPage: 5,
        })
      );
      context.store.dispatch(
        getYoutubeAction.request({
          itemCode: ItemCode,
          start: 0,
          countPerPage: 5,
        })
      );  
  
      context.store.dispatch(END);
      await context.store.sagaTask.toPromise();
      return { props: {} };
    }
  ); */
