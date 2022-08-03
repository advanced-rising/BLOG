import { PageSEO } from '@/components/SEO';
import UiSectionContainer from '@/components/UiSectionContainer';
import siteMetadata from '@/data/siteMetadata';
import ListLayout from '@/layouts/ListLayout';
import { getAllFilesFrontMatter } from '@/lib/mdx';

import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import type { ComponentProps } from 'react';

export const POSTS_PER_PAGE = 10;

export const getStaticProps: GetStaticProps<{
  posts: ComponentProps<typeof ListLayout>['posts'];
  initialDisplayPosts: ComponentProps<typeof ListLayout>['initialDisplayPosts'];
  pagination: ComponentProps<typeof ListLayout>['pagination'];
}> = async () => {
  const posts = await getAllFilesFrontMatter('back');
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE);
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
    menu: 'back',
  };

  return { props: { initialDisplayPosts, posts, pagination } };
};

export default function Back({
  posts,
  initialDisplayPosts,
  pagination,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <UiSectionContainer>
      <PageSEO title={`Blog - ${siteMetadata.author}`} description={siteMetadata.description} />
      <ListLayout
        posts={posts}
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        title='Back'
        menu='back'
      />
    </UiSectionContainer>
  );
}
