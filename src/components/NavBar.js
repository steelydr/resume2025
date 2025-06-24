import React from 'react';
import styled from 'styled-components';
import { colors } from '../constants';
import { 
  Mail, Briefcase, GraduationCap, FolderOpen, Award, User 
} from 'lucide-react';

const Navbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  background: ${colors.navBg};
`;

const NavContainer = styled.div`
  max-width: 72rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

const NavTitle = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${colors.dark};
`;

const NavButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border-radius: 0.5rem;
  transition: all 0.3s;
  background: ${props => props.active ? 'rgba(255, 255, 255, 0.2)' : 'transparent'};
  color: ${props => props.active ? colors.dark : 'rgba(255, 255, 255, 0.8)'};
  
  &:hover {
    color: ${colors.dark};
    background: rgba(255, 255, 255, 0.1);
  }
`;

const NavBar = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { id: 'about', label: 'About Me', icon: User },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'certifications', label: 'Certifications', icon: Award },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <Navbar>
      <NavContainer>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <NavTitle>Depala Rajeswari</NavTitle>
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavButton
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  active={activeSection === item.id}
                >
                  <Icon style={{ width: '1rem', height: '1rem' }} />
                  {item.label}
                </NavButton>
              );
            })}
          </div>
        </div>
      </NavContainer>
    </Navbar>
  );
};

export default NavBar;