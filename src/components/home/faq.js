import React from 'react';

import { Collapse, Button } from 'antd';

const { Panel } = Collapse;

function AppFaq() {
  
  return(
  
    <div id="faq" className="block faqBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Our Events and Festival's Programs Calendar 2024-2025</h2>
        </div>
        <Collapse defaultActiveKey={['1']}>
          <Panel header="National and Social Festivals" key="1">
            <p><b style={{color:"red", hight: "10px", fontSize: "17px"}}>01 JAN <span style={{color:"red", fontSize: "27px"}}>|</span> </b> <b> Sudan Indpendent Day</b> January 1, 1956: Sudan gained independence from Anglo-Egyptian rule, marking the end of colonial rule and the establishment of Sudan as a sovereign state..</p>
            <p><b style={{color:"red", hight: "10px", fontSize: "17px"}}>11 MAR <span style={{color:"red", fontSize: "27px"}}>|</span> </b> <b> Ramadan</b> up and running in no time with our user-friendly setup theme. Experience seamless customization options and enjoy a stress-free launch with our step-by-step guide Upgrade your online presence with a professional look is tailored to your brand.</p>
            <p><b style={{color:"red", hight: "10px", fontSize: "17px"}}>06 APR <span style={{color:"red", fontSize: "27px"}}>|</span> </b> <b> The Sit-in Of the Military Headquarters</b> The sit-in on April 6 was organized by the Sudanese Professionals Association (SPA) and other opposition groups. It drew massive crowds, demonstrating the widespread demand for al-Bashir's resignation and an end to his authoritarian regime. The persistence and scale of the sit-in played a crucial role in pressuring the military to act, leading to al-Bashir's ousting on April 11, 2019.

</p>
            <p><b style={{color:"red", hight: "10px", fontSize: "17px"}}>10 APR <span style={{color:"red", fontSize: "27px"}}>|</span> </b> <b> Eid Al-Fitr</b> up and running in no time with our user-friendly setup theme. Experience seamless customization options and enjoy a stress-free launch with our step-by-step guide Upgrade your online presence with a professional look is tailored to your brand.</p>
            <p><b style={{color:"red", hight: "10px", fontSize: "17px"}}>11 APR <span style={{color:"red", fontSize: "27px"}}>|</span> </b> <b> Fall Of a Dictator</b>April 11, 2019 is The most important date of the Sudanese Revolution On this day, President Omar al-Bashir was ousted from power by the military following months of widespread protests against his 30-year rule This event marked a significant turning point in Sudan modern history leading to the establishment of a transitional government and paving the way for potential democratic reforms and civilian governance.
            .</p>
            <p><b style={{color:"red", hight: "10px", fontSize: "17px"}}>16 JUN <span style={{color:"red", fontSize: "27px"}}>|</span> </b> <b> Eid Al-Adha</b> up and running in no time with our user-friendly setup theme. Experience seamless customization options and enjoy a stress-free launch with our step-by-step guide Upgrade your online presence with a professional look is tailored to your brand.</p>
            
          
          </Panel>
          <Panel header="Seminar & Workshops" key="2">
          <p><b style={{color:"red", hight: "10px", fontSize: "23px"}}>15 JUN | </b> <b> Migrant & Refugese Talk</b> While Sudanese migrants and refugees in Germany face significant challenges, ongoing efforts aim to support their integration and improve their living conditions. Addressing these issues requires a coordinated approach involving government policies, community support, and international cooperation..</p>
          </Panel>
          <Panel header="Sport Open Day" key="3">
          <p><b style={{color:"red", hight: "10px", fontSize: "23px"}}>15 JUN | </b> <b> Encouraging Teamwork and Cooperation</b> Sport open days are a powerful tool for community building and integration. They promote social interaction, teamwork, language skills, cultural exchange, trust, and health, while engaging both newcomers and local residents in meaningful and enjoyable activities. Through sports, diverse communities can come together, fostering a more inclusive and cohesive society.</p>
          </Panel>
          <Panel header="Mothers and Childern Workshops" key="4">
          <p><b style={{color:"red", hight: "10px", fontSize: "23px"}}>15 JUN | </b> <b> Family Support</b> A workshops for Mothers and children among Sudanese migrants and refugees in Germany, guids to receive support from government agencies, NGOs, community groups, educational institutions, and specialized programs. These efforts aim to ensure their well-being, facilitate integration, and provide a supportive environment for their development.</p>
          </Panel>
          <Panel header="Monthely Gathering" key="6">
          <p><b style={{color:"red", hight: "10px", fontSize: "23px"}}>15 JUN | </b> <b> Strengthening Relationships </b> Monthly gatherings play a crucial role in strengthening relationships, enhancing communication, providing support, promoting integration, encouraging participation, offering structure, and facilitating personal growth. They create a stable and supportive environment where group members can connect, share, and grow together, contributing to a cohesive and integrated community.</p>
          </Panel>
        </Collapse>
        <div className="quickSupport">
          <h3> <b> Immediate Assistance & Urgent support? </b></h3>
          <p>We Are in<b> SDV </b> Provide an urgent support to our members whenever needed it's essential for managing crises, building trust, ensuring mental and emotional well-being, encouraging engagement, empowering individuals, and promoting long-term stability. This responsiveness creates a strong, supportive community where we feel safe, valued, and connected.</p>
          <a href="mailto:sign2art@gmail.com">
          <Button type="primary" size="large"><i className="fas fa-envelope"></i> Email Us</Button>
          </a>

        </div>
      </div>
    </div>

    
    
   
  );
}

export default AppFaq;