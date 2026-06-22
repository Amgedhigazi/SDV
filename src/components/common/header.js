import React, { useState, useEffect } from 'react';
import logo from '../../assets/images/LOgo.png';
import { Anchor, Drawer, Button } from 'antd';

const { Link } = Anchor;

function AppHeader() {
  const [visible, setVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const headerEl = document.querySelector('.ant-layout-header');
    const handleScroll = () => {
      const isScrolled = window.scrollY > 60;
      setScrolled(isScrolled);
      if (isScrolled) {
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

          <div className="mobileHidden">
            <Anchor targetOffset={80} affix={false}>
              <Link href="#hero"     title="Home" />
              <Link href="#about"    title="About" />
              <Link href="#feature"  title="Gallery" />
              <Link href="#OurBoard" title="Membership" />
              <Link href="#faq"      title="Calendar" />
              <Link href="#contact"  title="Contact" />
            </Anchor>
          </div>

          <div className="mobileVisible">
            <Button type="primary" onClick={() => setVisible(true)}>
              <i className="fas fa-bars"></i>
            </Button>
            <Drawer
              placement="right"
              closable={true}
              onClose={() => setVisible(false)}
              visible={visible}
            >
              <Anchor targetOffset={80} affix={false} onClick={() => setVisible(false)}>
                <Link href="#hero"     title="Home" />
                <Link href="#about"    title="About" />
                <Link href="#feature"  title="Gallery" />
                <Link href="#OurBoard" title="Membership" />
                <Link href="#faq"      title="Calendar" />
                <Link href="#contact"  title="Contact" />
              </Anchor>
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
      ></iframe>
    </>
  );
}

export default AppHeader;
