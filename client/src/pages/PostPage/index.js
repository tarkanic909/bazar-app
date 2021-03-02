import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Post from "../../components/Post";
import { BlogContext } from "../../contexts/BlogContext";

function PostPage() {
  const { post, fetchPost } = useContext(BlogContext);
  const { postId } = useParams();

  useEffect(() => {
    fetchPost.current(postId);
  }, [postId, fetchPost]);

  return <Post post={post} />;
}

export default PostPage;
