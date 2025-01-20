import React, { useState } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import mainTitle from '../../assets/images/des.png';
import character from '../../assets/images/characters-3d.png';
const AboutPage = () => {
  const navigate = useNavigate();
  const [currentSection, setCurrentSection] = useState(0);

  return (
    <ReactFullpage
      scrollingSpeed={1000}
      onLeave={(origin, destination) => {
        setCurrentSection(destination.index);
      }}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <Section className="section">
              <FirstPage>
                <ContentWrapper>
                  <MainTitleImage 
                    src={mainTitle} 
                    alt="Trust in Every Bite" 
                    isVisible={currentSection === 0}
                  />
                  <ButtonGroup isVisible={currentSection === 0}>
                    <PrimaryButton onClick={() => navigate('/login')}>
                      함께하기
                    </PrimaryButton>
                    <SecondaryButton onClick={() => fullpageApi.moveSectionDown()}>
                      더 알아보기
                    </SecondaryButton>
                  </ButtonGroup>
                </ContentWrapper>
                <ImageWrapper isVisible={currentSection === 0}>
                  <CharacterImage src={character} alt="3D Characters" />
                </ImageWrapper>
              </FirstPage>
            </Section>

            <Section className="section">
              <Section2Wrapper>
                <ContentGrid>
                  <ServiceImage>
                    <ImageOverlay />
                    <ImageContent isVisible={currentSection === 1}>
                      <ImageTitle>Professional Service</ImageTitle>
                      <ImageDescription>
                        20년 이상의 경험을 바탕으로 고객님의 공간을 
                        새롭게 디자인합니다. 전문성과 신뢰성을 바탕으로 
                        최고의 결과물을 제공하겠습니다.
                      </ImageDescription>
                      <StatsGrid>
                        <StatItem>
                          <StatNumber>20+</StatNumber>
                          <StatLabel>Years Experience</StatLabel>
                        </StatItem>
                        <StatItem>
                          <StatNumber>1,200+</StatNumber>
                          <StatLabel>Projects Done</StatLabel>
                        </StatItem>
                        <StatItem>
                          <StatNumber>98%</StatNumber>
                          <StatLabel>Client Satisfaction</StatLabel>
                        </StatItem>
                      </StatsGrid>
                    </ImageContent>
                  </ServiceImage>
                  <ServiceContent>
                    <ServiceTitle isVisible={currentSection === 1}>제공 서비스</ServiceTitle>
                    <ServiceList isVisible={currentSection === 1}>
                      <li>전체 리모델링</li>
                      <li>주방 리모델링</li>
                      <li>화장실 리모델링</li>
                      <li>주택 인테리어</li>
                      <li>바닥재 시공</li>
                    </ServiceList>
                    <StoreButton
                      onClick={() => navigate('/store')}
                      style={{ opacity: currentSection === 1 ? 1 : 0, transform: `translateY(${currentSection === 1 ? '0' : '20px'})`, transition: 'all 0.8s ease-out', transitionDelay: '0.6s' }}
                    >
                      스토어 가기
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </StoreButton>
                  </ServiceContent>
                </ContentGrid>
                <IconGrid>
                  <IconItem isVisible={currentSection === 1} delay={0.2}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>다양한<br />시공 경험</span>
                  </IconItem>
                  <IconItem isVisible={currentSection === 1} delay={0.3}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>각 분야 전문가<br />팀 구성</span>
                  </IconItem>
                  <IconItem isVisible={currentSection === 1} delay={0.4}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>고품질<br />마감 실현</span>
                  </IconItem>
                  <IconItem isVisible={currentSection === 1} delay={0.5}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>순차적 유지관리와<br />합리적인 비용</span>
                  </IconItem>
                </IconGrid>
              </Section2Wrapper>
            </Section>

            <Section className="section">
              <Section3Wrapper>
                <Section3Header>
                  <Section3Title isVisible={currentSection === 2}>
                    신뢰할 수 있는 할랄 식품 플랫폼
                  </Section3Title>
                  <Section3Subtitle isVisible={currentSection === 2}>
                    엄격한 할랄 인증과 품질 관리를 통해 안전하고 신뢰할 수 있는 
                    할랄 식품을 제공합니다.
                  </Section3Subtitle>
                </Section3Header>
                
                <StatsCardGrid>
                  <StatsCard isVisible={currentSection === 2} delay={0.2}>
                    <StatsIcon>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </StatsIcon>
                    <StatsNumber>100%</StatsNumber>
                    <StatsLabel>할랄 인증</StatsLabel>
                    <StatsDescription>
                      모든 제품 할랄 인증 보장
                    </StatsDescription>
                  </StatsCard>
                  
                  <StatsCard isVisible={currentSection === 2} delay={0.3}>
                    <StatsIcon>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </StatsIcon>
                    <StatsNumber>300+</StatsNumber>
                    <StatsLabel>검증된 제품</StatsLabel>
                    <StatsDescription>
                      다양한 할랄 식품 제공
                    </StatsDescription>
                  </StatsCard>
                  
                  <StatsCard isVisible={currentSection === 2} delay={0.4}>
                    <StatsIcon>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                          d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                      </svg>
                    </StatsIcon>
                    <StatsNumber>98%</StatsNumber>
                    <StatsLabel>고객 만족도</StatsLabel>
                    <StatsDescription>
                      신뢰할 수 있는 플랫폼
                    </StatsDescription>
                  </StatsCard>
                </StatsCardGrid>

                <VisionSection isVisible={currentSection === 2}>
                  <VisionGrid>
                    <VisionItem>
                      <VisionIcon>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                      </VisionIcon>
                      <VisionLabel>엄격한 인증</VisionLabel>
                      <VisionText>철저한 할랄 인증 관리</VisionText>
                    </VisionItem>
                    <VisionItem>
                      <VisionIcon>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                        </svg>
                      </VisionIcon>
                      <VisionLabel>품질 보장</VisionLabel>
                      <VisionText>최상의 할랄 식품 품질</VisionText>
                    </VisionItem>
                    <VisionItem>
                      <VisionIcon>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </VisionIcon>
                      <VisionLabel>신뢰 구축</VisionLabel>
                      <VisionText>무슬림 커뮤니티와 함께</VisionText>
                    </VisionItem>
                  </VisionGrid>
                </VisionSection>
              </Section3Wrapper>
            </Section>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};

const Section = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: relative;
  
`;

const FirstPage = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: #00D54B;
  position: relative;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  padding: 140px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 32px;
`;

const MainTitleImage = styled.img`
  width: 80%;
  max-width: 450px;
  height: auto;
  margin: 24px 0 40px;
  opacity: ${props => props.isVisible ? 1 : 0};
  transform: translateY(${props => props.isVisible ? 0 : '20px'});
  transition: all 1s ease-out;
  transition-delay: 0.2s;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
  margin-top: auto;
  opacity: ${props => props.isVisible ? 1 : 0};
  transform: translateY(${props => props.isVisible ? 0 : '20px'});
  transition: all 1s ease-out;
  transition-delay: 0.4s;
`;

const Button = styled.button`
  padding: 18px 48px;
  border-radius: 12px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  width: 200px;
  text-align: center;

  &:hover {
    transform: translateY(-2px);
  }
`;

const PrimaryButton = styled(Button)`
  background: white;
  color: #00D54B;
  border: none;

  &:hover {
    background: #f8f9fa;
  }
`;

const SecondaryButton = styled(Button)`
  background: transparent;
  color: white;
  border: 2px solid white;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  position: relative;
  opacity: ${props => props.isVisible ? 1 : 0};
  transform: translateX(${props => props.isVisible ? 0 : '50px'});
  transition: all 1s ease-out;
  transition-delay: 0.6s;
`;

const CharacterImage = styled.img`
  width: 95%;
  height: 120%;
  object-fit: contain;
  object-position: bottom right;
  transform: scale(1.2);
  transform-origin: bottom right;
  margin-bottom: -5%;
  position: relative;
  bottom: -10%;
`;

const Section2Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: white;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 70vh;
`;

const ServiceImage = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 213, 75, 0.1);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.05)
  );
`;

const ImageContent = styled.div`
  position: relative;
  z-index: 2;
  color: white;
  text-align: center;
  padding: 0 40px;
  opacity: ${props => props.isVisible ? 1 : 0};
  transform: translateY(${props => props.isVisible ? 0 : '20px'});
  transition: all 0.8s ease-out;
`;

const ImageTitle = styled.h2`
  font-size: 56px;
  font-weight: 700;
  margin-bottom: 28px;
  background: linear-gradient(135deg, #00D54B 0%, #00A83B 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ImageDescription = styled.p`
  font-size: 20px;
  line-height: 1.6;
  color: #1a1a1a;
  max-width: 500px;
  margin: 0 auto;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin-top: 56px;
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: 42px;
  font-weight: 700;
  color: #00D54B;
  margin-bottom: 12px;
`;

const StatLabel = styled.div`
  font-size: 16px;
  color: #1a1a1a;
  font-weight: 500;
`;

const ServiceContent = styled.div`
  padding: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ServiceTitle = styled.h2`
  font-size: 36px;
  font-weight: 600;
  margin-bottom: 32px;
  color: #1a1a1a;
  opacity: ${props => props.isVisible ? 1 : 0};
  transform: translateY(${props => props.isVisible ? 0 : '20px'});
  transition: all 0.8s ease-out;
`;

const ServiceList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 18px;
  line-height: 2.5;
  color: #1a1a1a;
  opacity: ${props => props.isVisible ? 1 : 0};
  transform: translateY(${props => props.isVisible ? 0 : '20px'});
  transition: all 0.8s ease-out;
  transition-delay: 0.2s;
`;

const StoreButton = styled.button`
  background: #00D54B;
  color: white;
  border: none;
  padding: 16px 32px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 32px;
  width: fit-content;

  &:hover {
    background: #00A83B;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 213, 75, 0.2);
  }

  svg {
    width: 20px;
    height: 20px;
    margin-left: 8px;
    vertical-align: middle;
  }
`;

const IconGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 60px 120px;
  background: white;
  border-top: 1px solid #eee;
`;

const IconItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #1a1a1a;
  gap: 16px;
  opacity: ${props => props.isVisible ? 1 : 0};
  transform: translateY(${props => props.isVisible ? 0 : '20px'});
  transition: all 0.8s ease-out;
  transition-delay: ${props => props.delay}s;

  svg {
    width: 48px;
    height: 48px;
    stroke: #00D54B;
    stroke-width: 1.5;
  }

  span {
    font-size: 18px;
    line-height: 1.5;
    font-weight: 500;
  }
`;

const Section3Wrapper = styled.div`
  height: 100vh;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 120px;
`;

const Section3Header = styled.div`
  text-align: center;
  margin-bottom: 32px;
  max-width: 800px;
`;

const Section3Title = styled.h2`
  font-size: 40px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 16px;
  opacity: ${props => props.isVisible ? 1 : 0};
  transform: translateY(${props => props.isVisible ? 0 : '20px'});
  transition: all 0.8s ease-out;
`;

const Section3Subtitle = styled.p`
  font-size: 18px;
  color: #6B7280;
  line-height: 1.5;
  margin-bottom: 32px;
  opacity: ${props => props.isVisible ? 1 : 0};
  transform: translateY(${props => props.isVisible ? 0 : '20px'});
  transition: all 0.8s ease-out;
  transition-delay: 0.1s;
`;

const VisionSection = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-top: 40px;
`;

const VisionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
`;

const VisionItem = styled.div`
  background: #f8f9fd;
  padding: 20px;
  border-radius: 16px;
  text-align: center;
  border: 1px solid #eee;
`;

const VisionIcon = styled.div`
  width: 48px;
  height: 48px;
  margin: 0 auto 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: 32px;
    height: 32px;
    stroke: #00D54B;
  }
`;

const VisionLabel = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 8px;
`;

const VisionText = styled.div`
  font-size: 14px;
  color: #6B7280;
`;

const StatsCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin-top: 56px;
`;

const StatsCard = styled.div`
  text-align: center;
  opacity: ${props => props.isVisible ? 1 : 0};
  transform: translateY(${props => props.isVisible ? 0 : '20px'});
  transition: all 0.8s ease-out;
  transition-delay: ${props => props.delay}s;
`;

const StatsIcon = styled.div`
  width: 56px;
  height: 56px;
  background: rgba(0, 213, 75, 0.1);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;

  svg {
    width: 32px;
    height: 32px;
    stroke: #00D54B;
  }
`;

const StatsNumber = styled.div`
  font-size: 42px;
  font-weight: 700;
  color: #00D54B;
  margin-bottom: 12px;
`;

const StatsLabel = styled.div`
  font-size: 16px;
  color: #1a1a1a;
  font-weight: 500;
`;

const StatsDescription = styled.div`
  font-size: 18px;
  color: #6B7280;
  line-height: 1.5;
`;

export default AboutPage;
