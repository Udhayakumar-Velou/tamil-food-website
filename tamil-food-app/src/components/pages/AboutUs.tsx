import { Typography } from 'antd';

import '../../assets/styles/AboutUs.scss';

const { Title, Paragraph, Text } = Typography;

const AboutUs = () => {
  
  return (
    <div className="about-us-section">
      <div className="container">
  
        <div className="about-header">
           <Text className="sub-title">
              OUR STORY
           </Text>
           <Title level={2}>
             About Tamil Food
           </Title>
           <div className="separator"></div>
           
           <Title level={4} className="specialty-title">
             Spécialités Srilankaises et Indiennes
           </Title>
           
           <Paragraph className="description">
             Bienvenue chez <strong>Tamil Food</strong>. Located at <strong>4 rue de la gare, Altkirch 68130</strong>, 
             we are dedicated to bringing you the authentic flavors of Sri Lanka and India. 
             From our spicy Curries to our sweet Desserts like Kesari and Gulab Jamun, 
             every dish is prepared with passion by our expert team.
           </Paragraph>
        </div>

      </div>
    </div>
  );
};

export default AboutUs; 