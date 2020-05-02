// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import ColourThemeContainer from './ColourThemeContainer';
import { Footer, Section, H2, Ul, Li, Link } from '~components';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function FooterContainer() {
  const { footer } = useStaticQuery(graphql`
    {
      footer: mdx(
        fileAbsolutePath: { regex: "/cms/menus/" }
        frontmatter: { title: { eq: "Footer" } }
      ) {
        frontmatter {
          links {
            mdx
            type
            url
            title
            links {
              text
              url
            }
          }
        }
      }
    }
  `);

  return (
    <Footer
      css={`
        grid-gap: 2rem 1rem;
        grid-template: 'theme' 'contact' 'legal' 'colophon' / 1fr;

        @media screen and (min-width: 1200px) {
          grid-template: 'theme contact legal colophon' / 1fr 1fr 1fr 1fr;
        }
      `}
    >
      <Section>
        <H2>Màu mè</H2>
        <ColourThemeContainer />
      </Section>
      {footer.frontmatter.links.map((item) => (
        <Section
          key={item.title}
          css={`
            grid-area: ${item.title.toLowerCase()};
          `}
        >
          <H2>{item.title}</H2>
          {item.type === 'nested' && (
            <Ul>
              {item.links.map((link) => (
                <Li key={link.url}>
                  <Link to={link.url} look="tertiary">
                    {link.text}
                  </Link>
                </Li>
              ))}
            </Ul>
          )}
          {item.type === 'markdown' && <MDXRenderer>{item.mdx}</MDXRenderer>}
        </Section>
      ))}
    </Footer>
  );
}
