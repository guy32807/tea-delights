import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import SEO from '../components/SEO';
import BlogCard from '../components/BlogCard';
import blogPosts from '../data/blogPosts.json';

const CategoryContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.lg};
`;

const CategoryHeader = styled.div`
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

const Category: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const decodedCategory = category ? decodeURIComponent(category) : '';
  const categoryDisplayName = decodedCategory.charAt(0).toUpperCase() + decodedCategory.slice(1);
  
  // Get posts for this category
  const categoryPosts = blogPosts.flat(2).filter(post => 
    post.category.toLowerCase() === decodedCategory.toLowerCase()
  );
  
  // Category descriptions for SEO
  const categoryDescriptions: Record<string, string> = {
    'health': 'Explore the health benefits of various teas, from antioxidant-rich green tea to calming herbal infusions. Learn how tea can support your wellness journey.',
    'brewing': 'Master the art of tea brewing with our expert guides. Learn proper techniques, optimal temperatures, and steeping times for every tea variety.',
    'collections': 'Discover curated tea collections for every season, occasion, and taste preference. Explore Adagio\'s premium tea selections and limited editions.',
    'wellness': 'Incorporate tea into your wellness routine with mindfulness practices, relaxation techniques, and holistic approaches to well-being through tea.',
    'education': 'Deepen your tea knowledge with educational articles covering tea types, origins, production methods, and tasting techniques.',
  };
  
  // Default description if category isn't in our predefined list
  const description = categoryDescriptions[decodedCategory.toLowerCase()] || 
    `Explore our collection of articles about ${categoryDisplayName} teas. Find expert information, brewing tips, and recommendations for the best tea experiences.`;
  
  return (
    <>
      <SEO 
        title={`${categoryDisplayName} Tea Articles`} 
        description={description}
      />
      
      <CategoryContainer>
        <CategoryHeader>
          <h1>{categoryDisplayName} Articles</h1>
          <p>{description}</p>
        </CategoryHeader>
        
        {categoryPosts.length > 0 ? (
          <>
            <BlogGrid>
              {categoryPosts.map(post => (
                <BlogCard key={post.id} post={post} />
              ))}
            </BlogGrid>
            
            <PromoBox>
              <h3>Explore {categoryDisplayName} Teas</h3>
              <p>
                Discover Adagio's premium selection of {categoryDisplayName.toLowerCase()} teas, 
                specially curated for exceptional flavor and quality. From classic favorites to 
                innovative blends, find your perfect cup today.
              </p>
              <a 
                href="https://www.jdoqocy.com/click-9083409-10575414" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Shop {categoryDisplayName} Teas
              </a>
            </PromoBox>
          </>
        ) : (
          <NoResults>
            <h2>No Articles Found</h2>
            <p>
              We couldn't find any articles in the {categoryDisplayName} category. 
              Please check back later or explore other categories.
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
      </CategoryContainer>
    </>
  );
};

export default Category;