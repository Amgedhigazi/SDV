import React, { useState } from 'react';
import { Modal } from 'antd';

const PRESETS = [10, 25, 50, 100, 250];
const IBAN = 'DE61 3004 0000 0826 4400 00';
const BIC  = 'COBADEFFXXX';
const BANK = 'Commerzbank';

function DonationModal({ project, onClose }) {
  const [step, setStep]       = useState('form'); // 'form' | 'confirm' | 'done'
  const [amount, setAmount]   = useState(25);
  const [custom, setCustom]   = useState('');
  const [useCustom, setUseCustom] = useState(false);
  const [name, setName]       = useState('');
  const [email, setEmail]     = useState('');
  const [message, setMessage] = useState('');
  const [method, setMethod]   = useState('bank'); // 'bank' | 'paypal'
  const [errors, setErrors]   = useState({});

  const finalAmount = useCustom ? parseFloat(custom) || 0 : amount;

  const validate = () => {
    const e = {};
    if (!name.trim())                      e.name   = 'Please enter your name.';
    if (!email.trim() || !email.includes('@')) e.email = 'Please enter a valid email.';
    if (finalAmount < 1)                   e.amount = 'Minimum donation is €1.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setStep('confirm');
  };

  const reference = `SDV-${project.id.toUpperCase()}-${Date.now().toString(36).toUpperCase()}`;

  const paypalURL = `https://www.paypal.com/paypalme/sdvnrw/${finalAmount}`;

  return (
    <Modal
      open={true}
      onCancel={onClose}
      footer={null}
      destroyOnClose
      width={520}
      centered
      className="donation-modal"
    >
      {/* Header */}
      <div className="donation-header" style={{ background: project.gradient }}>
        <i className={project.icon} style={{ fontSize: 32, color: '#fff', marginBottom: 8 }}></i>
        <h3>{project.title}</h3>
        <p>Your donation goes directly to this project</p>
      </div>

      {step === 'form' && (
        <form className="donation-form" onSubmit={handleSubmit} noValidate>

          {/* Amount */}
          <div className="donation-section">
            <label className="donation-label">Choose Amount (€)</label>
            <div className="amount-presets">
              {PRESETS.map(p => (
                <button
                  key={p}
                  type="button"
                  className={`amount-preset-btn ${!useCustom && amount === p ? 'active' : ''}`}
                  style={!useCustom && amount === p ? { background: project.gradient, borderColor: 'transparent' } : {}}
                  onClick={() => { setAmount(p); setUseCustom(false); }}
                >
                  €{p}
                </button>
              ))}
              <button
                type="button"
                className={`amount-preset-btn ${useCustom ? 'active' : ''}`}
                style={useCustom ? { background: project.gradient, borderColor: 'transparent' } : {}}
                onClick={() => setUseCustom(true)}
              >
                Custom
              </button>
            </div>
            {useCustom && (
              <div className="donation-input-wrap" style={{ marginTop: 10 }}>
                <span className="input-euro">€</span>
                <input
                  type="number"
                  min="1"
                  className="donation-input"
                  placeholder="Enter amount"
                  value={custom}
                  onChange={e => setCustom(e.target.value)}
                  autoFocus
                />
              </div>
            )}
            {errors.amount && <p className="donation-error">{errors.amount}</p>}
          </div>

          {/* Donor info */}
          <div className="donation-section">
            <label className="donation-label">Your Details</label>
            <input
              className={`donation-input full ${errors.name ? 'input-error' : ''}`}
              type="text"
              placeholder="Full name *"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            {errors.name && <p className="donation-error">{errors.name}</p>}

            <input
              className={`donation-input full ${errors.email ? 'input-error' : ''}`}
              type="email"
              placeholder="Email address *"
              value={email}
              onChange={e => setEmail(e.target.value)}
              style={{ marginTop: 10 }}
            />
            {errors.email && <p className="donation-error">{errors.email}</p>}

            <textarea
              className="donation-input full"
              placeholder="Message (optional)"
              rows={2}
              value={message}
              onChange={e => setMessage(e.target.value)}
              style={{ marginTop: 10, resize: 'vertical' }}
            />
          </div>

          {/* Payment method */}
          <div className="donation-section">
            <label className="donation-label">Payment Method</label>
            <div className="payment-methods">
              <button
                type="button"
                className={`payment-method-btn ${method === 'bank' ? 'active' : ''}`}
                onClick={() => setMethod('bank')}
              >
                <i className="fas fa-university"></i> Bank Transfer
              </button>
              <button
                type="button"
                className={`payment-method-btn ${method === 'paypal' ? 'active' : ''}`}
                onClick={() => setMethod('paypal')}
              >
                <i className="fab fa-paypal"></i> PayPal
              </button>
            </div>
          </div>

          <button type="submit" className="donation-submit-btn" style={{ background: project.gradient }}>
            <i className="fas fa-heart"></i> Donate €{finalAmount} Now
          </button>
        </form>
      )}

      {step === 'confirm' && (
        <div className="donation-confirm">
          <div className="confirm-check">
            <i className="fas fa-check-circle"></i>
          </div>
          <h3>Thank you, {name.split(' ')[0]}!</h3>
          <p className="confirm-subtitle">
            Your donation of <strong>€{finalAmount}</strong> to <strong>{project.title}</strong> is being processed.
          </p>

          {method === 'bank' ? (
            <div className="donation-bank-box">
              <p className="bank-instruction">
                Please transfer <strong>€{finalAmount}</strong> with the reference below:
              </p>
              <div className="bank-detail-row">
                <span>Account holder</span>
                <strong>SDV NRW e.V.</strong>
              </div>
              <div className="bank-detail-row">
                <span>IBAN</span>
                <strong>{IBAN}</strong>
              </div>
              <div className="bank-detail-row">
                <span>BIC</span>
                <strong>{BIC}</strong>
              </div>
              <div className="bank-detail-row">
                <span>Bank</span>
                <strong>{BANK}</strong>
              </div>
              <div className="bank-detail-row reference-row">
                <span>Reference</span>
                <strong>{reference}</strong>
              </div>
              <p className="bank-note">
                <i className="fas fa-info-circle"></i>
                Please include the reference so we can allocate your donation to this project.
              </p>
            </div>
          ) : (
            <div className="donation-paypal-box">
              <p>Click the button below to complete your PayPal payment:</p>
              <a
                href={paypalURL}
                target="_blank"
                rel="noopener noreferrer"
                className="paypal-donate-btn"
              >
                <i className="fab fa-paypal"></i> Pay €{finalAmount} via PayPal
              </a>
              <p className="bank-note" style={{ marginTop: 16 }}>
                Please add <strong>{reference}</strong> as a note so we can attribute your donation.
              </p>
            </div>
          )}

          <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
            <button className="confirm-close-btn" onClick={onClose}>
              <i className="fas fa-check"></i> Done
            </button>
          </div>
        </div>
      )}
    </Modal>
  );
}

export default DonationModal;
