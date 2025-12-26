import { useState } from 'react';
import { Typography, Row, Col } from 'antd';
import { 
  ClockCircleOutlined, 
  FireOutlined, 
  CoffeeOutlined, 
  BgColorsOutlined 
} from '@ant-design/icons';
import '../../assets/styles/MenuSection.scss';

const { Title, Text } = Typography;

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState('Midi');

  const categories = [
    { id: 'Midi', label: 'Menu Midi', icon: <ClockCircleOutlined /> },
    { id: 'Soir', label: 'Menu Soir', icon: <FireOutlined /> },
    { id: 'Chaudes', label: 'Boissons Chaudes', icon: <CoffeeOutlined /> },
    { id: 'Froides', label: 'Boissons Froides', icon: <BgColorsOutlined /> },
  ];

  const menuItems = {
    'Midi': {
      title: 'Menu Midi - 16.50€',
      image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      items: [
        { name: 'Entrée au choix', desc: 'Roll, Badjis Oignons, ou Raita', price: 'Included' },
        { name: 'Plat au choix', desc: 'Riz avec poulet Curry ou Biriyani', price: 'Included' },
        { name: 'Dessert au choix', desc: 'Kesari ou Gulab Jamun', price: 'Included' },
        { name: 'Boissons', desc: 'Coca ou Café', price: 'Included' },
      ]
    },
    'Soir': {
      title: 'Menu Soir - 18.50€',
      image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      items: [
        { name: 'Entrée au choix', desc: 'Vadai, Samossa, ou Badjis Oignons', price: 'Included' },
        { name: 'Plat au choix', desc: 'Putthu avec poulet Curry ou Kothu Roti poulet', price: 'Included' },
        { name: 'Dessert au choix', desc: 'Rasgulla ou Payasam', price: 'Included' },
        { name: 'Boissons', desc: 'Coca ou Café', price: 'Included' },
      ]
    },
    'Chaudes': {
      title: 'Boissons Chaudes',
      image: 'https://resize-elle.ladmedia.fr/rcrop/638,,forcex/img/var/plain_site/storage/images/elle-a-table/les-dossiers-de-la-redaction/dossier-de-la-redac/recettes-boissons-chaudes-d-automne/95506548-1-fre-FR/9-boissons-chaudes-d-automne-pour-se-rechauffer.jpg',
      items: [
        { name: 'Thé nature', desc: '', price: '1.00€' },
        { name: 'Thé au lait', desc: '', price: '1.50€' },
        { name: 'Thé au lait masala', desc: 'Cardamome, cannelle, clou de girofle, gingembre', price: '2.00€' },
        { name: 'Café', desc: '', price: '2.00€' },
      ]
    },
    'Froides': {
      title: 'Boissons Froides',
      image: 'https://plus.unsplash.com/premium_photo-1725075086083-89117890371d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym9pc3NvbiUyMGZyb2lkZXxlbnwwfHwwfHx8MA%3D%3D',
      items: [
        { name: 'Lassi', desc: 'Mangue, Salé, ou Rose milk', price: '4.50€' },
        { name: 'Bière', desc: 'King Fisher, Lion lager, Lion Stout', price: '4.50€' },
        { name: 'Vin (au verre)', desc: 'Rouge, Blanc, Rosé', price: '4.90€' },
        { name: 'Soft Drinks', desc: 'Eau (50cl), Cannette (33cl), Bouteille (50cl)', price: '2.00€ - 3.00€' },
      ]
    }
  };

  const currentData = menuItems[activeCategory as keyof typeof menuItems];

  return (
    <div className="menu-section-container">
      <div className="container">
        
        <div className="menu-categories-wrapper">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <div 
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`category-btn ${isActive ? 'active' : ''}`}
              >
                <div className="cat-icon">
                  {cat.icon}
                </div>
                <div className="cat-label">
                  {cat.label}
                </div>
              </div>
            );
          })}
        </div>

        <div className="menu-content-card">
          <Row gutter={[48, 24]} className="menu-row">
            <Col xs={24} md={10} className="menu-image-col">
              <div className="menu-circle-img">
                <img src={currentData.image} alt={currentData.title} />
              </div>
            </Col>

            <Col xs={24} md={14} className="menu-list-col">
              <Title level={2}>{currentData.title}</Title>
              
              <div className="menu-items-wrapper">
                {currentData.items.map((item, index) => (
                  <div key={index} className="menu-item">
                    <div className="item-header">
                      <Title level={5}>{item.name}</Title>
                      <Text strong className="price-tag">{item.price}</Text>
                    </div>
                    {item.desc && <Text type="secondary" className="item-desc">{item.desc}</Text>}
                    <div className="item-separator"></div>
                  </div>
                ))}
              </div>
            </Col>

          </Row>
        </div>
      </div>
    </div>
  );
};

export default MenuSection;