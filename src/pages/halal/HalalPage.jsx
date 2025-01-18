import React from 'react';
import styled from 'styled-components';

const HalalPage = () => {
  const guideSteps = [
    {
      number: '01',
      title: '신청서 작성',
      description: '할랄 인증을 위한 기본 정보와 제품 정보를 작성합니다.'
    },
    {
      number: '02',
      title: '서류 검토',
      description: '제출된 서류를 검토하고 필요한 추가 자료를 요청합니다.'
    },
    {
      number: '03',
      title: '현장 실사',
      description: '생산 시설과 프로세스에 대한 현장 검증을 진행합니다.'
    },
    {
      number: '04',
      title: '인증서 발급',
      description: '모든 요구사항이 충족되면 할랄 인증서가 발급됩니다.'
    }
  ];

  return (
    <Container>
      <GuideSection>
        <GuideTitle>할랄 인증 가이드</GuideTitle>
        <GuideSteps>
          {guideSteps.map((step) => (
            <GuideStep key={step.number}>
              <StepNumber>{step.number}</StepNumber>
              <StepContent>
                <StepTitle>{step.title}</StepTitle>
                <StepDescription>{step.description}</StepDescription>
              </StepContent>
            </GuideStep>
          ))}
        </GuideSteps>
      </GuideSection>

      <ContentSection>
        <Section>
          <SectionTitle>할랄 인증의 중요성</SectionTitle>
          <BulletList>
            <ListItem>글로벌 시장 진출 기회 확대</ListItem>
            <ListItem>무슬림 소비자 신뢰 확보</ListItem>
            <ListItem>제품 품질 및 안전성 보장</ListItem>
            <ListItem>기업 이미지 향상</ListItem>
          </BulletList>
        </Section>

        <InfoGrid>
          <InfoCard>
            <CheckIcon>✓</CheckIcon>
            <InfoTitle>할랄 인증의 이점</InfoTitle>
            <InfoList>
              <InfoItem>20억 무슬림 소비자 시장 진출 기회</InfoItem>
              <InfoItem>제품 신뢰도 및 품질 관리 강화</InfoItem>
              <InfoItem>할랄 인증 로고 사용으로 마케팅 효과</InfoItem>
              <InfoItem>생산 프로세스 개선 및 품질 관리 강화</InfoItem>
              <InfoItem>상산 프로세스 개발 및 품질 보증</InfoItem>
            </InfoList>
          </InfoCard>

          <InfoCard warning>
            <WarningIcon>!</WarningIcon>
            <InfoTitle>주의사항</InfoTitle>
            <InfoList>
              <InfoItem>인증 절차에 상당한 시간이 소요될 수 있습니다 (3-6개월)</InfoItem>
              <InfoItem>생산 프로세스 변경이 필요할 수 있습니다</InfoItem>
              <InfoItem>정기적인 검사 및 감사가 요구됩니다</InfoItem>
              <InfoItem>인증 비용이 발생합니다 (규모에 따라 상이)</InfoItem>
            </InfoList>
          </InfoCard>
        </InfoGrid>

        <CTASection>
          <CTAText>할랄 인증, 지금 시작하세요</CTAText>
          <CTADescription>
            전문가와 상담을 통해 귀사의 제품에 맞는 최적의 할랄 인증 전략을 수립해 드립니다.
          </CTADescription>
          <CTAButton>할랄 인증 신청하기</CTAButton>
        </CTASection>
      </ContentSection>
    </Container>
  );
};

const Container = styled.div`
  padding: 32px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  margin-bottom: 48px;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: #111827;
  margin: 0 0 16px 0;
`;

const SubTitle = styled.p`
  font-size: 16px;
  color: #6B7280;
  line-height: 1.5;
  margin: 0;
`;

const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  height: 300px;
  background: #F3F4F6;
  border-radius: 12px;
`;

const Section = styled.div`
  margin-bottom: 32px;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 24px 0;
`;

const BulletList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  position: relative;
  padding-left: 24px;
  margin-bottom: 12px;
  color: #374151;
  
  &:before {
    content: "•";
    position: absolute;
    left: 0;
    color: #00D54B;
  }
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
`;

const InfoCard = styled.div`
  background: ${props => props.warning ? '#FEF2F2' : '#F0FDF4'};
  border-radius: 12px;
  padding: 24px;
  position: relative;
`;

const CheckIcon = styled.div`
  width: 32px;
  height: 32px;
  background: #00D54B;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  margin-bottom: 16px;
`;

const WarningIcon = styled(CheckIcon)`
  background: #EF4444;
`;

const InfoTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 16px 0;
`;

const InfoList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const InfoItem = styled.li`
  position: relative;
  padding-left: 20px;
  margin-bottom: 12px;
  color: #374151;
  font-size: 14px;
  
  &:before {
    content: "•";
    position: absolute;
    left: 0;
    color: ${props => props.warning ? '#EF4444' : '#00D54B'};
  }
`;

const CTASection = styled.div`
  text-align: center;
  padding: 48px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const CTAText = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: #111827;
  margin: 0 0 16px 0;
`;

const CTADescription = styled.p`
  font-size: 16px;
  color: #6B7280;
  margin: 0 0 32px 0;
`;

const CTAButton = styled.button`
  background: #00D54B;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #00C344;
  }
`;

const GuideSection = styled.section`
  margin-bottom: 48px;
  background: white;
  padding: 32px;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const GuideTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 32px 0;
`;

const GuideSteps = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
`;

const GuideStep = styled.div`
  display: flex;
  gap: 16px;
  align-items: flex-start;
`;

const StepNumber = styled.div`
  width: 48px;
  height: 48px;
  background: #F0FDF4;
  color: #00D54B;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 18px;
  flex-shrink: 0;
`;

const StepContent = styled.div`
  flex: 1;
`;

const StepTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 8px 0;
`;

const StepDescription = styled.p`
  font-size: 14px;
  color: #6B7280;
  margin: 0;
  line-height: 1.5;
`;

export default HalalPage;
