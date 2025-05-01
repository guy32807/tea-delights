import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import SEO from '../components/SEO';
import BlogCard from '../components/BlogCard';
import blogPosts from '../data/blogPosts.json';

const TagContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.lg};
`;

const TagHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  
  h1 {
    font-size: 2.5rem;
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
  
  p {
    max-width: 700px;
    margin: 0 auto;
    color: ${({ theme }) => theme.colors.lightText};
  }
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    grid-template-columns: 1fr;
  }
`;

const PromoBox = styled.div`
  background-color: ${({ theme }) => theme.colors.accent};
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  margin: ${({ theme }) => theme.spacing.xl} 0;
  text-align: center;
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
  
  p {
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }
  
  a {
    display: inline-block;
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    font-weight: ${({ theme }) => theme.typography.fontWeights.semiBold};
    transition: background-color ${({ theme }) => theme.transitions.default};
    
    &:hover {
      background-color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

const NoResults = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xxl} 0;
  
  h2 {
    margin-bottom: ${({ theme }) => theme.spacing.lg};
  }
  
  p {
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const Tag: React.FC = () => {
  const { tag } = useParams<{ tag: string }>();
  const decodedTag = tag ? decodeURIComponent(tag) : '';
  const tagDisplayName = decodedTag.charAt(0).toUpperCase() + decodedTag.slice(1);
  
  // Get posts with this tag
  const tagPosts = blogPosts.flat(2).filter(post => 
    post.tags.some(t => t.toLowerCase() === decodedTag.toLowerCase())
  );
  
  // Tag descriptions for SEO
  const tagDescriptions: Record<string, string> = {
    'health benefits': 'Discover the numerous health benefits of tea, from antioxidants to stress reduction. Our articles explore the science behind tea\'s wellness properties.',
    'brewing tips': 'Master the art of tea brewing with expert tips on water temperature, steeping time, and equipment. Learn how to extract the best flavor from every leaf.',
    'tea types': 'Explore the six main types of tea - white, green, oolong, black, pu-erh, and herbal - and their unique characteristics, processing methods, and flavor profiles.',
    'seasonal teas': 'Discover teas that perfectly complement each season, from refreshing summer brews to warming winter blends. Explore Adagio\'s seasonal collections.',
    'mindfulness': 'Learn how tea can enhance mindfulness practices and become part of your daily wellness ritual. Explore traditional ceremonies and modern approaches.',
  };
  
  // Default description if tag isn't in our predefined list
  const description = tagDescriptions[decodedTag.toLowerCase()] || 
    `Explore our collection of articles tagged with ${tagDisplayName}. Find expert information, brewing tips, and recommendations for the best tea experiences.`;
  
  return (
    <>
      <SEO 
        title={`${tagDisplayName} Tea Articles`} 
        description={description}
      />
      
      <TagContainer>
        <TagHeader>
          <h1>Articles Tagged: {tagDisplayName}</h1>
          <p>{description}</p>
        </TagHeader>
        
        {tagPosts.length > 0 ? (
          <>
            <BlogGrid>
              {tagPosts.map(post => (
                <BlogCard key={post.id} post={post} />
              ))}
            </BlogGrid>
            
            <PromoBox>
              <h3>Discover Premium Teas</h3>
              <p>
                Enhance your {tagDisplayName.toLowerCase()} knowledge with Adagio's exceptional tea selection. 
                From rare single-origin varieties to perfectly crafted blends, find teas that delight your senses.
              </p>
              <a 
                href="https://www.jdoqocy.com/click-9083409-10575414" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Explore Tea Collection
              </a>
            </PromoBox>
          </>
        ) : (
          <NoResults>
            <h2>No Articles Found</h2>
            <p>
              We couldn't find any articles tagged with {tagDisplayName}. 
              Please check back later or explore other tags.
            </p>
            <a 
              href="https://www.jdoqocy.com/click-9083409-10575414" 
              target="_blank" 
              rel="noopener noreferrer"
              className="button"
            >
              Explore Adagio's Tea Collection
            </a>
          </NoResults>
        )}
      </TagContainer>
    </>
  );
};

export default Tag;