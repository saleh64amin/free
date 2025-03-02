import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserMd, faChartLine, faClock, faComments } from '@fortawesome/free-solid-svg-icons';

const ServicesSection = styled.section`
  padding: 80px 0;
  background: white;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const ServiceCard = styled.div`
  text-align: center;
  padding: 2rem;
  border-radius: 20px;
  background: white;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  transition: var(--transition);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
    transform: scaleX(0);
    transition: var(--transition);
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);

    &::before {
      transform: scaleX(1);
    }
  }
`;

const IconWrapper = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  color: white;
  font-size: 2rem;
  transition: var(--transition);

  ${ServiceCard}:hover & {
    transform: rotateY(360deg);
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: var(--text-color);
`;

const ServiceDescription = styled.p`
  color: #666;
  line-height: 1.6;
`;

const services = [
  {
    icon: faUserMd,
    title: "خطط تغذية مخصصة",
    description: "نصمم خطط تغذية تناسب احتياجاتك وأهدافك الشخصية"
  },
  {
    icon: faChartLine,
    title: "متابعة مستمرة",
    description: "نتابع تقدمك بشكل دوري ونعدل الخطة حسب النتائج"
  },
  {
    icon: faClock,
    title: "دعم على مدار الساعة",
    description: "نقدم الدعم والإرشاد المستمر طوال فترة البرنامج"
  },
  {
    icon: faComments,
    title: "استشارات مجانية",
    description: "نوفر استشارات مجانية لتحديد البرنامج المناسب لك"
  }
];

const Services = () => {
  return (
    <ServicesSection id="services">
      <Container>
        <Header>
          <Title>خدماتنا المميزة</Title>
          <Description>نقدم مجموعة متكاملة من الخدمات لمساعدتك في تحقيق أهدافك الصحية</Description>
        </Header>
        <Grid>
          {services.map((service, index) => (
            <ServiceCard key={index}>
              <IconWrapper>
                <FontAwesomeIcon icon={service.icon} />
              </IconWrapper>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
            </ServiceCard>
          ))}
        </Grid>
      </Container>
    </ServicesSection>
  );
};

export default Services;
