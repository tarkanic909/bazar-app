import React from "react";
import { Link } from "react-router-dom";
import PostDate from "../../../shared/PostDate";
import "./index.scss";

function BlogWidgetItem({ post }) {
  return (
    <div className="blog-widget-item">
      <PostDate date={post.date} />
      <div className="blog-widget-item__border">
        <img className="blog-widget-item__thumb" src={post.thumb} alt="" />

        <span className="blog-widget-item__marginTop">
          <Link className="blog-widget-item__link" to={`blog/post/${post.id}`}>
            {post.title}
          </Link>
          <p className="blog-widget-item__author">posted by {post.author}</p>
        </span>
      </div>
    </div>
  );
}

export default BlogWidgetItem;
