import { Typography, Row, Col } from 'antd';
import '../../assets/styles/RecommendedDishes.scss';
import samosa from "../../assets/images/samosa.png";
import wine from "../../assets/images/wine.png";
import sweat from "../../assets/images/sweat.png";

const { Title, Text } = Typography;

const RecommendedDishes = () => {
  
  const dishes = [
    { id: 1, name: "Samosa", image: samosa },
    { id: 2, name: "Vin Rouge", image: wine },
    { id: 3, name: "Gulab Jamun", image: sweat }
  ];

  return (
    <div className="recommended-dishes-section">
      <div className="container">
        
        <div className="recommended-header">
          <Text strong className="sub-title">HIGHLIGHTS</Text>
          <Title level={2}>Most Recommended Dishes</Title>
        </div>

        <Row gutter={[30, 30]} className="dishes-row">
          {dishes.map((dish) => (
            <Col xs={24} md={8} key={dish.id}>
              <div
                className="dish-card"
                style={{ backgroundImage: `url(${dish.image})` }}
              >
                <div className="dish-label">{dish.name}</div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default RecommendedDishes;