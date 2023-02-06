import React, { memo, useEffect } from "react";
import hyRequest from "@/services";

const home = memo(() => {
  //网络请求
  useEffect(() => {
    hyRequest.get({ url: "/home/highscore" }).then((res) => {
      console.log(res);
    });
  }, []);
  return <div>home</div>;
});

export default home;
