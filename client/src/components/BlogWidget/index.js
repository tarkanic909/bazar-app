import React, { useContext } from "react";
import { BlogContext } from "../../contexts/BlogContext";
import Loading from "../../shared/Loading";
import BlogWidgetItem from "./BlogWidgetItem";

function BlogWidget() {
  const { posts, fetchError, isLoading } = useContext(BlogContext);

  const recentPosts = posts.filter((post, index) => index > posts.length - 3);

  return (
    <div>
      {(fetchError.message && fetchError.message) || (
        <Loading isLoading={isLoading}>
          {recentPosts.map((post, index) => (
            <BlogWidgetItem key={post.title + index} post={post} />
          ))}
        </Loading>
      )}
    </div>
  );
}

export default BlogWidget;
