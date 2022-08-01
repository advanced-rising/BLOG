import { PageSEO } from '@/components/SEO';
import UiSectionContainer from '@/components/UiSectionContainer';
import siteMetadata from '@/data/siteMetadata';
import ListLayout from '@/layouts/ListLayout';
import ListDevopsLayout from '@/layouts/ListDevopsLayout';
import { getAllFilesFrontMatter } from '@/lib/mdx';

import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import type { ComponentProps } from 'react';

export const POSTS_PER_PAGE = 10;

export const getStaticProps: GetStaticProps<{
  posts: ComponentProps<typeof ListLayout>['posts'];
  initialDisplayPosts: ComponentProps<typeof ListLayout>['initialDisplayPosts'];
  pagination: ComponentProps<typeof ListLayout>['pagination'];
}> = async () => {
  const posts = await getAllFilesFrontMatter('devops');
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE);
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
    menu: 'devops',
  };

  return { props: { initialDisplayPosts, posts, pagination } };
};

export default function Devops({
  posts,
  initialDisplayPosts,
  pagination,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <UiSectionContainer>
      <PageSEO title={`Devops - ${siteMetadata.author}`} description={siteMetadata.description} />
      <ListDevopsLayout
        posts={posts}
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        title='Command Devops'
        menu='devops'
      />
    </UiSectionContainer>
  );
}
