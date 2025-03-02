import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const HeroSection = styled.section`
  min-height: 100vh;
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 100px 0;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 300px;
    height: 300px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
  }

  &::before {
    top: -100px;
    right: -100px;
  }

  &::after {
    bottom: -100px;
    left: -100px;
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 0 var(--container-padding);
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  width: 100%;
  max-width: 800px;
  color: white;
  text-align: center;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.8s ease forwards;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.8s ease forwards 0.2s;
  color: rgba(255, 255, 255, 0.9);

  @media (max-width: 768px) {
    font-size: 1.1rem;
    padding: 0 1rem;
  }
`;

const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: white;
  color: var(--primary-color);
  padding: 1rem 2rem;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  transition: var(--transition);
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.8s ease forwards 0.4s;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
    background: var(--accent-color);
    color: white;
  }

  svg {
    font-size: 1.3rem;
  }

  @media (max-width: 768px) {
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  width: 30px;
  height: 50px;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 15px;
  opacity: 0;
  animation: fadeIn 0.8s ease forwards 0.6s;

  &::before {
    content: '';
    position: absolute;
    top: 8px;
    left: 50%;
    width: 6px;
    height: 6px;
    background: white;
    border-radius: 50%;
    transform: translateX(-50%);
    animation: scroll 2s ease-out infinite;
  }

  @keyframes scroll {
    0% {
      transform: translate(-50%, 0);
      opacity: 1;
    }
    100% {
      transform: translate(-50%, 20px);
      opacity: 0;
    }
  }

  @keyframes fadeIn {
    to {
      opacity: 0.5;
    }
  }

  &:hover {
    opacity: 1;
    border-color: white;
  }
`;

const Hero = () => {
  return (
    <HeroSection id="home">
      <Container>
        <Content>
          <Title>ابدأ رحلتك نحو حياة صحية أفضل</Title>
          <Description>
            نقدم لك برامج تغذية متخصصة مصممة خصيصاً لاحتياجاتك، مع متابعة مستمرة ودعم كامل لتحقيق أهدافك الصحية
          </Description>
          <CTAButton href="https://wa.me/+201127909244?text=مرحبا، أريد معرفة المزيد عن برامج التغذية">
            <FontAwesomeIcon icon={faWhatsapp} />
            احصل على استشارة مجانية
          </CTAButton>
        </Content>
      </Container>
      <ScrollIndicator />
    </HeroSection>
  );
};

export default Hero;
