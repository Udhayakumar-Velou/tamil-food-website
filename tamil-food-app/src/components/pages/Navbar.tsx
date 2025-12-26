import { Layout, Button, Menu } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { useNavigate, useLocation } from 'react-router-dom';

import '../../assets/styles/Navbar.scss';

const { Header } = Layout;

const BrandLogo = () => (
  <div className="brand-logo-wrapper">
    
    <svg width="50" height="50" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path d="M12 22H48L44 52H16L12 22Z" stroke="#0F172B" strokeWidth="3" strokeLinejoin="round"/>
       <path d="M8 22H52" stroke="#0F172B" strokeWidth="3" strokeLinecap="round"/>
       <path d="M22 12C22 12 26 2 30 2" stroke="#FF2E63" strokeWidth="3" strokeLinecap="round"/>
       <path d="M32 14C32 14 36 4 40 4" stroke="#FFD700" strokeWidth="3" strokeLinecap="round"/>
       <circle cx="30" cy="37" r="3" fill="#FF2E63"/>
    </svg>
    
    <div className="brand-text-col">
      <span className="text-tamil">
        Tamil
      </span>
      <span className="text-food">
        Food
      </span>
    </div>
  </div>
);

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const items = [
    { key: 'home', label: 'Home', onClick: () => scrollToSection('home') },
    { key: 'menu', label: 'Menu', onClick: () => scrollToSection('menu') },
    { key: 'reservation', label: 'Reservation', onClick: () => scrollToSection('reservation') },
    { key: 'about', label: 'About Us', onClick: () => scrollToSection('about') },
    { key: 'contact', label: 'Contact', onClick: () => scrollToSection('contact') }
  ];

  return (
    <Header className="navbar-header">
      
      <div className="brand-logo-container" onClick={() => scrollToSection('home')}>
        <BrandLogo />
      </div> 

      <Menu
        theme="light"
        mode="horizontal"
        items={items}
        className="nav-menu"
      />
    </Header>
  );
};

export default Navbar;