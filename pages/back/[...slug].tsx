import fs from 'fs';

import { MDXLayoutRenderer } from '@/components/MDXComponents';
import PageTitle from '@/components/PageTitle';
import generateRss from '@/lib/generate-rss';
import { formatSlug, getAllFilesFrontMatter, getFileBySlug, getFiles } from '@/lib/mdx';

import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import type { AuthorFrontMatter } from 'types/AuthorFrontMatter';
import type { PostFrontMatter } from 'types/PostFrontMatter';
import type { Toc } from 'types/Toc';
import UiSectionContainer from '@/components/UiSectionContainer';

const DEFAULT_LAYOUT = 'PostLayout';

export async function getStaticPaths() {
  const posts = getFiles('back');
  return {
    paths: posts.map((p) => ({
      params: {
        slug: formatSlug(p).split('/'),
      },
    })),
    fallback: false,
  };
}

// @ts-ignore
export const getStaticProps: GetStaticProps<{
  post: { mdxSource: string; toc: Toc; frontMatter: PostFrontMatter };
  authorDetails: AuthorFrontMatter[];
  prev?: { slug: string; title: string };
  next?: { slug: string; title: string };
}> = async ({ params }) => {
  const slug = (params.slug as string[]).join('/');
  const allPosts = await getAllFilesFrontMatter('back');
  const postIndex = allPosts.findIndex((post) => formatSlug(post.slug) === slug);
  const prev: { slug: string; title: string } = allPosts[postIndex + 1] || null;
  const next: { slug: string; title: string } = allPosts[postIndex - 1] || null;
  const post = await getFileBySlug('back', slug);
  // @ts-ignore
  const authorList = post.frontMatter.authors || ['default'];
  const authorPromise = authorList.map(async (author) => {
    const authorResults = await getFileBySlug('authors', [author]);
    return authorResults.frontMatter;
  });
  const authorDetails = await Promise.all(authorPromise);

  // rss
  if (allPosts.length > 0) {
    const rss = generateRss(allPosts);
    fs.writeFileSync('./public/feed.xml', rss);
  }

  return {
    props: {
      post,
      authorDetails,
      prev,
      next,
    },
  };
};

export default function Back({ post, authorDetails, prev, next }: InferGetStaticPropsType<typeof getStaticProps>) {
  const { mdxSource, toc, frontMatter } = post;

  return (
    <UiSectionContainer>
      {'draft' in frontMatter && frontMatter.draft !== true ? (
        <MDXLayoutRenderer
          layout={frontMatter.layout || DEFAULT_LAYOUT}
          toc={toc}
          mdxSource={mdxSource}
          frontMatter={frontMatter}
          authorDetails={authorDetails}
          prev={prev}
          next={next}
        />
      ) : (
        <div className='mt-24 text-center'>
          <PageTitle>
            Under Construction{' '}
            <span role='img' aria-label='roadwork sign'>
              🚧
            </span>
          </PageTitle>
        </div>
      )}
    </UiSectionContainer>
  );
}
