import React from 'react';
import styled from 'styled-components';
import { colors } from '../constants';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

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

const ContactSection = () => {
  return (
    <SectionContainer>
      <SectionTitle>
        <Mail style={{ width: '2rem', height: '2rem', color: colors.primary }} />
        Contact Information
      </SectionTitle>
      <Card>
        <GridContainer>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <ContactItem>
              <ContactIcon>
                <Phone style={{ width: '1.5rem', height: '1.5rem', color: colors.primary }} />
              </ContactIcon>
              <div>
                <p style={{ fontWeight: '600', color: colors.dark }}>Phone</p>
                <p style={{ color: colors.gray }}>3124593213</p>
              </div>
            </ContactItem>
            <ContactItem>
              <ContactIcon>
                <Mail style={{ width: '1.5rem', height: '1.5rem', color: colors.primary }} />
              </ContactIcon>
              <div>
                <p style={{ fontWeight: '600', color: colors.dark }}>Email</p>
                <p style={{ color: colors.gray }}>dsoni071rajeswari@gmail.com</p>
              </div>
            </ContactItem>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <ContactItem>
              <ContactIcon>
                <MapPin style={{ width: '1.5rem', height: '1.5rem', color: colors.primary }} />
              </ContactIcon>
              <div>
                <p style={{ fontWeight: '600', color: colors.dark }}>Location</p>
                <p style={{ color: colors.gray }}>Chicago, IL</p>
              </div>
            </ContactItem>
            <ContactItem>
              <ContactIcon>
                <Linkedin style={{ width: '1.5rem', height: '1.5rem', color: colors.primary }} />
              </ContactIcon>
              <div>
                <p style={{ fontWeight: '600', color: colors.dark }}>LinkedIn</p>
                <p style={{ color: colors.gray }}>Connect with me</p>
              </div>
            </ContactItem>
          </div>
        </GridContainer>
      </Card>
    </SectionContainer>
  );
};

export default ContactSection;