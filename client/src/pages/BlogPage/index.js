import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import BlogContent from "../../components/BlogContent";
import BlogSidebar from "../../components/BlogSidebar";
import PostPage from "../PostPage";
import "./index.scss";

function BlogPage() {
  const { path } = useRouteMatch();
  return (
    <div className="blog-page">
      <div className="blog-page__title">
        <h1>WELCOME TO UR GREAT BLOG. ENJOY IT.</h1>
      </div>
      <div className="blog-page__content">
        <Route path={path} exact component={BlogContent} />
        <Route path={`${path}/post/:postId`} exact component={PostPage} />
      </div>
      <div className="blog-page__sidebar">
        <BlogSidebar />
      </div>
    </div>
  );
}

export default BlogPage;
