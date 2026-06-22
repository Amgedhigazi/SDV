import React from 'react';
import { useParams } from 'react-router-dom';
import { Button } from 'antd';
import { LockOutlined } from '@ant-design/icons';
import { useAuth } from '../context/AuthContext';
import LightboxGallery1 from './home/LightboxGallery1';
import LightboxGallery2 from './home/LightboxGallery2';
import LightboxGallery3 from './home/LightboxGallery3';
import LightboxGallery4 from './home/LightboxGallery4';
import LightboxGallery5 from './home/LightboxGallery5';
import LightboxGallery6 from './home/LightboxGallery6';
import './LightboxGallery.css';

function GalleryLocked() {
  const { openLogin, openRegister } = useAuth();
  return (
    <div className="gallery-locked-screen">
      <div className="gallery-locked-box">
        <LockOutlined style={{ fontSize: 56, color: 'var(--gold)', marginBottom: 16 }} />
        <h2>Members Only Gallery</h2>
        <p>Sign in with your member account to view this gallery, or become a member to get full access.</p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginTop: 24 }}>
          <Button type="primary" size="large" onClick={openLogin}
            style={{ background: 'var(--primary)', borderColor: 'var(--primary)', borderRadius: 50, padding: '0 32px' }}>
            Sign In
          </Button>
          <Button size="large" onClick={() => openRegister()}
            style={{ background: 'var(--accent)', borderColor: 'var(--accent)', color: '#fff', borderRadius: 50, padding: '0 32px' }}>
            Become a Member
          </Button>
        </div>
      </div>
    </div>
  );
}

const GalleryViewer = () => {
  const { id } = useParams();
  const { user } = useAuth();

  if (!user) return <GalleryLocked />;

  switch (id) {
    case '1': return <LightboxGallery1 />;
    case '2': return <LightboxGallery2 />;
    case '3': return <LightboxGallery3 />;
    case '4': return <LightboxGallery4 />;
    case '5': return <LightboxGallery5 />;
    case '6': return <LightboxGallery6 />;
    default:  return <div style={{ padding: 40, textAlign: 'center' }}>Gallery not found.</div>;
  }
};

export default GalleryViewer;
