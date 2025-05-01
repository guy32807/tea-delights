import React from 'react';
import styled from 'styled-components';

interface PromoSectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  backgroundImage: string;
}

const PromoContainer = styled.section<{ backgroundImage: string }>`
  background-image: linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(${props => props.backgroundImage});
  background-size: cover;
  background-position: center;
  padding: ${({ theme }) => theme.spacing.xxl} 0;
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  text-align: center;
  color: white;
`;

const PromoContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};
  
  h2 {
    color: white;
    margin-bottom: ${({ theme }) => theme.spacing.md};
    font-size: 2.2rem;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
      font-size: 1.8rem;
    }
  }
  
  p {
    margin-bottom: ${({ theme }) => theme.spacing.xl};
    font-size: 1.1rem;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
      font-size: 1rem;
    }
  }
`;

const PromoButton = styled.a`
  display: inline-block;
  background-color: white;
  color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  font-weight: ${({ theme }) => theme.typography.fontWeights.semiBold}; // Change 'semibold' to 'semiBold'
  transition: all ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.tertiary};
    transform: translateY(-3px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`;

const PromoSection: React.FC<PromoSectionProps> = ({
  title,
  description,
  buttonText,
  buttonLink,
  backgroundImage
}) => {
  return (
    <PromoContainer backgroundImage={backgroundImage}>
      <PromoContent>
        <h2>{title}</h2>
        <p>{description}</p>
        <PromoButton 
          href={buttonLink} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          {buttonText}
        </PromoButton>
      </PromoContent>
    </PromoContainer>
  );
};

export default PromoSection;