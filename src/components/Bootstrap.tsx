"use client";

import { useEffect } from "react";

function Bootstrap() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.js");
  }, []);
  return <></>;
}

export default Bootstrap;
