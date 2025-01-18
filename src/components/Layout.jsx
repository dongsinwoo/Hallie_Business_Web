import React from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Sidebar />
      <MainContent>
        <Header />
        {children}
      </MainContent>
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #f8f8fd;
`;

const MainContent = styled.main`
  flex: 1;
  
`;

export default Layout;
