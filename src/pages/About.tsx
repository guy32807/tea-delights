import React from 'react';
import styled from 'styled-components';
import SEO from '../components/SEO';

const AboutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.lg};
`;

const AboutHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  
  h1 {
    font-size: 2.5rem;
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
  
  p {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.lightText};
  }
`;

const AboutSection = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  
  h2 {
    font-size: 1.8rem;
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    color: ${({ theme }) => theme.colors.primary};
    position: relative;
    
    &:after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 60px;
      height: 3px;
      background-color: ${({ theme }) => theme.colors.secondary};
    }
  }
  
  p {
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
  }
  
  a {
    color: ${({ theme }) => theme.colors.secondary};
    font-weight: ${({ theme }) => theme.typography.fontWeights.semiBold};
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const TeamSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.xl};
  margin-top: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    grid-template-columns: 1fr;
  }
`;

const TeamMember = styled.div`
  text-align: center;
  
  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
  
  h3 {
    margin-bottom: ${({ theme }) => theme.spacing.xs};
  }
  
  p.role {
    font-size: 0.9rem;
    font-style: italic;
    color: ${({ theme }) => theme.colors.lightText};
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }
  
  p.bio {
    font-size: 0.95rem;
    text-align: left;
  }
`;

const PromoBox = styled.div`
  background-color: ${({ theme }) => theme.colors.accent};
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  margin-top: ${({ theme }) => theme.spacing.xl};
  text-align: center;
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
  
  p {
    margin-bottom: ${({ theme }) => theme.spacing.lg};
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

const About: React.FC = () => {
  return (
    <>
      <SEO 
        title="About Us" 
        description="Learn about Tea Delights, our mission to share premium tea knowledge, and our partnership with Adagio Teas."
      />
      
      <AboutContainer>
        <AboutHeader>
          <h1>About Tea Delights</h1>
          <p>Sharing our passion for exceptional teas since 2022</p>
        </AboutHeader>
        
        <AboutSection>
          <h2>Our Story</h2>
          <p>
            Tea Delights was born from a simple passion: the love of exceptional tea. What started as a personal journey 
            to explore the world's finest teas evolved into a mission to share that knowledge and enthusiasm with others.
          </p>
          <p>
            We believe that tea is more than just a beverage—it's a moment of pause in a busy day, a ritual that connects 
            us to ancient traditions, and a path to wellness and mindfulness. Our blog aims to make premium tea accessible 
            to everyone, from novices curious about loose leaf tea to experienced connoisseurs seeking to deepen their knowledge.
          </p>
          <p>
            Through our partnership with <a href="https://www.jdoqocy.com/click-9083409-10575414" target="_blank" rel="noopener noreferrer">Adagio Teas</a>, 
            we're able to recommend exceptional quality teas that we personally select and enjoy. Adagio's commitment to 
            sourcing directly from tea gardens around the world ensures fresh, authentic teas that truly represent their 
            origins and traditions.
          </p>
        </AboutSection>
        
        <AboutSection>
          <h2>Our Team</h2>
          <p>
            Tea Delights is brought to you by a small team of dedicated tea enthusiasts, each bringing unique expertise 
            and perspective to our content. We're united by our passion for quality tea and our desire to make the world 
            of premium tea more approachable.
          </p>
          
          <TeamSection>
            <TeamMember>
              <img src="/images/team-emily.jpg" alt="Emily Chen" />
              <h3>Emily Chen</h3>
              <p className="role">Founder & Tea Specialist</p>
              <p className="bio">
                With over 10 years of experience in the tea industry and formal training in tea evaluation, 
                Emily brings expert knowledge and discerning taste to Tea Delights.
              </p>
            </TeamMember>
            
            <TeamMember>
              <img src="/images/team-james.jpg" alt="James Wilson" />
              <h3>James Wilson</h3>
              <p className="role">Content Director</p>
              <p className="bio">
                A former food journalist with a passion for storytelling, James ensures our content is both 
                informative and engaging, making complex tea topics accessible to all.
              </p>
            </TeamMember>
            
            <TeamMember>
              <img src="/images/team-aisha.jpg" alt="Aisha Patel" />
              <h3>Aisha Patel</h3>
              <p className="role">Wellness Advisor</p>
              <p className="bio">
                As a certified nutritionist with a special interest in plant-based wellness, Aisha provides 
                evidence-based insights on the health benefits of different tea varieties.
              </p>
            </TeamMember>
          </TeamSection>
        </AboutSection>
        
        <AboutSection>
          <h2>Our Approach</h2>
          <p>
            At Tea Delights, we believe in providing honest, well-researched content that truly serves our readers. 
            Our articles are based on extensive research, personal testing, and consultation with tea experts.
          </p>
          <p>
            We personally sample and evaluate every tea we recommend, ensuring that our suggestions meet our high 
            standards for quality, flavor, and value. Our partnership with Adagio allows us to confidently recommend 
            teas that we know will provide an exceptional experience.
          </p>
          <p>
            While we do earn a commission from Adagio when you purchase through our links (at no additional cost to you), 
            we never recommend products solely for financial gain. Our reputation and your trust are far more valuable to us.
          </p>
        </AboutSection>
        
        <PromoBox>
          <h3>Ready to Experience Premium Teas?</h3>
          <p>
            Explore Adagio's exceptional collection of teas sourced directly from the world's finest tea gardens. 
            From classic favorites to rare specialties, discover your perfect cup today.
          </p>
          <a 
            href="https://www.jdoqocy.com/click-9083409-10575414" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Shop Adagio Teas
          </a>
        </PromoBox>
      </AboutContainer>
    </>
  );
};

export default About;