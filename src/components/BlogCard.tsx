import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  author: string;
}

interface BlogCardProps {
  post: BlogPost;
}

const Card = styled.article`
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.small};
  transition: transform ${({ theme }) => theme.transitions.default}, box-shadow ${({ theme }) => theme.transitions.default};
  background-color: white;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`;

const CardImage = styled(Link)`
  height: 200px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform ${({ theme }) => theme.transitions.default};
    
    &:hover {
      transform: scale(1.05);
    }
  }
`;

const CardContent = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const CardMeta = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.lightText};
`;

const Category = styled(Link)`
  font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
  color: ${({ theme }) => theme.colors.secondary};
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const CardTitle = styled.h3`
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-size: 1.4rem;
  
  a {
    color: ${({ theme }) => theme.colors.primary};
    transition: color ${({ theme }) => theme.transitions.default};
    
    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

const CardExcerpt = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.lightText};
  flex-grow: 1;
`;

const ReadMore = styled(Link)`
  align-self: flex-start;
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.9rem;
  font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
  transition: background-color ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.tertiary};
  }
`;

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <Card>
      <CardImage to={`/blog/${post.slug}`}>
        <img src={post.image} alt={post.title} />
      </CardImage>
      <CardContent>
        <CardMeta>
          <Category to={`/category/${post.category.toLowerCase()}`}>{post.category}</Category>
          <span>{post.date}</span>
        </CardMeta>
        <CardTitle>
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </CardTitle>
        <CardExcerpt>{post.excerpt}</CardExcerpt>
        <ReadMore to={`/blog/${post.slug}`}>Read More</ReadMore>
      </CardContent>
    </Card>
  );
};

export default BlogCard;