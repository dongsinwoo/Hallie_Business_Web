import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
const Layout = () => {
  return (
    <LayoutWrapper>
      <Sidebar />
      <MainContent>
        <Outlet />
      </MainContent>
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled.div`
  min-height: 100vh;
  background-color: #F8F9FD;
`;

const MainContent = styled.main`
  padding: 24px;
  margin-left: 240px;
`;

export default Layout;