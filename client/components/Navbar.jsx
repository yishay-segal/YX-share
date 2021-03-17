import { useState } from 'react';
import { useRouter } from 'next/router';
import { Menu } from 'antd';
import {
  LoginOutlined,
  UserAddOutlined,
  HomeOutlined,
} from '@ant-design/icons';

const { SubMenu, Item } = Menu;

const Navbar = () => {
  const [current, setCurrent] = useState('home');
  const router = useRouter();

  const handleClick = e => {
    console.log('click', e);
    setCurrent(e.key);
  };

  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <Item onClick={() => router.push('/')} key="home" icon={<HomeOutlined />}>
        Home
      </Item>

      <Item
        onClick={() => router.push('/auth/signup')}
        style={{ float: 'right' }}
        key="signup"
        icon={<UserAddOutlined />}
      >
        Signup
      </Item>
      <Item
        onClick={() => router.push('/auth/login')}
        style={{ float: 'right' }}
        key="login"
        icon={<LoginOutlined />}
      >
        Login
      </Item>
    </Menu>
  );
};

export default Navbar;
