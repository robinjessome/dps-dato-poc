import { executeQuery } from '@/lib/datocms/executeQuery';
import { graphql } from '@/lib/datocms/graphql';

const CURRENT_POST_QUERY = graphql(`
    query CurrentPost($slug: String) {
        currentPost: post(filter: { slug: { eq: $slug } }) {
            title
            slug
            _firstPublishedAt
        }
    }
`, []);

export default async function Post({ params }: { params: { slug: string } }) {
  const { currentPost } =
    await executeQuery(CURRENT_POST_QUERY, {
      variables: { slug: params.slug },
    });

  if (!currentPost) return null;

  return <div>
    <ul>
      <li>Title: {currentPost.title}</li>
      <li>Slug: {currentPost.slug}</li>
      <li>First published: {currentPost._firstPublishedAt}</li>
    </ul>
  </div>;
}