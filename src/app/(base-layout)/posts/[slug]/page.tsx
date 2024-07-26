import { executeQuery } from '@/lib/datocms/executeQuery';
import { graphql } from '@/lib/datocms/graphql';
import ResponsiveImage, { ResponsiveImageFragment } from '@/components/ResponsiveImage';

const CURRENT_POST_QUERY = graphql(
  `
    query CurrentPost($slug: String) {
      currentPost: post(filter: { slug: { eq: $slug } }) {
        title
        subtitle
        longDescription
        slug
        _firstPublishedAt
        image {
          responsiveImage(sizes: "(max-width: 700px) 100vw, 700px") {
            ...ResponsiveImageFragment
          }
        }
      }
    }
  `,
  [ResponsiveImageFragment],
);

export default async function Post({ params }: { params: { slug: string } }) {
  const { currentPost } = await executeQuery(CURRENT_POST_QUERY, {
    variables: { slug: params.slug },
  });

  if (!currentPost) return null;

  return (
    <div>
      Hello!
      <ul>
        <li>
          Title: <strong>{currentPost.title}</strong> {currentPost.subtitle}
        </li>
        <li>Slug: {currentPost.slug}</li>
        <li>First published: {currentPost._firstPublishedAt}</li>
      </ul>
      {currentPost.image?.responsiveImage && (
        <ResponsiveImage data={currentPost.image?.responsiveImage} />
      )}
      {currentPost.longDescription && (
        <p dangerouslySetInnerHTML={{ __html: currentPost.longDescription }} />
      )}
    </div>
  );
}
