import Link from "next/link";
import Layout from "../../components/layout";
import List from "../../components/List";
import {
  getAllPostIds,
  getPostData,
  getSortedPostsData,
} from "../../lib/posts";

export async function getStaticProps() {
  const postData = getSortedPostsData();
  return {
    props: {
      postData,
    },
  };
}

export function mapLinks(postData) {
  return postData.map(({ id, title }) => {
    return {
      id: id,
      element: <Link href={`posts/${id}`}>{title}</Link>,
    };
  });
}

export default function Posts({ postData }) {
  return (
    <div>
      <h1>Welcome to the party</h1>
      <h3>Here is some info</h3>
      <List children={mapLinks(postData)} />
    </div>
  );
}
