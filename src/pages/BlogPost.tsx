import React, { useMemo } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import styled from 'styled-components';
import SEO from '../components/SEO';
import blogPosts from '../data/blogPosts.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faPinterest } from '@fortawesome/free-brands-svg-icons';

const PostContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.lg};
`;

const PostContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    grid-template-columns: 1fr;
  }
`;

const Article = styled.article`
  .post-header {
    margin-bottom: ${({ theme }) => theme.spacing.xl};
    
    h1 {
      font-size: 2.5rem;
      margin-bottom: ${({ theme }) => theme.spacing.md};
      
      @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        font-size: 2rem;
      }
    }
    
    .meta {
      display: flex;
      gap: ${({ theme }) => theme.spacing.md};
      margin-bottom: ${({ theme }) => theme.spacing.md};
      font-size: 0.9rem;
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
  
  .featured-image {
    width: 100%;
    height: 400px;
    background-size: cover;
    background-position: center;
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    margin-bottom: ${({ theme }) => theme.spacing.xl};
    
    @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
      height: 250px;
    }
  }
  
  .post-body {
    font-size: 1.1rem;
    line-height: 1.8;
    
    p {
      margin-bottom: ${({ theme }) => theme.spacing.lg};
    }
    
    a {
      font-weight: 600;
    }
    
    h2, h3, h4 {
      margin-top: ${({ theme }) => theme.spacing.xl};
      margin-bottom: ${({ theme }) => theme.spacing.md};
    }
    
    ul, ol {
      margin-bottom: ${({ theme }) => theme.spacing.lg};
      padding-left: ${({ theme }) => theme.spacing.xl};
    }
    
    blockquote {
      border-left: 4px solid ${({ theme }) => theme.colors.primary};
      padding-left: ${({ theme }) => theme.spacing.lg};
      margin-left: ${({ theme }) => theme.spacing.lg};
      margin-bottom: ${({ theme }) => theme.spacing.lg};
      font-style: italic;
    }
  }
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
  margin: ${({ theme }) => theme.spacing.xl} 0;
`;

const Tag = styled(Link)`
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  font-size: 0.9rem;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.tertiary};
  }
`;

const SocialShare = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xl};
  padding-top: ${({ theme }) => theme.spacing.lg};
  border-top: 1px solid ${({ theme }) => theme.colors.accent};
  
  h3 {
    margin-bottom: ${({ theme }) => theme.spacing.md};
    font-size: 1.2rem;
  }
  
  .social-buttons {
    display: flex;
    gap: ${({ theme }) => theme.spacing.md};
    
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border-radius: ${({ theme }) => theme.borderRadius.circle};
      color: white;
      transition: transform 0.3s ease;
      
      &:hover {
        transform: translateY(-3px);
      }
      
      &.facebook {
        background-color: #3b5998;
      }
      
      &.twitter {
        background-color: #1da1f2;
      }
      
      &.linkedin {
        background-color: #0077b5;
      }
      
      &.pinterest {
        background-color: #bd081c;
      }
    }
  }
`;

const Sidebar = styled.aside``;

const SidebarSection = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  background-color: ${({ theme }) => theme.colors.accent};
  
  h3 {
    margin-bottom: ${({ theme }) => theme.spacing.md};
    font-size: 1.3rem;
  }
`;

const RelatedPosts = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const RelatedPost = styled(Link)`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  
  .thumbnail {
    width: 80px;
    height: 80px;
    flex-shrink: 0;
    background-size: cover;
    background-position: center;
    border-radius: ${({ theme }) => theme.borderRadius.small};
  }
  
  .content {
    h4 {
      font-size: 1rem;
      margin-bottom: ${({ theme }) => theme.spacing.xs};
    }
    
    .date {
      font-size: 0.8rem;
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

const PromoBox = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  text-align: center;
  
  h3 {
    color: white;
  }
  
  p {
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
  
  a {
    display: inline-block;
    background-color: white;
    color: ${({ theme }) => theme.colors.primary};
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
    border-radius: ${({ theme }) => theme.borderRadius.small};
    font-weight: 600;
    transition: background-color 0.3s ease;
    
    &:hover {
      background-color: ${({ theme }) => theme.colors.tertiary};
    }
  }
`;

const NavigationButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${({ theme }) => theme.spacing.xl};
  
  a {
    display: inline-flex;
    align-items: center;
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
    border-radius: ${({ theme }) => theme.borderRadius.small};
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
    transition: background-color 0.3s ease;
    
    &:hover {
      background-color: ${({ theme }) => theme.colors.tertiary};
    }
    
    &.prev:before {
      content: '←';
      margin-right: ${({ theme }) => theme.spacing.sm};
    }
    
    &.next:after {
      content: '→';
      margin-left: ${({ theme }) => theme.spacing.sm};
    }
  }
`;

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const post = useMemo(() => {
    return blogPosts.flat(2).find(post => post.slug === slug);
  }, [slug]);

  if (!post) {
    return <Navigate to="/404" />;
  }

  // Create the URL for sharing
  const shareUrl = window.location.href;
  const shareTitle = post.title;

  // Get related posts (same category)
  const relatedPosts = blogPosts.flat(2)
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <>
      <SEO 
        title={post.title} 
        description={post.excerpt}
        image={post.image}
        article={true}
      />
      <PostContainer>
        <PostContent>
          <Article>
            <div className="post-header">
              <h1>{post.title}</h1>
              <div className="meta">
                <span>{post.date}</span>
                <span>by {post.author}</span>
                <span>{post.category}</span>
              </div>
              <div className="featured-image" style={{ backgroundImage: `url(${post.image})` }} />
            </div>
            <div className="post-body" dangerouslySetInnerHTML={{ __html: post.content }} />
            
            <TagsContainer>
              {post.tags.map(tag => (
                <Tag key={tag} to={`/tag/${tag.toLowerCase()}`}>{tag}</Tag>
              ))}
            </TagsContainer>
            
            <SocialShare>
              <h3>Share this article</h3>
              <div className="social-buttons">
                <a 
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on Facebook"
                  className="facebook"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a 
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on Twitter"
                  className="twitter"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a 
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on LinkedIn"
                  className="linkedin"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a 
                  href={`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(shareUrl)}&media=${encodeURIComponent(post.image)}&description=${encodeURIComponent(shareTitle)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on Pinterest"
                  className="pinterest"
                >
                  <FontAwesomeIcon icon={faPinterest} />
                </a>
              </div>
            </SocialShare>
            
            <NavigationButtons>
              {/* Add navigation logic here */}
            </NavigationButtons>
          </Article>
          
          <Sidebar>
            <SidebarSection>
              <h3>Related Articles</h3>
              <RelatedPosts>
                {relatedPosts.map(related => (
                  <RelatedPost key={related.id} to={`/blog/${related.slug}`}>
                    <div 
                      className="thumbnail" 
                      style={{ backgroundImage: `url(${related.image})` }} 
                    />
                    <div className="content">
                      <h4>{related.title}</h4>
                      <div className="date">{related.date}</div>
                    </div>
                  </RelatedPost>
                ))}
              </RelatedPosts>
            </SidebarSection>
            
            <PromoBox>
              <h3>Discover Premium Teas</h3>
              <p>Explore Adagio's collection of premium loose leaf teas and elevate your tea experience today.</p>
              <a href="https://www.jdoqocy.com/click-9083409-10575414" target="_blank" rel="noopener noreferrer">
                Shop Now
              </a>
            </PromoBox>
          </Sidebar>
        </PostContent>
      </PostContainer>
    </>
  );
};

export default BlogPost;