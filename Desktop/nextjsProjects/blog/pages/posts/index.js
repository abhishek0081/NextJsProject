import { Fragment } from "react";
import AllPostsComponent from "../../components/posts/AllPosts";
import { getAllPosts } from "../../lib/postsUtil";
import Head from "next/head";

function AllPostsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta
          name="description"
          content="A list of tutorials and posts of almost all kind of programming language"
        />
      </Head>
      <AllPostsComponent posts={props.posts} />;
    </Fragment>
  );
}

export function getStaticProps() {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPostsPage;
