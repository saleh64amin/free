import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem 0;
  transition: var(--transition);
  background: ${props => props.scrolled ? 'white' : 'transparent'};
  box-shadow: ${props => props.scrolled ? 'var(--card-shadow)' : 'none'};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.a`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${props => props.scrolled ? 'var(--primary-color)' : 'white'};
  transition: var(--transition);
  text-shadow: ${props => props.scrolled ? 'none' : '2px 2px 4px rgba(0, 0, 0, 0.2)'};

  &:hover {
    transform: translateY(-2px);
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  color: ${props => props.scrolled ? 'var(--primary-color)' : 'white'};
  font-size: 1.5rem;
  transition: var(--transition);

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${props => props.isOpen ? '0' : '-100%'};
    width: 70%;
    height: 100vh;
    background: white;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: var(--transition);
    box-shadow: ${props => props.isOpen ? '-5px 0 15px rgba(0, 0, 0, 0.1)' : 'none'};
  }
`;

const NavLink = styled.a`
  color: ${props => props.scrolled ? 'var(--text-color)' : 'white'};
  font-weight: 500;
  transition: var(--transition);
  position: relative;
  padding: 0.5rem 0;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: ${props => props.scrolled ? 'var(--primary-color)' : 'white'};
    transform: scaleX(0);
    transition: var(--transition);
  }

  &:hover {
    color: ${props => props.scrolled ? 'var(--primary-color)' : 'var(--accent-color)'};
    transform: translateY(-2px);

    &::after {
      transform: scaleX(1);
    }
  }

  @media (max-width: 768px) {
    color: var(--text-color);
    font-size: 1.2rem;

    &:hover {
      color: var(--primary-color);
    }
  }
`;

const Overlay = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    opacity: ${props => props.isOpen ? 1 : 0};
    visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
    transition: var(--transition);
    z-index: 999;
  }
`;

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e) => {
    e.preventDefault();
    const target = document.querySelector(e.target.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <Nav scrolled={isScrolled}>
        <Container>
          <Logo href="#home" scrolled={isScrolled} onClick={handleLinkClick}>
            NutriLife
          </Logo>
          <MenuButton
            scrolled={isScrolled}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
          </MenuButton>
          <NavLinks isOpen={isMenuOpen}>
            <NavLink href="#home" scrolled={isScrolled} onClick={handleLinkClick}>
              الرئيسية
            </NavLink>
            <NavLink href="#features" scrolled={isScrolled} onClick={handleLinkClick}>
              برامجنا
            </NavLink>
            <NavLink href="#services" scrolled={isScrolled} onClick={handleLinkClick}>
              خدماتنا
            </NavLink>
            <NavLink href="#contact" scrolled={isScrolled} onClick={handleLinkClick}>
              تواصل معنا
            </NavLink>
          </NavLinks>
        </Container>
      </Nav>
      <Overlay isOpen={isMenuOpen} onClick={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Navbar;
