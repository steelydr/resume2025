import React from 'react';
import styled from 'styled-components';
import { colors, education } from '../constants';
import { GraduationCap, Calendar } from 'lucide-react';

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

const EducationSection = () => {
  return (
    <SectionContainer>
      <SectionTitle>
        <GraduationCap style={{ width: '2rem', height: '2rem', color: colors.primary }} />
        Education
      </SectionTitle>
      {education.map((edu, index) => (
        <Card key={index}>
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column',
            '@media (min-width: 768px)': { 
              flexDirection: 'row', 
              alignItems: 'center', 
              justifyContent: 'space-between' 
            }
          }}>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: colors.dark }}>{edu.degree}</h3>
              {edu.specialization && (
                <p style={{ fontSize: '1.125rem', color: colors.primary }}>{edu.specialization}</p>
              )}
              <p style={{ fontWeight: '600', color: colors.secondary }}>{edu.school}</p>
              <p style={{ color: colors.gray }}>{edu.location}</p>
            </div>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.5rem', 
              marginTop: '0.5rem',
              '@media (min-width: 768px)': { marginTop: '0' }
            }}>
              <Calendar style={{ width: '1rem', height: '1rem', color: colors.gray }} />
              <span style={{ color: colors.gray }}>{edu.period}</span>
            </div>
          </div>
        </Card>
      ))}
    </SectionContainer>
  );
};

export default EducationSection;