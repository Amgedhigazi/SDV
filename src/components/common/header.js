import React from 'react';

import logo from '../../assets/images/LOgo.png';
import { useState } from 'react';
import { Anchor, Drawer, Button } from 'antd';

const { Link } = Anchor;
function AppHeader() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  
  return (
    <>
    <div className="container-fluid">
      <div className="header">
      <div className="logo">
        <img alt="logo" src={logo} />
      </div>
      <div className="mobileHidden">
        <Anchor targetOffset="95">
        <Link href="#hero" title="--^--" />
          <Link href="#land" title="HOME" />
          <Link href="#about" title="ABOUT" />
          <Link href="#feature" title="EVENTS GALLERY" />
          <Link href="#works" title="TAKE A PLINK" />
          <Link href="#faq" title="CALENDER" />
          <Link href="#OurBoard" title="MEMBERSHIP" />
          <Link href="#contact" title="CONTACT" />
        </Anchor>
        </div>
        <div className="mobileVisible">
          <Button type="primary" onClick={showDrawer}>
            <i className="fas fa-bars"></i>
          </Button>
          <Drawer
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
          >
  <Anchor targetOffset="95">
              <Link href="#land" title="Home" />
              <Link href="#about" title="About" />
              <Link href="#feature" title="Events Gallery" />
              <Link href="#works" title="TAKE A PLINK" />
              <Link href="#faq" title="Calendar" />
              <Link href="#OurBoard" title="Mem bership" />
              <Link href="#contact" title="Contact" />
            </Anchor>
          </Drawer>
        </div>
      </div>

    </div>
    <iframe width="100%" height="60" src="https://rss.app/embed/v1/ticker/X2hAhq3EIhQuEi5u" frameborder="0"></iframe>


</>
  );
}

export default AppHeader;