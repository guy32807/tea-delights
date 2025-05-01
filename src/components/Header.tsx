import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faSearch } from '@fortawesome/free-solid-svg-icons';

const StyledHeader = styled.header`
  background-color: white;
  box-shadow: ${({ theme }) => theme.shadows.small};
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const HeaderContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  
  img {
    height: 40px;
  }
  
  h1 {
    font-size: 1.5rem;
    margin: 0;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Navigation = styled.nav<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 70%;
    max-width: 300px;
    flex-direction: column;
    justify-content: flex-start;
    background-color: white;
    box-shadow: ${({ theme }) => theme.shadows.large};
    transform: translateX(${props => props.isOpen ? '0' : '100%'});
    transition: transform ${({ theme }) => theme.transitions.default};
    padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.lg};
    z-index: 1100;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    flex-direction: column;
    width: 100%;
  }
`;

const NavLink = styled(Link)<{ $active?: boolean }>`
  color: ${props => props.$active ? props.theme.colors.secondary : props.theme.colors.text};
  font-weight: ${props => props.$active ? props.theme.typography.fontWeights.semiBold : props.theme.typography.fontWeights.regular};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: ${props => props.$active ? '100%' : '0'};
    height: 2px;
    background-color: ${({ theme }) => theme.colors.secondary};
    transition: width ${({ theme }) => theme.transitions.default};
  }
  
  &:hover::after {
    width: 100%;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 1.2rem;
    padding: ${({ theme }) => theme.spacing.md} 0;
    
    &::after {
      bottom: 0;
    }
  }
`;

const SearchBar = styled.div`
  display: flex;
  margin-left: ${({ theme }) => theme.spacing.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    margin-left: 0;
    margin-top: ${({ theme }) => theme.spacing.xl};
    width: 100%;
  }
`;

const SearchInput = styled.input`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border: 1px solid ${({ theme }) => theme.colors.accent};
  border-radius: ${({ theme }) => theme.borderRadius.medium} 0 0 ${({ theme }) => theme.borderRadius.medium};
  width: 180px;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.secondary};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    width: 100%;
  }
`;

const SearchButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-radius: 0 ${({ theme }) => theme.borderRadius.medium} ${({ theme }) => theme.borderRadius.medium} 0;
  transition: background-color ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.5rem;
  z-index: 1200;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    display: block;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: ${({ theme }) => theme.spacing.md};
  right: ${({ theme }) => theme.spacing.md};
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.5rem;
  display: none;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    display: block;
  }
`;

const Overlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1050;
  display: ${props => props.isOpen ? 'block' : 'none'};
`;

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const location = useLocation();
  
  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);
  
  // Prevent body scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);
  
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality
    if (searchTerm.trim()) {
      // Navigate to search results
    }
  };
  
  return (
    <StyledHeader>
      <HeaderContainer>
        <Logo to="/">
          <img src="/images/logo.png" alt="Tea Delights Logo" />
          <h1>Tea Delights</h1>
        </Logo>
        
        <MobileMenuButton onClick={() => setIsMenuOpen(true)}>
          <FontAwesomeIcon icon={faBars} />
        </MobileMenuButton>
        
        <Overlay isOpen={isMenuOpen} onClick={() => setIsMenuOpen(false)} />
        
        <Navigation isOpen={isMenuOpen}>
          <CloseButton onClick={() => setIsMenuOpen(false)}>
            <FontAwesomeIcon icon={faTimes} />
          </CloseButton>
          
          <NavLinks>
            <NavLink to="/" $active={location.pathname === '/'}>Home</NavLink>
            <NavLink to="/blog" $active={location.pathname === '/blog' || location.pathname.startsWith('/blog/')}>Blog</NavLink>
            <NavLink to="/about" $active={location.pathname === '/about'}>About</NavLink>
            <NavLink 
              to="https://www.jdoqocy.com/click-9083409-10575414" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Shop Teas
            </NavLink>
          </NavLinks>
          
          <SearchBar>
            <form onSubmit={handleSearchSubmit}>
              <SearchInput 
                type="text" 
                placeholder="Search..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                aria-label="Search"
              />
              <SearchButton type="submit">
                <FontAwesomeIcon icon={faSearch} />
              </SearchButton>
            </form>
          </SearchBar>
        </Navigation>
      </HeaderContainer>
    </StyledHeader>
  );
};

export default Header;