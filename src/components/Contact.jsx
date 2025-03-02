import { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const ContactSection = styled.section`
  padding: 80px 0;
  background: var(--light-bg);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    color: #666;
    margin-bottom: 2rem;
    font-size: 1.1rem;
    line-height: 1.6;
  }
`;

const InfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: var(--text-color);

  .icon {
    width: 40px;
    height: 40px;
    background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.2rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: white;
  background: ${props => props.bg};
  transition: var(--transition);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  }
`;

const Form = styled.form`
  background: white;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;

  label {
    display: block;
    margin-bottom: 0.5rem;
    color: var(--text-color);
    font-weight: 500;
  }

  input, textarea, select {
    width: 100%;
    padding: 0.8rem;
    border: 2px solid #eee;
    border-radius: 8px;
    font-size: 1rem;
    transition: var(--transition);

    &:focus {
      outline: none;
      border-color: var(--primary-color);
    }
  }

  textarea {
    height: 120px;
    resize: vertical;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 1rem;
  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  transition: var(--transition);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(46, 204, 113, 0.3);
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic here
    const whatsappMessage = `الاسم: ${formData.name}%0aالهاتف: ${formData.phone}%0aالخدمة: ${formData.service}%0aالرسالة: ${formData.message}`;
    window.open(`https://wa.me/+201127909244?text=${whatsappMessage}`, '_blank');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <ContactSection id="contact">
      <Container>
        <Grid>
          <ContactInfo>
            <h2>تواصل معنا</h2>
            <p>نحن هنا لمساعدتك في تحقيق أهدافك الصحية. تواصل معنا الآن للحصول على استشارة مجانية.</p>
            <InfoList>
              <InfoItem>
                <span className="icon">
                  <FontAwesomeIcon icon={faPhone} />
                </span>
                <span>+20 112 790 9244</span>
              </InfoItem>
              <InfoItem>
                <span className="icon">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <span>info@nutrition.com</span>
              </InfoItem>
              <InfoItem>
                <span className="icon">
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </span>
                <span>القاهرة، مصر</span>
              </InfoItem>
            </InfoList>
            <SocialLinks>
              <SocialLink href="#" bg="#25D366">
                <FontAwesomeIcon icon={faWhatsapp} />
              </SocialLink>
              <SocialLink href="#" bg="#1877F2">
                <FontAwesomeIcon icon={faFacebook} />
              </SocialLink>
              <SocialLink href="#" bg="#E4405F">
                <FontAwesomeIcon icon={faInstagram} />
              </SocialLink>
            </SocialLinks>
          </ContactInfo>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <label>الاسم</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <label>رقم الهاتف</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <label>الخدمة المطلوبة</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">اختر الخدمة</option>
                <option value="برامج السمنة">برامج السمنة</option>
                <option value="تغذية رياضية">تغذية رياضية</option>
                <option value="الحالات الصحية">الحالات الصحية</option>
                <option value="برامج النحافة">برامج النحافة</option>
                <option value="تغذية صحية">تغذية صحية</option>
              </select>
            </FormGroup>
            <FormGroup>
              <label>الرسالة</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </FormGroup>
            <SubmitButton type="submit">إرسال الرسالة</SubmitButton>
          </Form>
        </Grid>
      </Container>
    </ContactSection>
  );
};

export default Contact;
