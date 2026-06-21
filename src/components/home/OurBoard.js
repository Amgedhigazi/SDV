import React from "react";
import MyBoardCarousel from "./boardMembers";
import { List, Card, Button, Flex } from "antd";
import MyCarousel from "./carousel";
import BoardMemb from "./boardCards";
//import Honor from "./HonorGellery";

const data = [
  {
    title: "Student Membership",
    content: [
      {
        OurBoard: "€15.99",
        space: "Events+Workshops+Seminars",
        user: "1 Adult",
        support: "Counseling and support Gathering",
        backup: "Updated by SMS",
        access: "Invited to all Events"
      }
    ]
  },
  {
    title: "Basic Membership",
    content: [
      {
        OurBoard: "€25.99",
        space: "Events+Workshops+Seminars",
        user: "2 Adults",
        support: "Counseling and support Gathering",
        backup: "Updated by Email and SMS",
        access: "Invited to all Events"
      }
    ]
  },
  {
    title: "Family Membership",
    content: [
      {
        OurBoard: "€79.99",
        space: "Events Participant",
        user: "2 Adults + 3 kids (under 16)",
        support: "Private Counseling and support Gathering",
        backup: "Updated by Email and SMS",
        access: "Invited to all Events"
      }
    ]
  }
];

function AppOurBoard() {
  return (
    <>
     <div>
            <MyCarousel />
          </div>
      <div id="OurBoard" className="block OurBoardBlock bgGray">
     

        <div className="container-fluid">
          <div className="titleHolder">
            <h2>Choose a plan to fit your needs</h2>
          </div>

          
          <List
            grid={{
              gutter: 16,
              xs: 1,
              sm: 1,
              md: 3,
              lg: 3,
              xl: 3,
              xxl: 3
            }}
            dataSource={data}
            renderItem={(item) => (
              <List.Item>
                <Card title={item.title}>
                  <p className="large">{item.content[0].OurBoard}</p>
                  <p>{item.content[0].space}</p>
                  <p>{item.content[0].user}</p>
                  <p>{item.content[0].support}</p>
                  <p>{item.content[0].backup}</p>
                  <p>{item.content[0].access}</p>
                  <Button type="primary" size="large">
                    <i className="fab fa-telegram-plane"></i> Get Started
                  </Button>
                </Card>
              </List.Item>
            )}
          />

          
        </div>
        <div>
          <BoardMemb />
        </div>
      </div>

      <div
        className="container"
        style={{
          width: "100%",
          backgroundColor: "#f0f2f5",
          display: "block",
          height: "100%",
          gap: "10px",
         
        }}
      >
        
        <div
          className=""
          style={{
            width: "100%",
            backgroundColor: "#f0f2f5",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "flex-start",
            borderTop:"15px",
           borderTopColor: "#a4d2dd",
            paddingTop: "5px",
            
          }}
        >
          <div style={{  width: "50%",height: "100%",paddingBottom:"30px"}}>
          
          <MyBoardCarousel />
          </div>
          
          <div style={{ width: "37%", marginTop: "80px",textJustify:"revert" }}>
          <div
          className="titleHolder"
          style={{
           backgroundColor: "#f0f2f5",
           display: "block",
            gap: "5px",
            paddingTop: "10px",
            height: "50%", 
            textAlign: "left",
            textJustify:"auto"
            
            
          }}
        >
          <h3>Our Honorable Friends</h3>
         
          <p className="accordion-body"  style={{
           textJustify:"-moz-initial",
           display: "block",
            gap: "5px",
            paddingTop: "10px",
            height: "50%", 
            textAlign: "left",
            width:"100%",
            paddingLeft:"0px"
            
            
          }}>
              In various events, we have gained true friends
              and supporters they have participated in many events,
              we would like to thank you very much for your support
              and for you being there. <br/>We would also like to thank
              all the volunteers, without whom the events would not 
              have been possible, and all the artists and performers, 
              without whom we would not have been able to 
              tell the story of a revolution.
              We hope to welcome you again at our next events. <br />
              Your Sudanese-German Verein NRW e.V.
            </p>
            </div>
          </div>
          
        </div>
        
      </div>
    </>
  );
}

export default AppOurBoard;
