import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password });
  };

  return (
    <PageContainer>
      <LoginSection>
        <FormTitle>로그인</FormTitle>
        <LoginForm onSubmit={handleLogin}>
          <FormContent>
            <InputGroup>
              <Label>이메일</Label>
              <Input
                type="email"
                placeholder="이메일을 입력해주세요"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputGroup>
            <InputGroup>
              <Label>비밀번호</Label>
              <Input
                type="password"
                placeholder="비밀번호를 입력해주세요"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </InputGroup>
            <LoginButton type="submit">로그인</LoginButton>

            <Divider>또는 소셜 계정으로 로그인</Divider>

            <SocialButtons>
              <SocialButton bgColor="#EA4335" onClick={() => navigate('/register')}>
                <img src="/google-icon.svg" alt="Google" />
                Google로 계속하기
              </SocialButton>
              <SocialButton bgColor="#1877F2" onClick={() => navigate('/register')}>
                <img src="/facebook-icon.svg" alt="Facebook" />
                Facebook으로 계속하기
              </SocialButton>
            </SocialButtons>
          </FormContent>
        </LoginForm>
      </LoginSection>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: white;
`;

const LoginSection = styled.div`
  width: 400px;
  padding: 40px;
  background: white;
  border-radius: 16px;
  border: 1px solid #E5E7EB;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
`;

const FormTitle = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: #111827;
  margin-bottom: 32px;
  text-align: center;
`;

const LoginForm = styled.form`
  width: 100%;
`;

const FormContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: #374151;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #E5E7EB;
  border-radius: 8px;
  font-size: 14px;
  color: #111827;
  background: white;
  transition: all 0.2s;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #00D54B;
    box-shadow: 0 0 0 3px rgba(0, 213, 75, 0.1);
  }

  &::placeholder {
    color: #9CA3AF;
  }
`;

const LoginButton = styled.button`
  width: 100%;
  padding: 12px;
  background: #00D54B;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background: #00C344;
  }

  &:active {
    background: #00B33D;
  }
`;

const Divider = styled.div`
  text-align: center;
  font-size: 14px;
  color: #6B7280;
  position: relative;
  margin: 20px 0;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    width: 30%;
    height: 1px;
    background: #E5E7EB;
  }

  &::before {
    left: 0;
  }

  &::after {
    right: 0;
  }
`;

const SocialButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const SocialButton = styled.button`
  width: 100%;
  padding: 12px;
  background: ${props => props.bgColor};
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }

  img {
    width: 20px;
    height: 20px;
  }
`;

export default LoginPage;
