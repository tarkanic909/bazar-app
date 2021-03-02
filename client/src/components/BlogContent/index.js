import React, { useContext, useEffect, useState } from "react";
import { BlogContext } from "../../contexts/BlogContext";
import EntryPost from "./EntryPost";
import PostsList from "./PostsList";
import Loading from "../../shared/Loading";

function BlogContent() {
  const { fetchError, isLoading, posts } = useContext(BlogContext);
  const [entryPost, setEntryPost] = useState({
    content: "",
  });

  const lastPosts = posts
    .filter((post, index) => index !== posts.length - 1)
    .reverse();

  useEffect(() => {
    const newEntryPost = posts[posts.length - 1];
    if (newEntryPost) {
      setEntryPost(newEntryPost);
    }
  }, [posts]);

  return (
    <div>
      {fetchError.message && fetchError.message}
      <EntryPost post={entryPost} />
      <Loading isLoading={isLoading}>
        <PostsList posts={lastPosts} />
      </Loading>
    </div>
  );
}

export default BlogContent;
