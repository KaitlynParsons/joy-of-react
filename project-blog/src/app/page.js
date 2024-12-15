import React from 'react';
import { BLOG_TITLE } from '@/constants';
import { getBlogPostList } from '@/helpers/file-helpers';
import BlogSummaryCard from '@/components/BlogSummaryCard';

import styles from './homepage.module.css';

export async function generateMetadata() {

  return {
    title: BLOG_TITLE,
    description: "A wonderful blog about JavaScript"
  };
}

async function Home() {
  const blogPosts = await getBlogPostList();

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.mainHeading}>Latest Content:</h1>

      {blogPosts.map(({ slug, ...rest }) => (
        <BlogSummaryCard
          key={slug}
          slug={slug}
          title={rest.title}
          abstract={rest.abstract}
          publishedOn={new Date(rest.publishedOn)}
        />
      ))}
    </div>
  );
}

export default Home;