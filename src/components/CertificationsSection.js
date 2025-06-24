import React from 'react';
import styled from 'styled-components';
import { colors, certifications } from '../constants';
import { Award } from 'lucide-react';

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Card = styled.div`
  background: ${colors.cardBg};
  backdrop-filter: blur(12px);
  border-radius: 1rem;
  padding: 1.5rem;
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

const GridContainer = styled.div`
  display: grid;
  gap: 1.5rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ContactIcon = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.primary}20;
`;

const CertificationsSection = () => {
  return (
    <SectionContainer>
      <SectionTitle>
        <Award style={{ width: '2rem', height: '2rem', color: colors.primary }} />
        Certifications
      </SectionTitle>
      <GridContainer>
        {certifications.map((cert, index) => (
          <Card key={index}>
            <ContactItem>
              <ContactIcon>
                <Award style={{ width: '1.5rem', height: '1.5rem', color: colors.primary }} />
              </ContactIcon>
              <span style={{ fontWeight: '600', color: colors.dark }}>{cert}</span>
            </ContactItem>
          </Card>
        ))}
      </GridContainer>
    </SectionContainer>
  );
};

export default CertificationsSection;