import React from 'react';
import { MDXRemote } from 'next-mdx-remote/rsc';

import { loadBlogPost } from '@/helpers/file-helpers';
import { BLOG_TITLE } from '@/constants';
import BlogHero from '@/components/BlogHero';

import styles from './postSlug.module.css';
import COMPONENT_MAP from '@/helpers/mdx-components';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
  const { postSlug } = await params;

  const blogPostData = await loadBlogPost(postSlug);

  // If we can't locate the blog post, this will be a 404. This
  // means that the returned value from this function won't
  // actually be used. We'll return `null` purely to avoid an error.
  if (!blogPostData) {
    return null;
  }

  const { frontmatter } = blogPostData;

  return {
    title: `${frontmatter.title} • ${BLOG_TITLE}`,
    description: `${frontmatter.abstract}`,
  };
}

async function BlogPost({ params }) {
  const blogPostData = await loadBlogPost(params.postSlug);

  // If there is no blog post with the slug taken from the route
  // params, render a 404 page instead.
  if (!blogPostData) {
    notFound();
  }

  const { frontmatter, content } = blogPostData;

  return (
    <article className={styles.wrapper}>
      <BlogHero
        title={frontmatter.title}
        publishedOn={new Date(frontmatter.publishedOn)}
      />
      <div className={styles.page}>
        <MDXRemote source={content} components={COMPONENT_MAP} />
      </div>
    </article>
  );
}

export default BlogPost;
