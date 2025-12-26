import { Row, Col, Typography } from 'antd';
import { EnvironmentOutlined, PhoneOutlined, WhatsAppOutlined } from '@ant-design/icons';
import '../../assets/styles/Footer.scss';

const { Title, Text } = Typography;

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="container">
        <Row gutter={[30, 30]} justify="center" align="stretch">
          
          <Col xs={24} lg={10} xl={9}>
            <div className="footer-card red-card">
               <div className="card-badge">
                  <span>Tamil Food</span>
               </div>

               <div className="card-content">
                 <div className="hours-group">
                   <Title level={3} className="hours-title">Opening Hours</Title>
                   
                   <Text className="hours-text">
                      Tuesday - Saturday<br/> 
                      12:00pm - 23:00pm
                   </Text>
                   
                   <div className="status-badge">
                      Closed on Sunday
                   </div>
                 </div>

                 <div className="rating-box">
                    ⭐ Authentic South Indian & Sri Lankan Cuisine
                 </div>
               </div>
            </div>
          </Col>

          <Col xs={24} lg={14} xl={15}>
            <div className="footer-card white-card">
              <Row gutter={[20, 20]} className="white-card-inner-row">
                
                <Col xs={24} md={10} className="contact-column">
                   <Title level={3} className="section-title">Visit Us</Title>
                   
                   <div className="contact-list">
                     <div className="contact-item">
                       <div className="icon-box"><EnvironmentOutlined /></div>
                       <Text className="text">
                         4 rue de la gare,<br/> 
                         68130 Altkirch, France
                       </Text>
                     </div>

                     <div className="contact-item">
                       <div className="icon-box"><PhoneOutlined /></div>
                       <Text className="text">03 89 07 75 36</Text>
                     </div>

                     <div className="contact-item">
                       <div className="icon-box whatsapp"><WhatsAppOutlined /></div>
                       <Text className="text">06 50 52 25 25</Text>
                     </div>
                   </div>
                </Col>

                <Col xs={24} md={14} className="map-column">
                  <div className="map-wrapper">
                    <iframe 
                      title="Shop Location"
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2657.439873977536!2d7.236681376840748!3d47.62534097980316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47919b7a4238596b%3A0x861c02829202526!2s4%20Rue%20de%20la%20Gare%2C%2068130%20Altkirch!5e0!3m2!1sen!2sfr!4v1700000000000!5m2!1sen!2sfr"
                    ></iframe>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>

        </Row>

        <div className="footer-bottom">
          <div className="separator"></div>
          <div className="bottom-content">
            <Text className="copyright">© 2025 TamilFood | All rights reserved</Text>
            <div className="socials">
              <a href="#">Facebook</a>
              <a href="#">Instagram</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;