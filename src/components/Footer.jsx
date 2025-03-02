import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const FooterSection = styled.footer`
  background: var(--text-color);
  color: white;
  padding: 60px 0 20px;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const Column = styled.div`
  h3 {
    font-size: 1.3rem;
    margin-bottom: 1.5rem;
    position: relative;
    padding-bottom: 0.5rem;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      right: 0;
      width: 50px;
      height: 2px;
      background: var(--primary-color);
    }
  }
`;

const About = styled.div`
  p {
    margin-bottom: 1.5rem;
    line-height: 1.6;
    color: #eee;
  }
`;

const Links = styled.ul`
  list-style: none;
  padding: 0;

  li {
    margin-bottom: 0.8rem;

    a {
      color: #eee;
      transition: var(--transition);

      &:hover {
        color: var(--primary-color);
        padding-right: 5px;
      }
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  transition: var(--transition);

  &:hover {
    background: var(--primary-color);
    transform: translateY(-3px);
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: #eee;
  font-size: 0.9rem;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterSection>
      <Container>
        <Grid>
          <Column>
            <About>
              <h3>برامج التغذية الصحية</h3>
              <p>
                نقدم خدمات استشارية في مجال التغذية الصحية والرياضية، مع برامج مخصصة تناسب احتياجاتك وأهدافك الشخصية.
              </p>
              <SocialLinks>
                <SocialLink href="#">
                  <FontAwesomeIcon icon={faWhatsapp} />
                </SocialLink>
                <SocialLink href="#">
                  <FontAwesomeIcon icon={faFacebook} />
                </SocialLink>
                <SocialLink href="#">
                  <FontAwesomeIcon icon={faInstagram} />
                </SocialLink>
              </SocialLinks>
            </About>
          </Column>
          <Column>
            <h3>روابط سريعة</h3>
            <Links>
              <li><a href="#home">الرئيسية</a></li>
              <li><a href="#features">برامجنا</a></li>
              <li><a href="#services">خدماتنا</a></li>
              <li><a href="#contact">تواصل معنا</a></li>
            </Links>
          </Column>
          <Column>
            <h3>برامجنا</h3>
            <Links>
              <li><a href="#features">برامج السمنة</a></li>
              <li><a href="#features">تغذية رياضية</a></li>
              <li><a href="#features">الحالات الصحية</a></li>
              <li><a href="#features">برامج النحافة</a></li>
              <li><a href="#features">تغذية صحية</a></li>
            </Links>
          </Column>
          <Column>
            <h3>تواصل معنا</h3>
            <Links>
              <li>القاهرة، مصر</li>
              <li>هاتف: 201127909244+</li>
              <li>info@nutrition.com</li>
            </Links>
          </Column>
        </Grid>
        <Copyright>
          جميع الحقوق محفوظة © {currentYear} برامج التغذية الصحية
        </Copyright>
      </Container>
    </FooterSection>
  );
};

export default Footer;
