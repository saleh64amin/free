import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Card = styled.div`
  background: white;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  will-change: transform;
  border: 2px solid transparent;
  background-clip: padding-box;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 5px;
    background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover {
    border-image: linear-gradient(45deg, var(--primary-color), var(--secondary-color)) 1;
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  }

  .swiper-slide-active & {
    transform: translateY(-10px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);

    &::before {
      transform: scaleX(1);
    }
  }
`;

const IconWrapper = styled.div`
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: white;
  font-size: 1.8rem;
  transition: transform 0.3s ease;

  .swiper-slide-active & {
    transform: scale(1.1);
  }
`;

const Title = styled.h3`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 1rem;
  color: var(--text-color);
  font-weight: 700;
`;

const Description = styled.p`
  text-align: center;
  color: #666;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const Price = styled.div`
  text-align: center;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  .price-value {
    font-size: 2.5rem;
    font-weight: 800;
    color: var(--primary-color);
    text-shadow: 2px 2px 4px rgba(46, 204, 113, 0.2);
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      right: 0;
      height: 3px;
      background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
    }
  }

  .price-period {
    font-size: 1rem;
    color: #666;
    font-weight: 400;
    margin-top: 0.5rem;
  }

  .price-tag {
    background: rgba(46, 204, 113, 0.1);
    padding: 0.3rem 0.8rem;
    border-radius: 20px;
    margin-top: 0.5rem;
    font-size: 0.9rem;
    color: var(--primary-color);
  }
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem;
  flex-grow: 1;
`;

const Feature = styled.li`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 1rem;
  color: #666;
  font-size: 1rem;

  svg {
    color: var(--primary-color);
    font-size: 1rem;
    filter: drop-shadow(1px 1px 1px rgba(46, 204, 113, 0.2));
  }
`;

const WhatsAppButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  background: linear-gradient(45deg, #25D366, #20bd5a);
  color: white;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  transition: all 0.3s ease;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(37, 211, 102, 0.2);
  transform: translateY(0);
  text-decoration: none;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(37, 211, 102, 0.3);
    background: linear-gradient(45deg, #20bd5a, #1ca04a);
  }

  svg {
    font-size: 1.3rem;
    filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.2));
  }
`;

const ProgramCard = ({ title, description, icon, price, features }) => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'weight':
        return 'dumbbell';
      case 'dumbbell':
        return 'dumbbell';
      case 'heartbeat':
        return 'heart';
      case 'child':
        return 'child';
      case 'apple-alt':
        return 'apple-alt';
      default:
        return 'star';
    }
  };

  const handleWhatsAppClick = (e) => {
    e.preventDefault();
    const message = `مرحباً، أريد الاستفسار عن ${title}`;
    window.open(`https://wa.me/+201127909244?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <Card>
      <IconWrapper>
        <FontAwesomeIcon icon={getIcon(icon)} />
      </IconWrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Price>
        <div className="price-value">{price} ريال</div>
        <div className="price-period">/ جلسة</div>
        <div className="price-tag">خصم لأول مرة</div>
      </Price>
      <FeaturesList>
        {features.map((feature, index) => (
          <Feature key={index}>
            <FontAwesomeIcon icon={faCheck} />
            {feature}
          </Feature>
        ))}
      </FeaturesList>
      <WhatsAppButton onClick={handleWhatsAppClick}>
        <FontAwesomeIcon icon={faWhatsapp} />
        احجز الآن
      </WhatsAppButton>
    </Card>
  );
};

export default ProgramCard;
