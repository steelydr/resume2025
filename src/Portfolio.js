import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from './constants';
import NavBar from './components/NavBar';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import EducationSection from './components/EducationSection';
import ProjectsSection from './components/ProjectsSection';
import CertificationsSection from './components/CertificationsSection';
import ContactSection from './components/ContactSection';

const Container = styled.div`
  min-height: 100vh;
  background: ${colors.white};
  color: ${colors.dark};
`;

const MainContent = styled.div`
  padding-top: 6rem;
  padding-bottom: 3rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`;

const ContentContainer = styled.div`
  max-width: 72rem;
  margin-left: auto;
  margin-right: auto;
`;

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');

  const renderSection = () => {
    switch (activeSection) {
      case 'about':
        return <AboutSection />;
      case 'experience':
        return <ExperienceSection />;
      case 'education':
        return <EducationSection />;
      case 'projects':
        return <ProjectsSection />;
      case 'certifications':
        return <CertificationsSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <AboutSection />;
    }
  };

  return (
    <Container>
      <NavBar activeSection={activeSection} setActiveSection={setActiveSection} />
      <MainContent>
        <ContentContainer>
          {renderSection()}
        </ContentContainer>
      </MainContent>
    </Container>
  );
};

export default Portfolio;