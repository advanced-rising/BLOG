import { PageSEO } from '@/components/SEO';
import siteMetadata from '@/data/siteMetadata';
import ListLayout from '@/layouts/ListLayout';
import { getAllFilesFrontMatter } from '@/lib/mdx';

import { POSTS_PER_PAGE } from '../../front';

import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import type { PostFrontMatter } from 'types/PostFrontMatter';
import UiSectionContainer from '@/components/UiSectionContainer';

export const getStaticPaths: GetStaticPaths<{ page: string }> = async () => {
  const totalPosts = await getAllFilesFrontMatter('front');
  const totalPages = Math.ceil(totalPosts.length / POSTS_PER_PAGE);
  const paths = Array.from({ length: totalPages }, (_, i) => ({
    params: { page: (i + 1).toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{
  posts: PostFrontMatter[];
  initialDisplayPosts: PostFrontMatter[];
  pagination: { currentPage: number; totalPages: number; menu: string };
}> = async (context) => {
  const {
    params: { page },
  } = context;
  const posts = await getAllFilesFrontMatter('front');
  const pageNumber = parseInt(page as string);
  const initialDisplayPosts = posts.slice(POSTS_PER_PAGE * (pageNumber - 1), POSTS_PER_PAGE * pageNumber);
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
    menu: 'front',
  };

  return {
    props: {
      posts,
      initialDisplayPosts,
      pagination,
    },
  };
};

export default function PostPage({
  posts,
  initialDisplayPosts,
  pagination,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <UiSectionContainer>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <ListLayout
        posts={posts}
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        title='All Posts'
        menu='front'
      />
    </UiSectionContainer>
  );
}
