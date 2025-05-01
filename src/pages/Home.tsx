import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import BlogCard from '../components/BlogCard';
import blogPosts from '../data/blogPosts.json';

const HeroSection = styled.section`
  position: relative;
  height: 600px;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), 
              url('/images/hero-tea.jpg') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    height: 450px;
  }
`;

const HeroContent = styled.div`
  max-width: 800px;
  padding: ${({ theme }) => theme.spacing.xl};
  
  h1 {
    font-size: 3rem;
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    
    @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
      font-size: 2.5rem;
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
      font-size: 2rem;
    }
  }
  
  p {
    font-size: 1.2rem;
    margin-bottom: ${({ theme }) => theme.spacing.xl};
    
    @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
      font-size: 1rem;
    }
  }
`;

const HeroButton = styled(Link)`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  font-weight: 600;
  transition: background-color 0.3s ease, transform 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.tertiary};
    transform: translateY(-3px);
  }
`;

const SectionContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xxl} ${({ theme }) => theme.spacing.lg};
`;

const SectionHeading = styled.h2`
  font-size: 2rem;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  text-align: center;
  
  &:after {
    content: '';
    display: block;
    width: 80px;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.primary};
    margin: ${({ theme }) => theme.spacing.sm} auto 0;
  }
`;

const FeaturedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    grid-template-columns: 1fr;
  }
`;

const CategoriesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.spacing.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    grid-template-columns: 1fr;
  }
`;

const CategoryCard = styled(Link)<{ backgroundImage: string }>`
  position: relative;
  height: 200px;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), 
              url(${props => props.backgroundImage}) center/cover no-repeat;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const PromoSection = styled.section`
  background-color: ${({ theme }) => theme.colors.accent};
  padding: ${({ theme }) => theme.spacing.xxl} 0;
`;

const PromoContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    grid-template-columns: 1fr;
  }
`;

const PromoContent = styled.div`
  h2 {
    font-size: 2rem;
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
  
  p {
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    font-size: 1.1rem;
  }
`;

const PromoButton = styled.a`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  font-weight: 600;
  transition: background-color 0.3s ease, transform 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    transform: translateY(-3px);
  }
`;

const PromoImage = styled.div`
  height: 400px;
  background-image: url('/images/tea-collection.jpg');
  background-size: cover;
  background-position: center;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.medium};
`;

const Home: React.FC = () => {
  // Get the most recent 6 posts
  const featuredPosts = blogPosts.flat(2)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 6);
    
  // Extract unique categories and assign images
  const categories = Array.from(new Set(blogPosts.flat(2).map(post => post.category)))
    .slice(0, 4)
    .map((category, index) => {
      const images = [
        '/images/category-health.jpg',
        '/images/category-brewing.jpg',
        '/images/category-collections.jpg',
        '/images/category-wellness.jpg',
      ];
      return {
        name: category,
        image: images[index],
      };
    });

  return (
    <>
      <SEO 
        title="Premium Tea Blog & Guides" 
        description="Discover the world of premium teas with expert brewing guides, health benefit insights, and curated collections from Adagio Teas."
      />
      
      <HeroSection>
        <HeroContent>
          <h1>Discover the World of Premium Teas</h1>
          <p>
            Expert guides, brewing tips, and curated selections to enhance your tea experience.
            Explore our blog and find your perfect cup from Adagio's exceptional collection.
          </p>
          <HeroButton to="https://www.jdoqocy.com/click-9083409-10575414" target="_blank" rel="noopener noreferrer">
            Explore Adagio Teas
          </HeroButton>
        </HeroContent>
      </HeroSection>
      
      <section>
        <SectionContainer>
          <SectionHeading>Latest Articles</SectionHeading>
          <FeaturedGrid>
            {featuredPosts.map(post => (
              <BlogCard key={post.id} post={post} />
            ))}
          </FeaturedGrid>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <HeroButton to="/blog">View All Articles</HeroButton>
          </div>
        </SectionContainer>
      </section>
      
      <section>
        <SectionContainer>
          <SectionHeading>Explore by Category</SectionHeading>
          <CategoriesContainer>
            {categories.map(category => (
              <CategoryCard 
                key={category.name}
                to={`/category/${category.name.toLowerCase()}`}
                backgroundImage={category.image}
              >
                {category.name}
              </CategoryCard>
            ))}
          </CategoriesContainer>
        </SectionContainer>
      </section>
      
      <PromoSection>
        <PromoContainer>
          <PromoContent>
            <h2>Premium Loose Leaf Teas Delivered to Your Door</h2>
            <p>
              Explore Adagio's extensive collection of premium teas sourced from the finest tea gardens around the world.
              From rare single-origin varieties to delightful seasonal blends, find your perfect cup today.
            </p>
            <p>
              Adagio offers exceptional quality, direct sourcing, and a true passion for the art of tea.
              Join thousands of tea enthusiasts who have discovered their favorite teas through Adagio.
            </p>
            <PromoButton 
              href="https://www.jdoqocy.com/click-9083409-10575414" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Shop Premium Teas
            </PromoButton>
          </PromoContent>
          <PromoImage />
        </PromoContainer>
      </PromoSection>
    </>
  );
};

export default Home;