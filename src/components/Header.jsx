import React from 'react';
import styled from 'styled-components';
import { NotificationIcon } from './Icons';

const Header = () => {
  return (
    <HeaderWrapper>
      <Title>대시보드</Title>
      <HeaderIcons>
        <IconButton>
        </IconButton>
        <IconButton>
          <NotificationIcon />
        </IconButton>
        <ProfileImage />
      </HeaderIcons>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
  background-color: white;
  padding: 16px 24px;  
  border-radius: 12px;
  margin: 0 auto;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: #111827;
  margin: 0;
`;

const SearchBarWrapper = styled.div`
  position: relative;
  width: 360px;
  background: white;
  border-radius: 12px;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);

  svg {
    color: #9CA3AF;
    margin-right: 8px;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  border: none;
  background: transparent;
  font-size: 14px;
  color: #111827;
  padding: 0;

  &::placeholder {
    color: #9CA3AF;
  }

  &:focus {
    outline: none;
  }
`;

const HeaderIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  color: #6B7280;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 24px;
    height: 24px;
  }

  &:hover {
    color: #111827;
  }
`;

const ProfileImage = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #F3F4F6;
  cursor: pointer;
`;

export default Header;
