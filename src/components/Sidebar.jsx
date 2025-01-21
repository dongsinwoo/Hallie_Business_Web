import React from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/images/hallie-logo.png';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const handleMenuClick = (path) => {
    navigate(path);
  };

  // 현재 경로가 특정 섹션에 속하는지 확인하는 함수
  const isPathActive = (path) => {
    if (path === '/') {
      return currentPath === '/';
    }
    return currentPath.startsWith(path);
  };

  // 기본 프로필 이미지 SVG
  const defaultProfileImage = (
    <DefaultProfileIcon viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
    </DefaultProfileIcon>
  );

  // 이미지 로드 에러 핸들러
  const handleImageError = (e) => {
    e.target.style.display = 'none';
    e.target.nextElementSibling.style.display = 'flex';
  };

  return (
    <SidebarContainer>
      <MainSection>
        <LogoSection onClick={() => handleMenuClick('/dashboard')}>
          <LogoIcon>
            <img src={logo} alt="logo" width="32" height="32" />
          </LogoIcon>
          <LogoText>Hallie</LogoText>
        </LogoSection>

        <MenuList>
          <MenuItem 
            active={isPathActive('/dashboard')} 
            onClick={() => handleMenuClick('/dashboard')}
          >
            <MenuIcon>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
              </svg>
            </MenuIcon>
            대시보드
          </MenuItem>
          <MenuItem 
            active={isPathActive('/orders')} 
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
            active={isPathActive('/products')} 
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
            active={isPathActive('/questions')} 
            onClick={() => handleMenuClick('/questions')}
          >
            <MenuIcon>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
              </svg>
            </MenuIcon>
            문의 사항
          </MenuItem>
        </MenuList>
      </MainSection>

      <ProfileSection>
        <ProfileInfo>
          <ProfileImageContainer>
            <ProfileImage 
              src="/company-logo.png" 
              alt="Company Profile"
              onError={handleImageError}
            />
            <DefaultProfileContainer>
              {defaultProfileImage}
            </DefaultProfileContainer>
          </ProfileImageContainer>
          <ProfileDetails>
            <CompanyName>할리푸드</CompanyName>
            <CompanyEmail>admin@hallie.com</CompanyEmail>
          </ProfileDetails>
        </ProfileInfo>
        <LogoutButton onClick={() => handleMenuClick('/')}>
          <LogoutIcon>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"/>
            </svg>
          </LogoutIcon>
          로그아웃
        </LogoutButton>
      </ProfileSection>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.aside`
  width: 240px;
  background: white;
  padding: 24px;
  border-right: 1px solid #EAECF0;
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
`;

const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  flex: 1;
  overflow-y: auto;
  min-height: 0;
  
  /* 스크롤바 스타일링 */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #E5E7EB;
    border-radius: 3px;
  }

  &:hover::-webkit-scrollbar-thumb {
    background: #D1D5DB;
  }
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
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

const ProfileSection = styled.div`
  margin-top: auto;
  padding-top: 16px;
  border-top: 1px solid #EAECF0;
  flex-shrink: 0;
`;

const ProfileInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
`;

const ProfileImageContainer = styled.div`
  width: 40px;
  height: 40px;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  background: #F3F4F6;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`;

const DefaultProfileContainer = styled.div`
  width: 100%;
  height: 100%;
  display: none;
  align-items: center;
  justify-content: center;
  background: #F3F4F6;
`;

const DefaultProfileIcon = styled.svg`
  width: 24px;
  height: 24px;
  fill: #9CA3AF;
`;

const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const CompanyName = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #111827;
`;

const CompanyEmail = styled.span`
  font-size: 12px;
  color: #6B7280;
`;

const LogoutButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border: none;
  border-radius: 8px;
  background: white;
  color: #6B7280;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #FEF2F2;
    color: #EF4444;
  }
`;

const LogoutIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: inherit;
`;

export default Sidebar;
