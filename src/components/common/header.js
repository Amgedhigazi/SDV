import React, { useState, useEffect } from 'react';
import logo from '../../assets/images/LOgo.png';
import { Anchor, Drawer, Button } from 'antd';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';
import { useAuth } from '../../context/AuthContext';

const { Link } = Anchor;

function AppHeader() {
  const [visible, setVisible]   = useState(false);
  const { user, logout, openLogin } = useAuth();

  useEffect(() => {
    const headerEl = document.querySelector('.ant-layout-header');
    const handleScroll = () => {
      if (window.scrollY > 60) {
        headerEl?.classList.add('scrolled-header');
      } else {
        headerEl?.classList.remove('scrolled-header');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="header">
          <div className="logo">
            <img alt="SDV NRW Logo" src={logo} />
          </div>

          <div className="mobileHidden" style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <Anchor targetOffset={90} affix={false}>
              <Link href="#hero"     title="Home" />
              <Link href="#about"    title="About" />
              <Link href="#feature"  title="Gallery" />
              <Link href="#OurBoard" title="Membership" />
              <Link href="#faq"      title="Calendar" />
              <Link href="#contact"  title="Contact" />
            </Anchor>

            {user ? (
              <div className="header-user-menu">
                <span className="header-username">
                  <UserOutlined style={{ marginRight: 6 }} />
                  {user.name?.split(' ')[0]}
                </span>
                <button className="btn-logout" onClick={logout}>
                  <LogoutOutlined /> Sign Out
                </button>
              </div>
            ) : (
              <button className="btn-header-login" onClick={openLogin}>
                <UserOutlined /> Sign In
              </button>
            )}
          </div>

          <div className="mobileVisible">
            <Button type="primary" onClick={() => setVisible(true)}>
              <i className="fas fa-bars"></i>
            </Button>
            <Drawer placement="right" closable onClose={() => setVisible(false)} visible={visible}>
              <Anchor targetOffset={90} affix={false} onClick={() => setVisible(false)}>
                <Link href="#hero"     title="Home" />
                <Link href="#about"    title="About" />
                <Link href="#feature"  title="Gallery" />
                <Link href="#OurBoard" title="Membership" />
                <Link href="#faq"      title="Calendar" />
                <Link href="#contact"  title="Contact" />
              </Anchor>
              <div style={{ marginTop: 24 }}>
                {user ? (
                  <Button block onClick={() => { logout(); setVisible(false); }}>Sign Out</Button>
                ) : (
                  <Button block type="primary" onClick={() => { openLogin(); setVisible(false); }}>Sign In</Button>
                )}
              </div>
            </Drawer>
          </div>
        </div>
      </div>

      <iframe
        title="SDV NRW News Ticker"
        width="100%"
        height="50"
        src="https://rss.app/embed/v1/ticker/X2hAhq3EIhQuEi5u"
        frameBorder="0"
        style={{ display: 'block' }}
      />
    </>
  );
}

export default AppHeader;
