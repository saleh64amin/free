import { useEffect } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, Grid } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ProgramCard from './ProgramCard';

const SliderSection = styled.section`
  padding: 80px 0;
  background: var(--light-bg);
  overflow: hidden;
  position: relative;
`;

const Container = styled.div`
  width: 100%;
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 0 var(--container-padding);
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const Title = styled.h2`
  font-size: clamp(2rem, 5vw, 2.5rem);
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Description = styled.p`
  font-size: clamp(1rem, 3vw, 1.1rem);
  color: #666;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const SliderWrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px 0;
  position: relative;

  .swiper {
    width: 100%;
    padding: 20px 10px;
    margin: 0 auto;
  }

  .swiper-wrapper {
    padding: 20px 0;
  }

  .swiper-slide {
    height: auto;
    transition: transform 0.5s ease;

    @media (min-width: 1200px) {
      width: 300px !important;
    }

    @media (max-width: 1199px) {
      width: calc(50% - 20px) !important;
    }

    @media (max-width: 768px) {
      width: calc(100% - 20px) !important;
    }
  }

  .swiper-button-next,
  .swiper-button-prev {
    width: 40px;
    height: 40px;
    background: white;
    border-radius: 50%;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    color: var(--primary-color);
    transition: all 0.3s ease;

    &::after {
      font-size: 16px;
      font-weight: bold;
    }

    &:hover {
      background: var(--primary-color);
      color: white;
      transform: scale(1.1);
    }

    @media (max-width: 768px) {
      display: none;
    }
  }

  .swiper-button-prev {
    left: 10px;
  }

  .swiper-button-next {
    right: 10px;
  }

  .swiper-pagination {
    bottom: -10px;
    
    @media (max-width: 768px) {
      bottom: -5px;
    }
  }

  .swiper-pagination-bullet {
    width: 8px;
    height: 8px;
    background: var(--primary-color);
    opacity: 0.3;
    transition: all 0.3s ease;

    &-active {
      opacity: 1;
      transform: scale(1.2);
    }
  }
`;

const programs = [
  {
    id: 1,
    title: "برامج السمنة",
    description: "برنامج متخصص لإنقاص الوزن بطريقة صحية وآمنة",
    icon: "weight",
    price: "500",
    features: ["خطة غذائية متكاملة", "متابعة أسبوعية", "نصائح تغذية", "دعم مستمر"]
  },
  {
    id: 2,
    title: "تغذية رياضية",
    description: "برنامج تغذية خاص للرياضيين لتحسين الأداء",
    icon: "dumbbell",
    price: "600",
    features: ["خطة تغذية للتدريب", "مكملات غذائية", "جدول وجبات", "استشارات رياضية"]
  },
  {
    id: 3,
    title: "الحالات الصحية",
    description: "برامج تغذية للحالات الصحية المختلفة",
    icon: "heartbeat",
    price: "700",
    features: ["خطط تغذية علاجية", "متابعة طبية", "تقارير دورية", "توصيات صحية"]
  },
  {
    id: 4,
    title: "برامج النحافة",
    description: "برنامج زيادة الوزن بشكل صحي ومتوازن",
    icon: "child",
    price: "450",
    features: ["خطة زيادة وزن", "وجبات متوازنة", "متابعة مستمرة", "نصائح تغذوية"]
  },
  {
    id: 5,
    title: "تغذية صحية",
    description: "برنامج تغذية صحي متكامل لنمط حياة أفضل",
    icon: "apple-alt",
    price: "400",
    features: ["نظام غذائي صحي", "وصفات صحية", "إرشادات غذائية", "دعم مستمر"]
  }
];

const ProgramsSlider = () => {
  return (
    <SliderSection id="features">
      <Container>
        <Header>
          <Title>برامجنا المتخصصة</Title>
          <Description>
            نقدم مجموعة متنوعة من البرامج الغذائية المصممة خصيصاً لتلبية احتياجاتك وأهدافك
          </Description>
        </Header>
        <SliderWrapper>
          <Swiper
            modules={[Autoplay, Pagination, Navigation, Grid]}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
                grid: {
                  rows: 1,
                  fill: 'row'
                }
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
                grid: {
                  rows: 1,
                  fill: 'row'
                }
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 30,
                grid: {
                  rows: 1,
                  fill: 'row'
                }
              }
            }}
            grabCursor={true}
            speed={1500}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            loop={true}
            watchSlidesProgress={true}
            preventClicks={false}
            preventClicksPropagation={false}
          >
            {programs.map((program) => (
              <SwiperSlide key={program.id}>
                <ProgramCard {...program} />
              </SwiperSlide>
            ))}
          </Swiper>
        </SliderWrapper>
      </Container>
    </SliderSection>
  );
};

export default ProgramsSlider;
