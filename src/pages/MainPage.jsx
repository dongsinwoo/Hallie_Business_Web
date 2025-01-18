import React from 'react';
import styled from 'styled-components';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// 공통 레이아웃
export const Container = styled.div`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
`;

// 공통 카드 스타일
export const Card = styled.div`
  background: white;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

// 공통 제목 스타일
export const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: #111827;
  margin: 0;
`;

export const SectionTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 24px 0;
`;

export const SubTitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  color: #374151;
  margin: 0 0 16px 0;
`;

// 공통 그리드 레이아웃
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${props => props.minWidth || '240px'}, 1fr));
  gap: 24px;
  margin-bottom: ${props => props.marginBottom || '0'}px;
`;

const MainPage = () => {
  const monthlyData = [
    { name: '8월', 매출: 8500000, 주문수: 120 },
    { name: '9월', 매출: 9200000, 주문수: 145 },
    { name: '10월', 매출: 10800000, 주문수: 168 },
    { name: '11월', 매출: 11500000, 주문수: 182 },
    { name: '12월', 매출: 12000000, 주문수: 195 },
    { name: '1월', 매출: 12580000, 주문수: 210 }
  ];

  return (
    <Container>
      <Header>
        <Title>대시보드</Title>
        <DateInfo>2024년 1월 18일 기준</DateInfo>
      </Header>

      <Grid minWidth="240px" marginBottom={32}>
        <StatCard>
          <StatTitle>이번 달 매출</StatTitle>
          <StatValue>₩12,580,000</StatValue>
          <StatTrend positive>
            <TrendIcon>▲</TrendIcon>
            전월 대비 15% 증가
          </StatTrend>
        </StatCard>

        <StatCard>
          <StatTitle>이번 달 주문 수</StatTitle>
          <StatValue>210건</StatValue>
          <StatTrend positive>
            <TrendIcon>▲</TrendIcon>
            전월 대비 12% 증가
          </StatTrend>
        </StatCard>

        <StatCard>
          <StatTitle>누적 주문 수</StatTitle>
          <StatValue>1,240건</StatValue>
          <StatTrend positive>
            <TrendIcon>▲</TrendIcon>
            꾸준히 증가 중
          </StatTrend>
        </StatCard>

        <StatCard>
          <StatTitle>신규 고객</StatTitle>
          <StatValue>156명</StatValue>
          <StatTrend negative>
            <TrendIcon>▼</TrendIcon>
            전월 대비 3% 감소
          </StatTrend>
        </StatCard>
      </Grid>

      <GridContainer>
        <ChartSection>
          <SectionTitle>월별 매출 추이</SectionTitle>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis 
                yAxisId="left"
                tickFormatter={(value) => `${(value / 1000000).toFixed(1)}M`}
              />
              <YAxis 
                yAxisId="right" 
                orientation="right"
                dataKey="주문수"
              />
              <Tooltip 
                formatter={(value, name) => {
                  if (name === '매출') {
                    return [`₩${value.toLocaleString()}`, name];
                  }
                  return [value, name];
                }}
              />
              <Legend />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="매출"
                stroke="#00D54B"
                strokeWidth={2}
                dot={{ fill: '#00D54B' }}
                activeDot={{ r: 8 }}
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="주문수"
                stroke="#6366F1"
                strokeWidth={2}
                dot={{ fill: '#6366F1' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartSection>

        <TopProductsSection>
          <SectionTitle>인기 상품 TOP 5</SectionTitle>
          <ProductList>
            {[
              { name: '유기농 당근', sales: '200개', revenue: '₩780,000' },
              { name: '신선 고등어', sales: '180개', revenue: '₩1,602,000' },
              { name: '유기농 사과', sales: '150개', revenue: '₩885,000' },
              { name: '프리미엄 소고기', sales: '120개', revenue: '₩3,580,000' },
              { name: '친환경 양배추', sales: '100개', revenue: '₩290,000' }
            ].map((product, index) => (
              <ProductItem key={index}>
                <ProductRank rank={index + 1}>{index + 1}</ProductRank>
                <ProductInfo>
                  <ProductName>{product.name}</ProductName>
                  <ProductStats>
                    판매량: {product.sales} · 매출: {product.revenue}
                  </ProductStats>
                </ProductInfo>
              </ProductItem>
            ))}
          </ProductList>
        </TopProductsSection>

        <CustomerSection>
          <SectionTitle>고객 분석</SectionTitle>
          <CustomerStats>
            <AgeDistribution>
              <SubTitle>연령대별 분포</SubTitle>
              <StatsList>
                <StatItem>
                  <StatLabel>20대</StatLabel>
                  <StatBar value={25} />
                  <StatValue>25%</StatValue>
                </StatItem>
                <StatItem>
                  <StatLabel>30대</StatLabel>
                  <StatBar value={35} />
                  <StatValue>35%</StatValue>
                </StatItem>
                <StatItem>
                  <StatLabel>40대</StatLabel>
                  <StatBar value={20} />
                  <StatValue>20%</StatValue>
                </StatItem>
                <StatItem>
                  <StatLabel>50대+</StatLabel>
                  <StatBar value={20} />
                  <StatValue>20%</StatValue>
                </StatItem>
              </StatsList>
            </AgeDistribution>
          </CustomerStats>
        </CustomerSection>

        <TotalRevenueSection>
          <SectionTitle>총 매출 현황</SectionTitle>
          <RevenueGrid>
            <RevenueCard>
              <RevenueLabel>연간 총매출</RevenueLabel>
              <RevenueValue>₩156,480,000</RevenueValue>
              <RevenuePeriod>2023년 총계</RevenuePeriod>
            </RevenueCard>

            <RevenueCard>
              <RevenueLabel>분기 총매출</RevenueLabel>
              <RevenueValue>₩42,360,000</RevenueValue>
              <RevenuePeriod>2024년 1분기</RevenuePeriod>
            </RevenueCard>

            <RevenueCard>
              <RevenueLabel>월 평균 매출</RevenueLabel>
              <RevenueValue>₩13,040,000</RevenueValue>
              <RevenuePeriod>최근 12개월 기준</RevenuePeriod>
            </RevenueCard>

            <RevenueCard>
              <RevenueLabel>전년 대비 성장률</RevenueLabel>
              <GrowthValue positive>+23.5%</GrowthValue>
              <RevenuePeriod>전년 동기 대비</RevenuePeriod>
            </RevenueCard>
          </RevenueGrid>
        </TotalRevenueSection>
      </GridContainer>
    </Container>
  );
};

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const DateInfo = styled.div`
  color: #6B7280;
  font-size: 14px;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
  margin-bottom: 32px;
`;

const StatCard = styled.div`
  background: white;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const StatTitle = styled.div`
  font-size: 14px;
  color: #6B7280;
  margin-bottom: 8px;
`;

const StatValue = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: #111827;
  margin-bottom: 8px;
`;

const StatTrend = styled.div`
  font-size: 14px;
  color: ${props => props.positive ? '#10B981' : '#EF4444'};
  display: flex;
  align-items: center;
  gap: 4px;
`;

const TrendIcon = styled.span`
  font-size: 12px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
`;

const ChartSection = styled.div`
  background: white;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  grid-column: span 2;
`;

const TopProductsSection = styled.div`
  background: white;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const CustomerSection = styled.div`
  background: white;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const ChartPlaceholder = styled.div`
  width: 100%;
  height: 300px;
  background: #F3F4F6;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6B7280;
`;

const ProductList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ProductItem = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const ProductRank = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 600;
  
  ${props => {
    switch(props.rank) {
      case 1:
        return `
          background: #FFD700;
          color: white;
        `;
      case 2:
        return `
          background: #C0C0C0;
          color: white;
        `;
      case 3:
        return `
          background: #CD7F32;
          color: white;
        `;
      default:
        return `
          background: #F3F4F6;
          color: #6B7280;
        `;
    }
  }}
`;

const ProductInfo = styled.div`
  flex: 1;
`;

const ProductName = styled.div`
  font-weight: 500;
  color: #111827;
  margin-bottom: 4px;
`;

const ProductStats = styled.div`
  font-size: 14px;
  color: #6B7280;
`;

const CustomerStats = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const AgeDistribution = styled.div``;

const StatsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const StatLabel = styled.div`
  width: 48px;
  font-size: 14px;
  color: #6B7280;
`;

const StatBar = styled.div`
  flex: 1;
  height: 8px;
  background: #E5E7EB;
  border-radius: 4px;
  overflow: hidden;
  
  &::after {
    content: '';
    display: block;
    width: ${props => props.value}%;
    height: 100%;
    background: #00D54B;
  }
`;

const TotalRevenueSection = styled(Card)`
  grid-column: span 2;
`;

const RevenueGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
`;

const RevenueCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
  background: ${props => props.highlight ? '#F0FDF4' : '#F9FAFB'};
  border-radius: 8px;
`;

const RevenueLabel = styled.div`
  font-size: 14px;
  color: #6B7280;
  margin-bottom: 8px;
`;

const RevenueValue = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: #111827;
  margin-bottom: 4px;
`;

const GrowthValue = styled(RevenueValue)`
  color: ${props => props.positive ? '#10B981' : '#EF4444'};
`;

const RevenuePeriod = styled.div`
  font-size: 12px;
  color: #6B7280;
`;

export default MainPage;
