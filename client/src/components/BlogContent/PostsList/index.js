import React from "react";
import PostsListItem from "./PostsListItem";

function PostsList({ posts, isWidget }) {
  console.log(posts);
  return (
    <div>
      {posts &&
        posts.map((post) => {
          return <PostsListItem post={post} />;
        })}
    </div>
  );
}

export default PostsList;
