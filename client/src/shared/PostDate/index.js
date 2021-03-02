import React from "react";
import "./index.scss";

function PostDate({ date, isDark }) {
  const PostDate = date ? date.split("-") : [];
  const postDateDark = isDark ? "post-date--dark" : "";
  return (
    <p className={`post-date ${postDateDark}`}>
      {PostDate[1]}
      <span className="post-date__month">{PostDate[0]}</span>
    </p>
  );
}

export default PostDate;
