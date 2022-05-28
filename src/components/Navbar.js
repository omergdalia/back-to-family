import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const items = [
    { label: 'ראשי', key: 'home' },
    { label: 'אודותיי', key: 'about' },
    { label: 'סדנאות', key: 'workshops'},
    { label: 'פלייבק', key: 'playback' },
    { label: 'טיפול', key: 'therapy' },
  ];  
  
const Navbar = () => {
  return <>
    <Menu theme='dark' mode="horizontal" defaultSelectedKeys={['home']}>
      <Menu.Item>
        <div className="logo">אינטנסיב בכרתים</div>
      </Menu.Item>
      {items.map(({key, label}) => <Menu.Item key={key}>
          <Link to={`/${key}`}>{label}</Link>
        </Menu.Item>)}
    </Menu>
  </>
};

export default Navbar
