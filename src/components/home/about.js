import React, { useState } from 'react';
import { Row, Col, Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

import Supporters from './supporters';


const menuItems = [
  {
    label: 'AboutSubmenu',
    key: 'SubMenu',
    icon: <SettingOutlined />,
    children: [
      {
        type: 'group',
        label: 'Who We Are!',
        children: [
          {
            label: 'What We Do!',
            key: 'setting:1',
          },
          {
            label: 'Option 2',
            key: 'setting:2',
          },
        ],
      },
      {
        type: 'group',
        label: 'What We Do!',
        children: [
          {
            label: 'Option 3',
            key: 'setting:3',
          },
          {
            label: 'Option 4',
            key: 'setting:4',
          },
        ],
      },
    ],
  },
];

const items = [
  {
    key: '1',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
  </svg>,
    title: 'Supporting Individuals',
    content: 'Students: We provide resources and support to students, helping them achieve their educational goals and succeed academically.Singles: We offer assistance and guidance to single individuals, ensuring they have access to necessary resources and support networks.Ordinary People: Our efforts extend to all individuals, providing encouragement and support to improve their overall well-being and quality of life.',
  },
  {
    key: '2',
    icon:<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-person-fill-add" viewBox="0 0 16 16">
    <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
    <path d="M2 13c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4"/>
  </svg> ,
    title: 'Prioritizing Families',
    content: 'Family Support: Recognizing the fundamental role families play in the community, we prioritize offering support to families. This includes providing resources, counseling, and assistance to help families thrive.Community Building: By supporting families, we contribute to the development of a strong and healthy community. Families are the cornerstone of society, and their well-being directly impacts the broader community.Holistic Approach: Our support for families encompasses various aspects, such as education, health, and social well-being, ensuring a comprehensive approach to family support.',
  },
  {
    key: '3',
    icon:<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
    <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
  </svg> ,
    title: 'Creating a Healthy Community',
    content: 'Reforming Community: Our focus on supporting families and individuals helps in reforming and building a healthy, cohesive community.Inclusive Support: We believe in inclusive support that addresses the needs of all members of the community, fostering unity and strength.',
  },
];

function AppAbout() {
  const [current, setCurrent] = useState('mail');

  const handleClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <div id="about" className="block aboutBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>About Us</h2>

        </div>
        <div className="contentHolder">
          <p >
           <h3> About SDV NRW e.V.</h3>
           <b> About SDV NRW e.V.</b> is a non-profit organization. The Sudanese Association was founded in 1982 and currently has almost 300 members that supports people affected by poverty and social exclusion. We are committed to a fairer society by offering advice and legal assistance and by standing up for people's rights.<br />
            <br />
           
            Through our tireless efforts, we have been able to help countless people in need. Our mission is to ensure that all members of society have the same opportunities, regardless of their financial or social status. <br /> Our goal is to improve the world step by step.
            At SDV, our principle of taking care of individuals and prioritizing family support is fundamental to our mission. By encouraging and supporting students, singles, and ordinary people, and by focusing on the crucial role of families, we strive to create a healthy, strong, and unified community.

          </p>
        </div>
        <Row gutter={[16, 16]}>   
          {items.map(item => (
            <Col md={{ span: 8 }} key={item.key}>
              <div className="content">
               <div className="icon">
                  {item.icon}
                </div>
                <h3>{item.title}</h3>
                <p>{item.content}</p>
              </div>
            </Col>
          ))}
        </Row>
      </div>



<div className='container' style={{backgroundColor:'wight',boxShadow:'0px 3px 7px 0px #828282', padding:'50px',paddingTop:'30px', marginTop:'50px', borderTop: '70px solid #a4d2dd',
borderRight: '10px solid #a4d2dd',
borderBottom:' 10px solid #a4d2dd',
borderLeft: '10px solid #a4d2dd',
borderRadius: '15px'}}>
  <Supporters />
</div>






    </div>
  );
}

export default AppAbout;
