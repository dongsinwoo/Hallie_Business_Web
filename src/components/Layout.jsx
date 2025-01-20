import React, { useState } from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import AboutPage from '../pages/about/AboutPage';

const Layout = ({ children }) => {
  const [login, setLogin] = useState(false);
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
