import { Fragment } from "react";
import Hero from "../components/HomePage/Hero";
import FeaturedPosts from "../components/HomePage/featuredPosts";
import { getFeaturedPosts } from "../lib/postsUtil";
import Head from "next/head";

function HomePage(props) {
  return (
    <Fragment>
        <Head>
            <title>Abhishek's Blog</title>
            <meta name="description" content="I love to code and Want to show my knowledge to the world!!" />
        </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts ,
    },
    revalidate: 1800,
  };
}
export default HomePage;
