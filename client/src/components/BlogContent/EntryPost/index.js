import React from "react";
import Post from "../../Post";

function EntryPost({ post }) {
  const readme = post.content.split(" ").slice(0, 73).join(" ");
  return <Post post={post} readme={readme} />;
}

export default EntryPost;
