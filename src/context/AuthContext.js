import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem('sdv_user');
      return saved ? JSON.parse(saved) : null;
    } catch { return null; }
  });

  const [showModal, setShowModal]           = useState(false);
  const [modalTab, setModalTab]             = useState('login');
  const [membershipPreset, setMembershipPreset] = useState(null);

  const openLogin = () => {
    setModalTab('login');
    setMembershipPreset(null);
    setShowModal(true);
  };

  const openRegister = (membership = null) => {
    setModalTab('register');
    setMembershipPreset(membership);
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem('sdv_users') || '[]');
    const found = users.find(
      u => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    );
    if (found) {
      setUser(found);
      localStorage.setItem('sdv_user', JSON.stringify(found));
      return { success: true };
    }
    return { success: false, error: 'Invalid email or password.' };
  };

  const register = (userData) => {
    const users = JSON.parse(localStorage.getItem('sdv_users') || '[]');
    if (users.find(u => u.email.toLowerCase() === userData.email.toLowerCase())) {
      return { success: false, error: 'This email is already registered.' };
    }
    const newUser = { ...userData, id: Date.now(), joinedAt: new Date().toISOString() };
    users.push(newUser);
    localStorage.setItem('sdv_users', JSON.stringify(users));
    setUser(newUser);
    localStorage.setItem('sdv_user', JSON.stringify(newUser));
    return { success: true };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('sdv_user');
  };

  return (
    <AuthContext.Provider value={{
      user, login, register, logout,
      showModal, modalTab, membershipPreset,
      openLogin, openRegister, closeModal
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
