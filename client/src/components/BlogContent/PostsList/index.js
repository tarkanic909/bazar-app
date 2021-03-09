import React from "react";
import PostsListItem from "./PostsListItem";

function PostsList({ posts, isWidget }) {
  return (
    <div>
      {posts &&
        posts.map((post) => {
          return <PostsListItem key={post.id} post={post} />;
        })}
    </div>
  );
}

export default PostsList;
