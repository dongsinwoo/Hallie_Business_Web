import React from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Sidebar />
      <MainContent>
        {children}
      </MainContent>
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
