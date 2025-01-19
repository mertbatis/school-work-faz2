import { Layout, Menu } from 'antd';
import { HomeOutlined, UserOutlined, CalendarOutlined, BookOutlined, LikeOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { FaSchool } from "react-icons/fa";

const { Sider } = Layout;

const Sidebar = () => {
  return (
      <Sider
        theme="light"
        collapsible
        style={{
          position: 'fixed',
          height: '100vh',
          boxShadow: 'rgb(221, 221, 221) 2px 2px 4px 1px',
          zIndex:99,
          minWidth:'500px!important'          
        }}
      >
        <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<HomeOutlined />}>
            <Link to="/">Anasayfa</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            <Link to="/login">Profilim</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<FaSchool/>}>
            <Link to="/MyUni">Üniversitem</Link>
          </Menu.Item>
          <Menu.Item key="5" icon={<CalendarOutlined />}>
            <Link to="/events">Yaklaşan Etkinlikler</Link>
          </Menu.Item>
          <Menu.Item key="6" icon={<BookOutlined />}>
            <Link to="/saved">Kaydedilenler</Link>
          </Menu.Item>
          <Menu.Item key="7" icon={<LikeOutlined />}>
            <Link to="/liked">Beğenilenler</Link>
          </Menu.Item>
        </Menu>
      </Sider>
  );
};

export default Sidebar;
