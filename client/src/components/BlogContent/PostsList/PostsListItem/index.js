import React from "react";
import { Link } from "react-router-dom";
import PostDate from "../../../../shared/PostDate";
import "./index.scss";

function PostsListItem({ post, isDark }) {
  return (
    <div className="post-list-item">
      <PostDate date={post.date} isDark={isDark} />
      <span className="post-list-item__marginTop">
        <Link className="post-list-item__link" to={`blog/post/${post.id}`}>
          {post.title}
        </Link>
        <p className="post-list-item__author">posted by {post.author}</p>
      </span>
    </div>
  );
}

export default PostsListItem;
