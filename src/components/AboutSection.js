import React from 'react';
import styled from 'styled-components';
import { colors, skills } from '../constants';
import { Mail, Phone, MapPin, Linkedin, Code } from 'lucide-react';

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Card = styled.div`
  background: ${colors.cardBg};
  backdrop-filter: blur(12px);
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const SectionTitle = styled.h2`
  font-size: 1.875rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: ${colors.dark};
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const SkillBadge = styled.span`
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  background-color: ${props => props.accent ? `${colors.accent}20` : `${colors.primary}20`};
  color: ${props => props.accent ? colors.accent : colors.primary};
  border: 1px solid ${props => props.accent ? `${colors.accent}40` : `${colors.primary}40`};
`;

const GridContainer = styled.div`
  display: grid;
  gap: 1.5rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const AboutSection = () => {
  return (
    <SectionContainer>
      <Card>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
          <div style={{ 
            width: '4rem', 
            height: '4rem', 
            borderRadius: '9999px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            color: colors.dark, 
            fontSize: '1.25rem', 
            fontWeight: '700', 
            background: colors.gradient 
          }}>
            DR
          </div>
          <div>
            <h1 style={{ fontSize: '1.875rem', fontWeight: '700', color: colors.dark }}>Depala Rajeswari</h1>
            <p style={{ fontSize: '1.25rem', color: colors.gray }}>Software Engineer & AI Specialist</p>
          </div>
        </div>
        <div style={{ 
          display: 'grid', 
          gap: '1.5rem', 
          marginBottom: '2rem',
          '@media (min-width: 768px)': { gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' }
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Phone style={{ width: '1.25rem', height: '1.25rem', color: colors.primary }} />
            <span style={{ color: colors.dark }}>3124593213</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Mail style={{ width: '1.25rem', height: '1.25rem', color: colors.primary }} />
            <span style={{ color: colors.dark }}>dsoni071rajeswari@gmail.com</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <MapPin style={{ width: '1.25rem', height: '1.25rem', color: colors.primary }} />
            <span style={{ color: colors.dark }}>Chicago, IL</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Linkedin style={{ width: '1.25rem', height: '1.25rem', color: colors.primary }} />
            <span style={{ color: colors.dark }}>LinkedIn Profile</span>
          </div>
        </div>
        <p style={{ fontSize: '1.125rem', lineHeight: '1.75', color: colors.gray }}>
          Experienced Software Engineer with expertise in AI/ML, cloud computing, and full-stack development. 
          Currently pursuing Master's in Computer Science with AI specialization from Illinois Institute of Technology. 
          Proven track record of building scalable applications, optimizing performance, and leading technical initiatives 
          across diverse technology stacks.
        </p>
      </Card>
      
      <Card>
        <SectionTitle>
          <Code style={{ width: '1.5rem', height: '1.5rem', color: colors.primary }} />
          Technical Skills
        </SectionTitle>
        <GridContainer>
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category}>
              <h3 style={{ fontWeight: '600', marginBottom: '0.75rem', color: colors.secondary }}>{category}</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {skillList.map((skill) => (
                  <SkillBadge key={skill}>{skill}</SkillBadge>
                ))}
              </div>
            </div>
          ))}
        </GridContainer>
      </Card>
    </SectionContainer>
  );
};

export default AboutSection;