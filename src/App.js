import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import 'antd/dist/antd.css';
import 'lightbox2/dist/css/lightbox.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Layout } from 'antd';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import LoginModal from './components/auth/LoginModal';
import AppHeader from './components/common/header';
import AppFooter from './components/common/footer';
import AppLand from './views/land';
import AppFeature from './components/home/feature';
import AppHero from './components/home/hero';
import GalleryViewer from './components/GalleryViewer';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Layout className="mainLayout">
          <Header>
            <AppHeader />
          </Header>
          <Content>
            <AppLand />
            <Routes>
              <Route path="/home"        element={<AppHero />} />
              <Route path="/features"    element={<AppFeature />} />
              <Route path="/gallery/:id" element={<GalleryViewer />} />
            </Routes>
          </Content>
          <Footer>
            <AppFooter />
          </Footer>
        </Layout>
        <LoginModal />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
