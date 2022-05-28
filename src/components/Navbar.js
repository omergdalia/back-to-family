import {Menu} from 'antd';
import { Link } from 'react-router-dom';

const items = [
    { label: 'ראשי', key: 'home' },
    { label: 'אודותיי', key: 'about' },
    { label: 'פלייבק', key: 'playback' },
    { label: 'טיפול', key: 'therapy' },
  ];  
  
const Navbar = () => {
  return <>
    <div className="logo" />
    <Menu theme="dark" mode="horizontal"  defaultSelectedKeys={['home']}>
      {items.map(({key, label}) => <Menu.Item key={key}>
          <Link to={`/${key}`}>{label}</Link>
        </Menu.Item>)}
    </Menu>
  </>
};

export default Navbar
