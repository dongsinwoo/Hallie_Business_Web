import React from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const handleMenuClick = (path) => {
    navigate(path);
  };

  return (
    <SidebarContainer>
      <LogoSection onClick={() => handleMenuClick('/')}>
        <LogoIcon>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <rect width="20" height="20" rx="4" fill="#00D54B"/>
            <path d="M14 8H6V6H14V8ZM14 10H6V12H14V10ZM6 16H10V14H6V16Z" fill="white"/>
          </svg>
        </LogoIcon>
        <LogoText>Hallie</LogoText>
      </LogoSection>

      <MenuList>
        <MenuItem 
          active={currentPath === '/'} 
          onClick={() => handleMenuClick('/')}
        >
          <MenuIcon>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
            </svg>
          </MenuIcon>
          대시보드
        </MenuItem>
        <MenuItem 
          active={currentPath === '/orders'} 
          onClick={() => handleMenuClick('/orders')}
        >
          <MenuIcon>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>
              <path d="M7 12h2v5H7zm4-7h2v12h-2zm4 4h2v8h-2z"/>
            </svg>
          </MenuIcon>
          주문 현황
        </MenuItem>
        <MenuItem 
          active={currentPath === '/products'} 
          onClick={() => handleMenuClick('/products')}
        >
          <MenuIcon>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22 8.5V6.7c0-1-.8-1.7-1.7-1.7H3.7C2.8 5 2 5.8 2 6.7v1.8L12 13l10-4.5z"/>
              <path d="M2 10v8.3C2 19.2 2.8 20 3.7 20h16.5c1 0 1.7-.8 1.7-1.7V10l-10 4.5L2 10z"/>
            </svg>
          </MenuIcon>
          상품
        </MenuItem>
        <MenuItem 
          active={currentPath === '/halal'} 
          onClick={() => handleMenuClick('/halal')}
        >
          <MenuIcon>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
            </svg>
          </MenuIcon>
          할랄 인증
        </MenuItem>
      </MenuList>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.aside`
  width: 240px;
  background: white;
  padding: 24px;
  border-right: 1px solid #EAECF0;
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 32px;
  cursor: pointer;
`;

const LogoIcon = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoText = styled.h1`
  font-size: 20px;
  font-weight: bold;
  margin: 0;
`;

const MenuList = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const MenuItem = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border-radius: 8px;
  cursor: pointer;
  color: ${props => props.active ? '#00D54B' : '#666'};
  background: ${props => props.active ? '#E8F5E9' : 'transparent'};
  
  &:hover {
    background: ${props => props.active ? '#E8F5E9' : '#F5F5F5'};
  }
`;

const MenuIcon = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Sidebar;
