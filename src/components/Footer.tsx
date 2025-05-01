import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons';

const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: ${({ theme }) => theme.spacing.xl} 0;
`;

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.spacing.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    grid-template-columns: 1fr;
  }
`;

const FooterSection = styled.div`
  h3 {
    color: white;
    margin-bottom: ${({ theme }) => theme.spacing.md};
    font-size: 1.2rem;
  }
`;

const FooterLinks = styled.ul`
  list-style: none;
  
  li {
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }
  
  a {
    color: ${({ theme }) => theme.colors.tertiary};
    
    &:hover {
      color: white;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.md};
  
  a {
    color: white;
    font-size: 1.5rem;
    
    &:hover {
      color: ${({ theme }) => theme.colors.tertiary};
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing.xl};
  padding-top: ${({ theme }) => theme.spacing.md};
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  
  a {
    color: ${({ theme }) => theme.colors.tertiary};
    
    &:hover {
      color: white;
    }
  }
`;

const NewsletterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  
  input {
    padding: ${({ theme }) => theme.spacing.sm};
    border-radius: ${({ theme }) => theme.borderRadius.small};
    border: none;
  }
  
  button {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: white;
    border: none;
    padding: ${({ theme }) => theme.spacing.sm};
    border-radius: ${({ theme }) => theme.borderRadius.small};
    font-weight: 600;
    transition: background-color 0.3s ease;
    
    &:hover {
      background-color: ${({ theme }) => theme.colors.tertiary};
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <FooterContainer>
        <FooterSection>
          <h3>Tea Delights</h3>
          <p>Your guide to the wonderful world of premium teas, brewing techniques, and tea culture.</p>
          <SocialLinks>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noreferrer" aria-label="Pinterest">
              <FontAwesomeIcon icon={faPinterest} />
            </a>
          </SocialLinks>
        </FooterSection>
        
        <FooterSection>
          <h3>Quick Links</h3>
          <FooterLinks>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/blog">Tea Blog</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </FooterLinks>
        </FooterSection>
        
        <FooterSection>
          <h3>Popular Posts</h3>
          <FooterLinks>
            <li><Link to="/blog/health-benefits-green-tea">Health Benefits of Green Tea</Link></li>
            <li><Link to="/blog/perfect-tea-brewing-techniques">Perfect Tea Brewing</Link></li>
            <li><Link to="/blog/adagio-seasonal-teas">Seasonal Tea Collections</Link></li>
            <li><Link to="/blog/tea-mindfulness-rituals">Tea and Mindfulness</Link></li>
          </FooterLinks>
        </FooterSection>
        
        <FooterSection>
          <h3>Stay Updated</h3>
          <p>Subscribe to our newsletter for the latest tea guides and special offers.</p>
          <NewsletterForm>
            <input type="email" placeholder="Your email address" aria-label="Email address" />
            <button type="submit">Subscribe</button>
          </NewsletterForm>
        </FooterSection>
      </FooterContainer>
      
      <Copyright>
        <p>&copy; {new Date().getFullYear()} Tea Delights. All rights reserved. | Proudly featuring <a href="https://www.jdoqocy.com/click-9083409-10575414" target="_blank" rel="noopener noreferrer">Adagio Teas</a></p>
      </Copyright>
    </StyledFooter>
  );
};

export default Footer;