import { Button, Typography, Carousel, Row, Col } from 'antd';
import { StarFilled } from '@ant-design/icons';
import '../../assets/styles/Hero.scss';
import heroBg from "../../assets/images/heroImg.png";

const { Title, Paragraph } = Typography;

const Hero = () => {

  const scrollToMenu = () => {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const slides = [
    {
      id: 1,
      title: "The Perfect Space to",
      highlight: "Enjoy Fantastic Food",
      desc: "Festive dining at Farthings where we are strong believers in using the very best produce.",
      image: heroBg,
      dishName: "Briyani",
      price: "€ 20",
      specialTag: "Weekly Special"
    },
    {
      id: 2,
      title: "Experience the Grand",
      highlight: "Menu Soir",
      desc: "A rich dinner experience featuring Vadai, Putthu, Kothu Roti, and delicious desserts.",
      image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop",
      dishName: "Menu Soir",
      price: "18.50€",
      specialTag: "Dinner Special"
    },
    {
      id: 3,
      title: "Taste Our Authentic",
      highlight: "Sri Lankan Drinks",
      desc: "From refreshing Mango Lassi to traditional Masala Tea. The perfect pairing for your meal.",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop",
      dishName: "Mango Lassi",
      price: "4.50€",
      specialTag: "Refreshing"
    }
  ];

  return (
    <div className="hero-section">
      <Carousel autoplay autoplaySpeed={4000} effect="fade" dots={{ className: "hero-dots" }}>
        {slides.map((slide) => (
          <div key={slide.id}>
            <div className="hero-slide" style={{ backgroundImage: `url(${slide.image})` }}>

              <div className="hero-overlay">
                <div className="container">
                  <Row align="middle" className="hero-content-row">

                    <Col xs={24} lg={14} className="hero-text-col">
                      <Title className="hero-title">
                        {slide.title} <br />
                        <span className="highlight-text">{slide.highlight}</span>
                      </Title>

                      <Paragraph className="hero-desc">
                        {slide.desc}
                      </Paragraph>

                      <div className="hero-btn-wrapper">
                        <Button
                          type="primary"
                          size="large"
                          onClick={scrollToMenu}
                          className="hero-btn"
                        >
                          See Our Menus
                        </Button>
                      </div>
                    </Col>

                    <Col xs={24} lg={10} className="hero-card-col">
                      <div className="special-card">
                        <div className="card-tag">{slide.specialTag}</div>

                        <div className="card-body">
                          <div className="card-info">
                            <div className="card-price">{slide.price}</div>
                            <div className="card-dish-name">{slide.dishName}</div>
                            <div className="card-stars">
                              <StarFilled /><StarFilled /><StarFilled /><StarFilled /><StarFilled />
                            </div>
                          </div>

                          <div className="card-mini-img">
                            <img src={slide.image} alt={slide.dishName} />
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Hero;