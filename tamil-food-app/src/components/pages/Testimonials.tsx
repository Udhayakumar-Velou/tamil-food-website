import { Typography, Row, Col, Carousel } from 'antd';

import '../../assets/styles/Testimonials.scss';

const { Title, Paragraph } = Typography;

const Testimonials = () => {

  const reviews = [
    {
      id: 1,
      text: "Franchement : un délice ! Des plats succulents 😋 qui ont certes dû se faire attendre mais cuisinés à la demande. Un rapport qualité prix clairement à la hauteur.",
      author: "Julie Zenner"
    },
    {
      id: 2,
      text: "Un petit restaurant sympathique qui mérite de réussir et de durer. Le moins qu’on puisse dire c’est que les plats sont préparés minute, savoureux...",
      author: "Isabelle Tschaen"
    },
    {
      id: 3,
      text: "Une très belle découverte pour notre famille. Explications complètes pour tous les plats de la carte. Merci beaucoup à la très gentille serveuse.",
      author: "Aurore T."
    },
    {
      id: 4,
      text: "Nous avons pris des plats à emporter pour 4 personnes. On s'est vraiment régalé. Les portions sont suffisantes. Nous y retournerons.",
      author: "Xav Ret"
    }
  ];

  return (
    <div className="testimonials-section">
      <div className="container px-5 my-5">
        
        <Row gutter={[40, 40]} align="middle">
          
          <Col xs={24} lg={10}>
            <div className="testimonials-header">
              <Typography.Text strong className="sub-title">
                TESTIMONIALS & REVIEWS
              </Typography.Text>
              <Title level={1}>
                Our Customer <br /> Feedbacks
              </Title>
            </div>

            <div className="testimonial-card-wrapper position-relative">
              
              <Carousel className='' autoplay autoplaySpeed={2000} dots={true} effect="scrollx">
                {reviews.map((review) => (
                  <div key={review.id}>
                    <Paragraph className="review-text">
                      "{review.text}"
                    </Paragraph>
                    <Title level={4} className="review-author">
                      {review.author}
                    </Title>
                  </div>
                ))}
              </Carousel>

              <div className="decor-circle"></div>
            </div>
          </Col>

          <Col xs={24} lg={14}>
             <div className="testimonials-collage">
                <div className="collage-img img-coffee">
                  <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" alt="Coffee" />
                </div>
                <div className="collage-img img-food">
                  <img src="https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" alt="Food" />
                </div>
                <div className="collage-img img-dessert">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5okG0tz2dWr36k2p9gxbFmqoM4AeW1e3pPQ&s" alt="Dessert" />
                </div>
             </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Testimonials;