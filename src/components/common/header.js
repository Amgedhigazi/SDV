import React, { useState, useEffect } from 'react';
import logo from '../../assets/images/LOgo.png';
import { Anchor, Drawer, Button } from 'antd';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';

const { Link } = Anchor;

function switchLanguage(lang) {
  const trigger = () => {
    const select = document.querySelector('.goog-te-combo');
    if (select) {
      select.value = lang;
      select.dispatchEvent(new Event('change'));
    }
  };
  trigger();
  setTimeout(trigger, 800);
  setTimeout(trigger, 2000);

  if (lang === 'ar') {
    document.body.classList.add('lang-ar');
  } else {
    document.body.classList.remove('lang-ar');
  }
}

function AppHeader() {
  const [visible, setVisible]   = useState(false);
  const [lang, setLang]         = useState('en');
  const { user, logout, openLogin } = useAuth();
  const { isDark, toggleDark }  = useTheme();

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

  const toggleLang = () => {
    const next = lang === 'en' ? 'ar' : 'en';
    setLang(next);
    switchLanguage(next);
  };

  const NavControls = ({ vertical }) => (
    <div className={`header-controls${vertical ? ' header-controls--vertical' : ''}`}>
      <button className="btn-nav-control btn-lang" onClick={toggleLang} title="Switch language">
        <i className="fas fa-globe"></i>
        <span>{lang === 'en' ? 'AR' : 'EN'}</span>
      </button>

      <button className="btn-nav-control btn-dark" onClick={toggleDark} title="Toggle dark mode">
        <i className={isDark ? 'fas fa-sun' : 'fas fa-moon'}></i>
      </button>

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
  );

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
            <NavControls />
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
                <NavControls vertical />
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
