import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import SEO from '../components/SEO';
import BlogCard from '../components/BlogCard';
import blogPosts from '../data/blogPosts.json';

const BlogContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.lg};
`;

const HeaderSection = styled.div`
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

const FilterBar = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.md};
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const FilterLabel = styled.span`
  font-weight: ${({ theme }) => theme.typography.fontWeights.semiBold};
`;

const CategoryFilter = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const CategoryButton = styled.button<{ $active: boolean }>`
  background-color: ${props => props.$active ? props.theme.colors.primary : props.theme.colors.accent};
  color: ${props => props.$active ? 'white' : props.theme.colors.text};
  border: none;
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-size: 0.9rem;
  transition: background-color ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${props => props.$active ? props.theme.colors.primary : props.theme.colors.tertiary};
  }
`;

const SortFilter = styled.div`
  margin-left: auto;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    margin-left: 0;
    align-self: flex-start;
  }
`;

const SortSelect = styled.select`
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.md};
  border: 1px solid ${({ theme }) => theme.colors.accent};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  background-color: white;
  font-size: 0.9rem;
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

const PromoCard = styled.div`
  grid-column: span 3;
  background-color: ${({ theme }) => theme.colors.accent};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  margin: ${({ theme }) => theme.spacing.md} 0;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    grid-column: span 2;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    grid-column: span 1;
    flex-direction: column;
  }
`;

const PromoImage = styled.div`
  flex: 0 0 30%;
  height: 200px;
  background-image: url('/images/adagio-promo.jpg');
  background-size: cover;
  background-position: center;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    width: 100%;
    flex: auto;
  }
`;

const PromoContent = styled.div`
  flex: 1;
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }
  
  p {
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
  
  a {
    display: inline-block;
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
    border-radius: ${({ theme }) => theme.borderRadius.small};
    font-weight: ${({ theme }) => theme.typography.fontWeights.semiBold};
    transition: background-color ${({ theme }) => theme.transitions.default};
    
    &:hover {
      background-color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing.xxl};
  gap: ${({ theme }) => theme.spacing.sm};
`;

const PageButton = styled.button<{ $active?: boolean }>`
  background-color: ${props => props.$active ? props.theme.colors.primary : props.theme.colors.accent};
  color: ${props => props.$active ? 'white' : props.theme.colors.text};
  border: none;
  width: 40px;
  height: 40px;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-weight: ${props => props.$active ? 
    props.theme.typography.fontWeights.semiBold : 
    props.theme.typography.fontWeights.regular};
  transition: background-color ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${props => props.$active ? 
      props.theme.colors.primary : 
      props.theme.colors.tertiary};
  }
  
  &.prev, &.next {
    width: auto;
    padding: 0 ${({ theme }) => theme.spacing.md};
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    
    &:hover {
      background-color: ${props => props.$active ? 
        props.theme.colors.primary : 
        props.theme.colors.accent};
    }
  }
`;

const Blog: React.FC = () => {
  const [currentCategory, setCurrentCategory] = useState('all');
  const [sortOption, setSortOption] = useState('newest');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;
  
  // Extract all unique categories from blog posts
  const categories = useMemo(() => {
    const allCategories = blogPosts.flat(2).map(post => post.category);
    return ['all', ...Array.from(new Set(allCategories))];
  }, []);
  
  // Filter and sort posts
  const filteredAndSortedPosts = useMemo(() => {
    let filtered = blogPosts.flat(2);
    
    // Filter by category
    if (currentCategory !== 'all') {
      filtered = filtered.filter(post => post.category === currentCategory);
    }
    
    // Sort posts
    filtered.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      
      if (sortOption === 'newest') {
        return dateB - dateA;
      } else if (sortOption === 'oldest') {
        return dateA - dateB;
      } else if (sortOption === 'title-asc') {
        return a.title.localeCompare(b.title);
      } else {
        return b.title.localeCompare(a.title);
      }
    });
    
    return filtered;
  }, [currentCategory, sortOption]);
  
  // Pagination
  const totalPages = Math.ceil(filteredAndSortedPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredAndSortedPosts.slice(indexOfFirstPost, indexOfLastPost);
  
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <>
      <SEO 
        title="Tea Blog" 
        description="Explore our collection of tea articles covering brewing guides, health benefits, tea types, and more. Find expert tips and insights for tea enthusiasts."
      />
      
      <BlogContainer>
        <HeaderSection>
          <h1>Tea Delights Blog</h1>
          <p>
            Dive into our collection of articles covering everything from brewing techniques and tea varieties 
            to health benefits and the cultural significance of tea around the world.
          </p>
        </HeaderSection>
        
        <FilterBar>
          <div>
            <FilterLabel>Filter by: </FilterLabel>
            <CategoryFilter>
              {categories.map(category => (
                <CategoryButton 
                  key={category}
                  $active={currentCategory === category}
                  onClick={() => {
                    setCurrentCategory(category);
                    setCurrentPage(1);
                  }}
                >
                  {category === 'all' ? 'All' : category}
                </CategoryButton>
              ))}
            </CategoryFilter>
          </div>
          
          <SortFilter>
            <FilterLabel>Sort by: </FilterLabel>
            <SortSelect 
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="title-asc">Title (A-Z)</option>
              <option value="title-desc">Title (Z-A)</option>
            </SortSelect>
          </SortFilter>
        </FilterBar>
        
        <BlogGrid>
          {currentPosts.map((post, index) => (
            <React.Fragment key={post.id}>
              <BlogCard post={post} />
              
              {/* Insert promo after every 6 posts */}
              {(index + 1) % 6 === 0 && index !== currentPosts.length - 1 && (
                <PromoCard>
                  <PromoImage />
                  <PromoContent>
                    <h3>Premium Teas Delivered to Your Door</h3>
                    <p>
                      Explore Adagio's collection of premium loose leaf teas sourced directly from 
                      tea gardens around the world. Find your perfect cup today!
                    </p>
                    <a 
                      href="https://www.jdoqocy.com/click-9083409-10575414" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Shop Now
                    </a>
                  </PromoContent>
                </PromoCard>
              )}
            </React.Fragment>
          ))}
        </BlogGrid>
        
        {totalPages > 1 && (
          <PaginationContainer>
            <PageButton 
              className="prev"
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </PageButton>
            
            {Array.from({ length: totalPages }).map((_, index) => (
              <PageButton
                key={index}
                $active={currentPage === index + 1}
                onClick={() => paginate(index + 1)}
              >
                {index + 1}
              </PageButton>
            ))}
            
            <PageButton 
              className="next"
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </PageButton>
          </PaginationContainer>
        )}
      </BlogContainer>
    </>
  );
};

export default Blog;