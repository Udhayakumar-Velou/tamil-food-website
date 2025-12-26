import { Typography, Row, Col, Avatar } from 'antd';
import { InstagramOutlined, UserOutlined } from '@ant-design/icons';

const { Title } = Typography;

const RecentNews = () => {
  
  const newsItems = [
    {
      id: 1,
      title: "Creamy Chicken Alfredo",
      date: "April 5, 2023",
      author: "Admin Thomas",
      image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      title: "Air Fryer Salmon",
      date: "April 5, 2023",
      author: "Admin Thomas",
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    }
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300",
    "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=300",
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300",
    "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=300",
    "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=300",
    "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=300",
  ];

  return (
    <div className="py-5" style={{ backgroundColor: '#fff' }}>
      <div className="container">
        
        <div className="text-center mb-5">
           <Title level={2} style={{ fontWeight: 'bold' }}>Recent News</Title>
        </div>

        <Row gutter={[30, 30]} justify="center" className="mb-5">
          {newsItems.map((item) => (
            <Col xs={24} md={12} lg={10} key={item.id}>
              <div className="d-flex align-items-center gap-3 p-3" style={{ transition: '0.3s' }}>
                
                <div style={{ width: '130px', height: '130px', borderRadius: '20px', overflow: 'hidden', flexShrink: 0 }}>
                  <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>

                <div>
                   <div style={{ marginBottom: '8px' }}>
                      <span style={{ backgroundColor: '#FFD700', padding: '4px 10px', borderRadius: '5px', fontSize: '11px', fontWeight: 'bold' }}>
                         {item.date}
                      </span>
                   </div>
                   <Title level={4} style={{ margin: '5px 0', fontSize: '1.2rem', fontWeight: 'bold' }}>{item.title}</Title>
                   <div className="d-flex align-items-center text-muted" style={{ fontSize: '0.9rem', color: '#888' }}>
                      <Avatar size="small" icon={<UserOutlined />} style={{ marginRight: '8px', backgroundColor: '#eee', color: '#666' }} />
                      {item.author}
                   </div>
                </div>

              </div>
            </Col>
          ))}
        </Row>

        <div style={{ position: 'relative', marginTop: '60px', marginBottom: '40px' }}>
           
           <Row gutter={[16, 16]}>
              {galleryImages.map((img, index) => (
                 <Col xs={12} sm={8} md={4} key={index}>
                    <div style={{ height: '160px', borderRadius: '20px', overflow: 'hidden' }}>
                       <img src={img} alt="Insta" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.9)' }} />
                    </div>
                 </Col>
              ))}
           </Row>

           <div style={{ 
              position: 'absolute', 
              top: '50%', 
              left: '50%', 
              transform: 'translate(-50%, -50%)',
              backgroundColor: '#fff',
              padding: '15px 30px',
              borderRadius: '50px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              zIndex: 10,
              cursor: 'pointer'
           }}>
              <InstagramOutlined style={{ fontSize: '28px', color: '#E1306C' }} />
              <div>
                 <div style={{ fontWeight: 'bold', fontSize: '16px', color: '#000' }}>Follow @tamilfood</div>
                 <div style={{ fontSize: '11px', color: '#999' }}>Join our community</div>
              </div>
           </div>

        </div>

      </div>
    </div>
  );
};

export default RecentNews;