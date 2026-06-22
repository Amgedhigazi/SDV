import React, { useState, useEffect } from 'react';
import { Modal, Form, Input, Button, Tabs, Select, Alert, Divider } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import { useAuth } from '../../context/AuthContext';

const { TabPane } = Tabs;
const { Option } = Select;

const PLANS = [
  { key: 'student', label: 'Student Membership', price: '€15.99/year' },
  { key: 'basic',   label: 'Basic Membership',   price: '€25.99/year' },
  { key: 'family',  label: 'Family Membership',  price: '€79.99/year' },
];

const PAYMENT_AMOUNTS = { student: '15.99', basic: '25.99', family: '79.99' };

function LoginModal() {
  const { showModal, modalTab, membershipPreset, closeModal, login, register } = useAuth();
  const [activeTab, setActiveTab]       = useState(modalTab);
  const [error, setError]               = useState('');
  const [success, setSuccess]           = useState(null);
  const [loading, setLoading]           = useState(false);
  const [loginForm]    = Form.useForm();
  const [registerForm] = Form.useForm();

  useEffect(() => {
    setActiveTab(modalTab);
    setError('');
    setSuccess(null);
  }, [modalTab, showModal]);

  useEffect(() => {
    if (membershipPreset) {
      registerForm.setFieldsValue({ membership: membershipPreset });
    }
  }, [membershipPreset, registerForm]);

  const handleLogin = async (values) => {
    setLoading(true);
    setError('');
    const result = login(values.email, values.password);
    setLoading(false);
    if (result.success) {
      closeModal();
      loginForm.resetFields();
    } else {
      setError(result.error);
    }
  };

  const handleRegister = async (values) => {
    setLoading(true);
    setError('');
    const result = register({
      name: values.name,
      email: values.email,
      password: values.password,
      phone: values.phone || '',
      membership: values.membership,
    });
    setLoading(false);
    if (result.success) {
      setSuccess(values.membership);
    } else {
      setError(result.error);
    }
  };

  const selectedPlan = PLANS.find(p => p.key === success);

  return (
    <Modal
      open={showModal}
      onCancel={() => { closeModal(); setSuccess(null); setError(''); }}
      footer={null}
      width={480}
      centered
      className="auth-modal"
    >
      {success ? (
        <div style={{ textAlign: 'center', padding: '20px 0' }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>🎉</div>
          <h2 style={{ color: 'var(--primary)', marginBottom: 8 }}>Welcome to SDV NRW!</h2>
          <p style={{ color: '#666', marginBottom: 24 }}>
            Your account has been created. Please complete your membership by making the annual payment.
          </p>

          <div className="payment-box">
            <h4 style={{ color: 'var(--gold)', marginBottom: 12 }}>
              {selectedPlan?.label} — {selectedPlan?.price}
            </h4>

            <Divider style={{ borderColor: 'rgba(255,255,255,0.2)', margin: '12px 0' }} />

            <p style={{ marginBottom: 6, fontWeight: 600, color: '#fff' }}>Bank Transfer (SEPA)</p>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)', margin: '4px 0' }}>
              Recipient: Sudanesisch-Dt. Verein e.V.
            </p>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)', margin: '4px 0' }}>
              IBAN: DE61 3004 0000 0826 4400 00
            </p>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)', margin: '4px 0' }}>
              Bank: Commerzbank
            </p>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)', margin: '4px 0' }}>
              Reference: <strong>Membership — {selectedPlan?.label}</strong>
            </p>

            <Divider style={{ borderColor: 'rgba(255,255,255,0.2)', margin: '12px 0' }} />

            <p style={{ marginBottom: 8, fontWeight: 600, color: '#fff' }}>Or pay via PayPal</p>
            <a
              href={`https://www.paypal.com/paypalme/sdvnrw/${PAYMENT_AMOUNTS[success]}`}
              target="_blank"
              rel="noopener noreferrer"
              className="paypal-btn"
            >
              <i className="fab fa-paypal"></i> Pay €{PAYMENT_AMOUNTS[success]} via PayPal
            </a>
          </div>

          <p style={{ marginTop: 20, fontSize: 13, color: '#888' }}>
            After payment, email us at <strong>de.sd.verein@gmail.com</strong> with your name for confirmation.
          </p>
          <Button type="primary" onClick={() => { closeModal(); setSuccess(null); }}
            style={{ marginTop: 12, background: 'var(--accent)', borderColor: 'var(--accent)', borderRadius: 50 }}>
            Done
          </Button>
        </div>
      ) : (
        <>
          <div style={{ textAlign: 'center', marginBottom: 24 }}>
            <h2 style={{ color: 'var(--primary)', margin: 0 }}>SDV NRW Member Portal</h2>
            <p style={{ color: '#888', margin: '4px 0 0' }}>Sign in or create your member account</p>
          </div>

          {error && <Alert message={error} type="error" showIcon style={{ marginBottom: 16 }} />}

          <Tabs activeKey={activeTab} onChange={k => { setActiveTab(k); setError(''); }} centered>
            <TabPane tab="Sign In" key="login">
              <Form form={loginForm} onFinish={handleLogin} layout="vertical" size="large">
                <Form.Item name="email" rules={[{ required: true, type: 'email', message: 'Please enter your email' }]}>
                  <Input prefix={<MailOutlined />} placeholder="Email address" />
                </Form.Item>
                <Form.Item name="password" rules={[{ required: true, message: 'Please enter your password' }]}>
                  <Input.Password prefix={<LockOutlined />} placeholder="Password" />
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit" loading={loading} block
                    style={{ background: 'var(--primary)', borderColor: 'var(--primary)', borderRadius: 50, height: 44 }}>
                    Sign In
                  </Button>
                </Form.Item>
                <p style={{ textAlign: 'center', color: '#888', fontSize: 13 }}>
                  Not a member?{' '}
                  <span style={{ color: 'var(--accent)', cursor: 'pointer' }} onClick={() => setActiveTab('register')}>
                    Create an account
                  </span>
                </p>
              </Form>
            </TabPane>

            <TabPane tab="Create Account" key="register">
              <Form form={registerForm} onFinish={handleRegister} layout="vertical" size="large">
                <Form.Item name="name" rules={[{ required: true, message: 'Please enter your full name' }]}>
                  <Input prefix={<UserOutlined />} placeholder="Full name" />
                </Form.Item>
                <Form.Item name="email" rules={[{ required: true, type: 'email', message: 'Please enter a valid email' }]}>
                  <Input prefix={<MailOutlined />} placeholder="Email address" />
                </Form.Item>
                <Form.Item name="phone">
                  <Input prefix={<PhoneOutlined />} placeholder="Phone number (optional)" />
                </Form.Item>
                <Form.Item name="password" rules={[{ required: true, min: 6, message: 'Password must be at least 6 characters' }]}>
                  <Input.Password prefix={<LockOutlined />} placeholder="Create a password" />
                </Form.Item>
                <Form.Item name="membership" rules={[{ required: true, message: 'Please select a membership type' }]}>
                  <Select placeholder="Select membership type">
                    {PLANS.map(p => (
                      <Option key={p.key} value={p.key}>{p.label} — {p.price}</Option>
                    ))}
                  </Select>
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit" loading={loading} block
                    style={{ background: 'var(--accent)', borderColor: 'var(--accent)', borderRadius: 50, height: 44 }}>
                    Create Account &amp; View Payment
                  </Button>
                </Form.Item>
                <p style={{ textAlign: 'center', color: '#888', fontSize: 13 }}>
                  Already a member?{' '}
                  <span style={{ color: 'var(--primary)', cursor: 'pointer' }} onClick={() => setActiveTab('login')}>
                    Sign in
                  </span>
                </p>
              </Form>
            </TabPane>
          </Tabs>
        </>
      )}
    </Modal>
  );
}

export default LoginModal;
