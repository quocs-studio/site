// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import { graphql } from 'gatsby';

import { RootContainer, BlogPreviewsContainer, SEOContainer } from '~containers';
import { Main, Section, H2 } from '~components';
import { renderBlocks, pagePropTypes } from '~utils';

// ─────────────────────────────────────────────────────────────────────────────
// query
// ─────────────────────────────────────────────────────────────────────────────

export const query = graphql`
  {
    page: mdx(frontmatter: { meta: { permalink: { eq: "/blog/" } } }) {
      frontmatter {
        ...MetaFragment
        blocks {
          title
          type
        }
      }
    }
    posts: allMdx(
      filter: { fileAbsolutePath: { regex: "/cms/posts/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        ...BlogPreviewFragment
      }
    }
  }
`;

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function BlogPage({
  data: {
    page: {
      frontmatter: { meta, blocks },
    },
    posts,
  },
}) {
  return (
    <RootContainer>
      <SEOContainer meta={meta} />
      <Main
        css={`
          grid-template: 'hero' 'blog';
          grid-gap: 10vh 4rem;
        `}
      >
        {renderBlocks(blocks)}
        <Section
          id="blog"
          css={`
            grid-area: blog;
          `}
        >
          <H2>Tất cả bài viết</H2>
          <BlogPreviewsContainer posts={posts} />
        </Section>
      </Main>
    </RootContainer>
  );
}

BlogPage.propTypes = pagePropTypes;
