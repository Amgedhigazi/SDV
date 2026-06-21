import React from 'react';
import { Form, Input, Button, Checkbox, Row, Col } from 'antd';

const { TextArea } = Input;

function AppContact() {
  return (
    <div id="contact" className="block contactBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Contact Us</h2>
         
        </div>
        <hr/>
        <br/>
        <Row gutter={[16, 16]}>
          <Col md={{ span: 10 }}>
          
            <div className="contentHolder">
            
              <p>
              <div className="title">
              <h2>Get in Touch</h2>
            </div>
                Please get in touch with us. We are happy 
                to answer your<br />
                 questions and are open to your feedback. 
                You can reach us <br /> via the following channels:
                <br /><br />
                Sudanese - Deutsche Verein NRW e.V.
                <br />
                registered in the association register at the
                <br />
                Telefon: +49 176 61048483
                <br />
                Web: www.sudandeutschverein.de
                <br />
                E-Mail: de.sd.verein@gmail.com
                <br />
                C/O: Marienstr. 92
                <br />
                45307 Essen.
              <hr/>
                <br />
              <b>  Declaration of membership  </b> 
  To the secretariat of the Sudanese-German Association S.D.V.

I intend to join the association as a member and request that I be accepted.
<br/> <br/>

<r>For young people up to 18 years of age, the following declaration of consent from the legal guardian (father, mother) is required.
<br/><b>I agree to my son/daughter joining the club!</b></r>


              </p>
            </div>
           
          </Col>
       
          <Col md={{ span: 14 }}>
       
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
        >
           <Form.Item
            name="titel"
            rules={[
              {
                required: true,
                message: 'Please enter your titel!'
              }
            ]}
          >
            <Input placeholder="Titel" />
          </Form.Item>

          <Form.Item
            name="full Name"
            rules={[
              {
                required: true,
                message: 'Please enter your full name!'
              }
            ]}
          >
            <Input placeholder="Full Name" />
          </Form.Item>

          <Form.Item
            name="Occupation:"
            rules={[
              {
                required: true,
                message: 'Please enter your Occupation:!'
              }
            ]}
          >
            <Input placeholder="Occupation:" />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ]}
          >
            <Input placeholder="Email Address" />
          </Form.Item>



          <Form.Item
            name="Address"
            rules={[
              {
                type: 'Address',
                message: 'The input is not valid Address!',
              },
              {
                required: true,
                message: 'Please input your Address!',
              },
            ]}
          >
             <Input placeholder="Street" />
            <Input placeholder="Postal Code" />
          </Form.Item>
          <Form.Item
            name="telephone"
          >
            <Input placeholder="Telephone" />
          </Form.Item>
          <Form.Item
            name="subject"
          >
            <Input placeholder="Subject" />
          </Form.Item>
          <Form.Item
            name="message"
          >
            <TextArea placeholder="Message" />
          </Form.Item>
          <Form.Item>
            <Form.Item
              name="remember"
              valuePropName="checked"
              noStyle
              rules={[
                { validator: (_, value) => value ? Promise.resolve() : Promise.reject('Should accept agreement') },
              ]}
            >
              <Checkbox>I agree with terms and conditions.</Checkbox>
            </Form.Item>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Submit
            </Button>
          </Form.Item>
        </Form>
        </Col>
        </Row>
      </div>
    </div>
  );
}

export default AppContact;
