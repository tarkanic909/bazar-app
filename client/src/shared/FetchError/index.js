import React from "react";

function FetchError({ error, children }) {
  return <div>{error.message ? error.message : children}</div>;
}

export default FetchError;
