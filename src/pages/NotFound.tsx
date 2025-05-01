import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SEO from '../components/SEO';

const NotFoundContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xxl} ${({ theme }) => theme.spacing.lg};
  text-align: center;
`;

const ErrorCode = styled.h1`
  font-size: 8rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  line-height: 1;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 6rem;
  }
`;

const ErrorMessage = styled.h2`
  font-size: 2rem;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 1.5rem;
  }
`;

const ErrorDescription = styled.p`
  font-size: 1.1rem;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

const Button = styled(Link)`
  display: inline-block;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  font-weight: ${({ theme }) => theme.typography.fontWeights.semiBold};
  transition: background-color ${({ theme }) => theme.transitions.default}, transform ${({ theme }) => theme.transitions.default};
  
  &.primary {
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    
    &:hover {
      background-color: ${({ theme }) => theme.colors.secondary};
      transform: translateY(-3px);
    }
  }
  
  &.secondary {
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.primary};
    
    &:hover {
      background-color: ${({ theme }) => theme.colors.tertiary};
      transform: translateY(-3px);
    }
  }
`;

const PromoContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.accent};
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

const PromoHeading = styled.h3`
  font-size: 1.5rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const PromoDescription = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const PromoButton = styled.a`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  font-weight: ${({ theme }) => theme.typography.fontWeights.semiBold};
  transition: background-color ${({ theme }) => theme.transitions.default}, transform ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    transform: translateY(-3px);
  }
`;

const NotFound: React.FC = () => {
  return (
    <>
      <SEO 
        title="Page Not Found" 
        description="We couldn't find the page you were looking for. Explore our tea blog for brewing guides, health benefits, and premium tea recommendations."
      />
      
      <NotFoundContainer>
        <ErrorCode>404</ErrorCode>
        <ErrorMessage>Oops! Page Not Found</ErrorMessage>
        <ErrorDescription>
          The page you're looking for seems to have steeped too long and disappeared. 
          Don't worry, we have plenty of other delightful tea content to explore.
        </ErrorDescription>
        
        <ButtonsContainer>
          <Button to="/" className="primary">Return Home</Button>
          <Button to="/blog" className="secondary">Explore Blog</Button>
        </ButtonsContainer>
        
        <PromoContainer>
          <PromoHeading>Discover Adagio's Premium Teas</PromoHeading>
          <PromoDescription>
            While you're here, why not explore Adagio's exceptional collection of loose leaf teas? 
            From rare single-origin varieties to perfectly crafted blends, find your perfect cup today.
          </PromoDescription>
          <PromoButton 
            href="https://www.jdoqocy.com/click-9083409-10575414" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Shop Premium Teas
          </PromoButton>
        </PromoContainer>
      </NotFoundContainer>
    </>
  );
};

export default NotFound;