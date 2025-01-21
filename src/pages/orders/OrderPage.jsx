import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const OrderPage = () => {
  const navigate = useNavigate();

  const handleRowClick = (orderId) => {
    navigate(`/orders/${orderId}`);
  };

  return (
    <Container>
      <Header>
        <Title>주문/배송 관리</Title>
        <SearchBarWrapper>
          <SearchInput placeholder="주문번호, 구매자명, 연락처 검색" />
          <FilterButton>
            상세필터
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 10L4 6h8l-4 4z"/>
            </svg>
          </FilterButton>
        </SearchBarWrapper>
        <DownloadButton>
          주문내역 다운로드
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 12l-4-4h8l-4 4z"/>
          </svg>
        </DownloadButton>
      </Header>

      <StatsGrid>
        <StatCard>
          <StatTitle>오늘 신규주문</StatTitle>
          <StatValue>128건</StatValue>
          <StatChange positive>어제 대비 +12건</StatChange>
        </StatCard>
        <StatCard>
          <StatTitle>배송준비 필요</StatTitle>
          <StatValue orange>46건</StatValue>
          <StatDesc>48시간 이내 처리 필요</StatDesc>
        </StatCard>
        <StatCard>
          <StatTitle>배송중</StatTitle>
          <StatValue>89건</StatValue>
          <StatDesc>정상 배송 진행중</StatDesc>
        </StatCard>
        <StatCard>
          <StatTitle>취소/반품 요청</StatTitle>
          <StatValue red>12건</StatValue>
          <StatDesc>24시간 이내 처리 필요</StatDesc>
        </StatCard>
      </StatsGrid>

      <OrderSection>
        <TabList>
          <Tab active>전체</Tab>
          <Tab>신규주문</Tab>
          <Tab>배송준비중</Tab>
          <Tab>배송중</Tab>
          <Tab>배송완료</Tab>
          <Tab>취소/반품</Tab>
        </TabList>

        <OrderTable>
          <TableHeader>
            <tr>
              <th>주문번호</th>
              <th>주문일시</th>
              <th>주문상품</th>
              <th>구매자 정보</th>
              <th>결제금액</th>
              <th>결제방법</th>
              <th>주문상태</th>
              <th>처리</th>
            </tr>
          </TableHeader>
          <TableBody>
            <TableRow onClick={() => handleRowClick('ORD-001')}>
              <td>ORD-001</td>
              <td>2024-01-18 14:30</td>
              <td>
                <ProductInfo>
                  유기농 할랄 사과<br />
                  2개
                </ProductInfo>
              </td>
              <td>
                <CustomerInfo>
                  김철수<br />
                  010-1234-5678<br />
                  서울시 강남구
                </CustomerInfo>
              </td>
              <td>₩78,000</td>
              <td>카드결제</td>
              <td><StatusBadge color="#E3F2FD">결제완료</StatusBadge></td>
              <td>
                <ActionButton onClick={(e) => {
                  e.stopPropagation();
                }}>
                  배송처리
                </ActionButton>
              </td>
            </TableRow>
            {/* 추가 주문 행들... */}
          </TableBody>
        </OrderTable>
      </OrderSection>
    </Container>
  );
};

const Container = styled.div`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  margin: 0;
`;

const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
`;

const SearchInput = styled.input`
  flex: 1;
  height: 40px;
  padding: 0 16px;
  border: 1px solid #E5E7EB;
  border-radius: 8px;
  font-size: 14px;

  &::placeholder {
    color: #9CA3AF;
  }
`;

const FilterButton = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 8px 16px;
  border: 1px solid #E5E7EB;
  border-radius: 8px;
  background: white;
  color: #374151;
  cursor: pointer;
`;

const DownloadButton = styled(FilterButton)`
  color: #00D54B;
  border-color: #00D54B;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
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
  color: ${props => {
    if (props.orange) return '#F59E0B';
    if (props.red) return '#EF4444';
    return '#111827';
  }};
  margin-bottom: 4px;
`;

const StatChange = styled.div`
  font-size: 14px;
  color: ${props => props.positive ? '#10B981' : '#EF4444'};
`;

const StatDesc = styled.div`
  font-size: 14px;
  color: #6B7280;
`;

const OrderSection = styled.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const TabList = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
  border-bottom: 1px solid #E5E7EB;
  padding-bottom: 8px;
`;

const Tab = styled.button`
  padding: 8px 16px;
  border: none;
  background: none;
  font-size: 14px;
  color: ${props => props.active ? '#111827' : '#6B7280'};
  font-weight: ${props => props.active ? '600' : '400'};
  cursor: pointer;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -9px;
    left: 0;
    right: 0;
    height: 2px;
    background: ${props => props.active ? '#00D54B' : 'transparent'};
  }
`;

const OrderTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.thead`
  th {
    text-align: left;
    padding: 12px 16px;
    font-size: 14px;
    font-weight: 500;
    color: #6B7280;
    border-bottom: 1px solid #E5E7EB;
  }
`;

const TableBody = styled.tbody`
  td {
    padding: 16px;
    font-size: 14px;
    border-bottom: 1px solid #E5E7EB;
  }
`;

const TableRow = styled.tr`
  cursor: pointer;
  &:hover {
    background: #F9FAFB;
  }
`;

const ProductInfo = styled.div`
  line-height: 1.5;
`;

const CustomerInfo = styled.div`
  line-height: 1.5;
`;

const StatusBadge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 14px;
  font-weight: 500;
  background: ${props => props.color || '#E5E7EB'};
  color: ${props => {
    switch(props.color) {
      case '#E3F2FD': return '#2563EB';
      case '#FEF3C7': return '#D97706';
      case '#FEE2E2': return '#DC2626';
      default: return '#374151';
    }
  }};
`;

const ActionButton = styled.button`
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  background: #111827;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background: #1F2937;
  }
`;

export default OrderPage;
