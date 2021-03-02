import React from "react";

function Loading({ isLoading, children }) {
  return <>{isLoading ? <h1>Loading...</h1> : children}</>;
}

export default Loading;
