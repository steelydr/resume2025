import React from 'react';
import styled from 'styled-components';
import { colors, projects } from '../constants';
import { FolderOpen } from 'lucide-react';

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

const SkillBadge = styled.span`
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  background-color: ${colors.accent}20;
  color: ${colors.accent};
  border: 1px solid ${colors.accent}40;
`;

const ProjectsSection = () => {
  return (
    <SectionContainer>
      <SectionTitle>
        <FolderOpen style={{ width: '2rem', height: '2rem', color: colors.primary }} />
        Selected Projects
      </SectionTitle>
      {projects.map((project, index) => (
        <Card key={index}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1rem', color: colors.dark }}>{project.title}</h3>
          <div style={{ marginBottom: '1rem' }}>
            <h4 style={{ fontWeight: '600', marginBottom: '0.5rem', color: colors.secondary }}>Tech Stack:</h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {project.tech.map((tech) => (
                <SkillBadge key={tech}>{tech}</SkillBadge>
              ))}
            </div>
          </div>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {project.achievements.map((achievement, idx) => (
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

export default ProjectsSection;