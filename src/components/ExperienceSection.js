import React from 'react';
import styled from 'styled-components';
import { colors, experiences } from '../constants';
import { Briefcase, Calendar } from 'lucide-react';

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

const ListItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 0.5rem;
  
  &::before {
    content: '';
    display: block;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 9999px;
    margin-top: 0.5rem;
    flex-shrink: 0;
    background-color: ${colors.primary};
  }
`;

const ExperienceSection = () => {
  return (
    <SectionContainer>
      <SectionTitle>
        <Briefcase style={{ width: '2rem', height: '2rem', color: colors.primary }} />
        Work Experience
      </SectionTitle>
      {experiences.map((exp, index) => (
        <Card key={index}>
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            marginBottom: '1rem',
            '@media (min-width: 768px)': { 
              flexDirection: 'row', 
              alignItems: 'center', 
              justifyContent: 'space-between' 
            }
          }}>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: colors.dark }}>{exp.title}</h3>
              <p style={{ fontSize: '1.125rem', fontWeight: '600', color: colors.primary }}>{exp.company}</p>
              <p style={{ color: colors.gray }}>{exp.location}</p>
            </div>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.5rem', 
              marginTop: '0.5rem',
              '@media (min-width: 768px)': { marginTop: '0' }
            }}>
              <Calendar style={{ width: '1rem', height: '1rem', color: colors.gray }} />
              <span style={{ color: colors.gray }}>{exp.period}</span>
            </div>
          </div>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {exp.achievements.map((achievement, idx) => (
              <ListItem key={idx}>
                <span style={{ color: colors.gray }}>{achievement}</span>
              </ListItem>
            ))}
          </ul>
        </Card>
      ))}
    </SectionContainer>
  );
};

export default ExperienceSection;