import React from "react";
import PostsListItem from "../BlogContent/PostsList/PostsListItem";
import "./index.scss";

function Post({ post, readme }) {
  return (
    post && (
      <div className="post">
        <PostsListItem post={post} isDark={true} />
        <img className="post__image" src={post.image} alt="" />
        <p
          className="post__content"
          dangerouslySetInnerHTML={{ __html: readme || post.content }}
        ></p>
      </div>
    )
  );
}

export default Post;
