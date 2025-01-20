import React, { useState } from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import AboutPage from '../pages/about/AboutPage';
import { useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const [login, setLogin] = useState(false);
  const location = useLocation();

  // 로그인, 회원가입 페이지일 경우 사이드바 없이 표시
  if (location.pathname === '/login' || location.pathname === '/register') {
    return children;
  }

  return (
    <LayoutWrapper>
      {login ? (
        <>
          <Sidebar />
          <MainContent>
            {children}
          </MainContent>
        </>
      ) : (
        <AboutPage />
      )}
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled.div`
  min-height: 100vh;
  background-color: #f8f8fd;
`;

const MainContent = styled.main`
  margin-left: 240px; // Sidebar 너비만큼 여백
  padding: 32px 24px;
  min-height: 100vh;
  
  & > div {
    max-width: 1200px;
    margin: 0 auto;
  }
`;

export default Layout;
