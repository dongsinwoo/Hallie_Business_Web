import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [agreements, setAgreements] = useState({
    terms: false,
    privacy: false,
    marketing: false,
  });
  const [formData, setFormData] = useState({
    companyName: '',
    businessNumber: '',
    phoneNumber: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });
  const [verificationStatus, setVerificationStatus] = useState({
    business: false,
    phone: false,
    phoneCode: '',
    isPhoneCodeSent: false
  });

  const handleAgreementChange = (name) => {
    setAgreements(prev => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  const handleAllAgreements = () => {
    const allChecked = Object.values(agreements).every(value => value);
    setAgreements({
      terms: !allChecked,
      privacy: !allChecked,
      marketing: !allChecked,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNextStep = () => {
    if (!agreements.terms || !agreements.privacy) {
      alert('필수 약관에 동의해주세요.');
      return;
    }
    setStep(2);
  };

  // 사업자등록번호 인증
  const handleBusinessVerification = async () => {
    if (!formData.businessNumber) {
      alert('사업자등록번호를 입력해주세요.');
      return;
    }
    
    try {
      // TODO: 실제 사업자번호 인증 API 연동
      console.log('사업자번호 인증 시도:', formData.businessNumber);
      setVerificationStatus(prev => ({
        ...prev,
        business: true
      }));
      alert('사업자등록번호가 인증되었습니다.');
    } catch (error) {
      alert('사업자등록번호 인증에 실패했습니다.');
    }
  };

  // 전화번호 인증코드 발송
  const handlePhoneVerification = async () => {
    if (!formData.phoneNumber) {
      alert('전화번호를 입력해주세요.');
      return;
    }

    try {
      // TODO: 실제 SMS 인증 API 연동
      console.log('인증번호 발송:', formData.phoneNumber);
      setVerificationStatus(prev => ({
        ...prev,
        isPhoneCodeSent: true
      }));
      alert('인증번호가 발송되었습니다.');
    } catch (error) {
      alert('인증번호 발송에 실패했습니다.');
    }
  };

  // 전화번호 인증코드 확인
  const handleVerifyPhoneCode = async () => {
    if (!verificationStatus.phoneCode) {
      alert('인증번호를 입력해주세요.');
      return;
    }

    try {
      // TODO: 실제 인증번호 확인 API 연동
      console.log('인증번호 확인:', verificationStatus.phoneCode);
      setVerificationStatus(prev => ({
        ...prev,
        phone: true
      }));
      alert('전화번호가 인증되었습니다.');
    } catch (error) {
      alert('인증번호가 올바르지 않습니다.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!verificationStatus.business) {
      alert('사업자등록번호 인증이 필요합니다.');
      return;
    }
    if (!verificationStatus.phone) {
      alert('전화번호 인증이 필요합니다.');
      return;
    }
    // 여기에 회원가입 로직 구현
    console.log('Registration data:', { ...agreements, ...formData });
  };

  return (
    <PageContainer>
      <RegisterSection>
        <FormTitle>회원가입</FormTitle>
        <StepIndicator>
          <Step active={step === 1}>약관동의</Step>
          <Divider />
          <Step active={step === 2}>정보입력</Step>
        </StepIndicator>

        {step === 1 ? (
          <AgreementForm>
            <AgreementSection>
              <CheckboxGroup>
                <Checkbox>
                  <input
                    type="checkbox"
                    checked={Object.values(agreements).every(value => value)}
                    onChange={handleAllAgreements}
                  />
                  <label>전체 동의</label>
                </Checkbox>
              </CheckboxGroup>

              <Divider />

              <CheckboxGroup>
                <Checkbox>
                  <input
                    type="checkbox"
                    checked={agreements.terms}
                    onChange={() => handleAgreementChange('terms')}
                  />
                  <label>[필수] 서비스 이용약관 동의</label>
                </Checkbox>
                <TermsContent>
                  서비스 이용약관 내용...
                </TermsContent>
              </CheckboxGroup>

              <CheckboxGroup>
                <Checkbox>
                  <input
                    type="checkbox"
                    checked={agreements.privacy}
                    onChange={() => handleAgreementChange('privacy')}
                  />
                  <label>[필수] 개인정보 수집 및 이용 동의</label>
                </Checkbox>
                <TermsContent>
                  개인정보 수집 및 이용 동의 내용...
                </TermsContent>
              </CheckboxGroup>

              <CheckboxGroup>
                <Checkbox>
                  <input
                    type="checkbox"
                    checked={agreements.marketing}
                    onChange={() => handleAgreementChange('marketing')}
                  />
                  <label>[선택] 마케팅 정보 수신 동의</label>
                </Checkbox>
              </CheckboxGroup>
            </AgreementSection>
            <Button onClick={handleNextStep}>다음</Button>
          </AgreementForm>
        ) : (
          <RegisterForm onSubmit={handleSubmit}>
            <FormContent>
              <InputGroup>
                <Label>회사명 *</Label>
                <Input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  placeholder="회사명을 입력해주세요"
                  required
                />
              </InputGroup>

              <InputGroup>
                <Label>사업자등록번호 *</Label>
                <InputWithButton>
                  <Input
                    type="text"
                    name="businessNumber"
                    value={formData.businessNumber}
                    onChange={handleInputChange}
                    placeholder="000-00-00000"
                    required
                    disabled={verificationStatus.business}
                  />
                  <VerificationButton
                    type="button"
                    onClick={handleBusinessVerification}
                    disabled={verificationStatus.business}
                    verified={verificationStatus.business}
                  >
                    {verificationStatus.business ? '인증완료' : '인증하기'}
                  </VerificationButton>
                </InputWithButton>
              </InputGroup>

              <InputGroup>
                <Label>전화번호 *</Label>
                <InputWithButton>
                  <Input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="010-0000-0000"
                    required
                    disabled={verificationStatus.phone}
                  />
                  <VerificationButton
                    type="button"
                    onClick={handlePhoneVerification}
                    disabled={verificationStatus.phone}
                    verified={verificationStatus.phone}
                  >
                    {verificationStatus.phone ? '인증완료' : '인증하기'}
                  </VerificationButton>
                </InputWithButton>
                
                {verificationStatus.isPhoneCodeSent && !verificationStatus.phone && (
                  <InputWithButton>
                    <Input
                      type="text"
                      placeholder="인증번호 6자리 입력"
                      value={verificationStatus.phoneCode}
                      onChange={(e) => setVerificationStatus(prev => ({
                        ...prev,
                        phoneCode: e.target.value
                      }))}
                      maxLength={6}
                    />
                    <VerificationButton
                      type="button"
                      onClick={handleVerifyPhoneCode}
                    >
                      확인
                    </VerificationButton>
                  </InputWithButton>
                )}
              </InputGroup>

              <InputGroup>
                <Label>이메일 *</Label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="이메일을 입력해주세요"
                  required
                />
              </InputGroup>

              <InputGroup>
                <Label>비밀번호 *</Label>
                <Input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="비밀번호를 입력해주세요"
                  required
                />
              </InputGroup>

              <InputGroup>
                <Label>비밀번호 확인 *</Label>
                <Input
                  type="password"
                  name="passwordConfirm"
                  value={formData.passwordConfirm}
                  onChange={handleInputChange}
                  placeholder="비밀번호를 다시 입력해주세요"
                  required
                />
              </InputGroup>

              <ButtonGroup>
                <BackButton type="button" onClick={() => setStep(1)}>이전</BackButton>
                <Button type="submit">가입하기</Button>
              </ButtonGroup>
            </FormContent>
          </RegisterForm>
        )}
      </RegisterSection>
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

const RegisterSection = styled.div`
  width: 500px;
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

const StepIndicator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
`;

const Step = styled.div`
  padding: 8px 16px;
  font-size: 14px;
  color: ${props => props.active ? '#00D54B' : '#6B7280'};
  font-weight: ${props => props.active ? '600' : '400'};
`;

const Divider = styled.div`
  height: 1px;
  flex: 1;
  background: #E5E7EB;
  margin: 0 16px;
`;

const AgreementForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const AgreementSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Checkbox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  
  input[type="checkbox"] {
    width: 16px;
    height: 16px;
  }

  label {
    font-size: 14px;
    color: #374151;
  }
`;

const TermsContent = styled.div`
  padding: 12px;
  background: #F9FAFB;
  border-radius: 8px;
  font-size: 12px;
  color: #6B7280;
  height: 80px;
  overflow-y: auto;
`;

const RegisterForm = styled.form`
  width: 100%;
`;

const FormContent = styled.div`
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

const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 12px;
`;

const Button = styled.button`
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
`;

const BackButton = styled(Button)`
  background: #F3F4F6;
  color: #374151;

  &:hover {
    background: #E5E7EB;
  }
`;

const InputWithButton = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 8px;

  ${Input} {
    flex: 1;
  }
`;

const VerificationButton = styled.button`
  padding: 0 16px;
  background: ${props => props.verified ? '#00B33D' : '#00D54B'};
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: ${props => props.disabled ? 'default' : 'pointer'};
  opacity: ${props => props.disabled ? 0.7 : 1};
  white-space: nowrap;
  transition: all 0.2s;

  &:hover {
    background: ${props => props.verified ? '#00B33D' : '#00C344'};
  }
`;

export default RegisterPage;
