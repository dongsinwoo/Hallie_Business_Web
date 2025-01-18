import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const ProductPage = () => {
  const navigate = useNavigate();

  const handleAddProduct = () => {
    navigate('/products/new');
  };

  const handleEditProduct = (productId) => {
    navigate(`/products/${productId}/edit`);
  };

  return (
    <Container>
      <Header>
        <Title>상품 관리</Title>
        <SearchBarWrapper>
          <SearchInput placeholder="상품명, 상품코드 검색" />
          <FilterButton>
            상세필터
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 10L4 6h8l-4 4z"/>
            </svg>
          </FilterButton>
        </SearchBarWrapper>
        <AddButton onClick={handleAddProduct}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"/>
          </svg>
          새 상품 추가
        </AddButton>
      </Header>

      <StatsGrid>
        <StatCard>
          <StatTitle>총 상품 수</StatTitle>
          <StatValue>4</StatValue>
        </StatCard>
        <StatCard>
          <StatTitle>가장 잘 팔리는 상품</StatTitle>
          <StatValue>유기농 당근</StatValue>
          <StatDesc>200개 판매</StatDesc>
        </StatCard>
        <StatCard>
          <StatTitle>가장 잘 팔리는 상품</StatTitle>
          <StatValue>신선 고등어</StatValue>
          <StatDesc>30개 판매</StatDesc>
        </StatCard>
      </StatsGrid>

      <RankingSection>
        <SectionTitle>상품 판매 랭킹</SectionTitle>
        <RankingTable>
          <thead>
            <tr>
              <th>순위</th>
              <th>상품정보</th>
              <th>판매가</th>
              <th>판매수</th>
              <th>매출액</th>
              <th>재고</th>
            </tr>
          </thead>
          <tbody>
            <RankingRow>
              <RankCell>
                <RankBadge rank={1}>1</RankBadge>
              </RankCell>
              <ProductCell>
                <ProductImage small />
                <ProductInfo small>
                  <ProductName small>유기농 당근</ProductName>
                  <ProductDesc small>신선한 유기농 당근</ProductDesc>
                </ProductInfo>
              </ProductCell>
              <td>₩3,900</td>
              <td>
                <SalesCount>200개</SalesCount>
                <SalesTrend positive>▲ 15%</SalesTrend>
              </td>
              <td>₩780,000</td>
              <td>50개</td>
            </RankingRow>

            <RankingRow>
              <RankCell>
                <RankBadge rank={2}>2</RankBadge>
              </RankCell>
              <ProductCell>
                <ProductImage small />
                <ProductInfo small>
                  <ProductName small>신선 고등어</ProductName>
                  <ProductDesc small>제철 고등어</ProductDesc>
                </ProductInfo>
              </ProductCell>
              <td>₩8,900</td>
              <td>
                <SalesCount>180개</SalesCount>
                <SalesTrend>▼ 5%</SalesTrend>
              </td>
              <td>₩1,602,000</td>
              <td>30개</td>
            </RankingRow>

            {/* 추가 행들... */}
          </tbody>
        </RankingTable>
      </RankingSection>

      <SearchInput 
        placeholder="상품 검색..." 
        style={{ marginBottom: '24px' }}
      />

      <ProductGrid>
        <ProductCard>
          <ProductImage />
          <ProductInfo>
            <ProductName>유기농 사과</ProductName>
            <ProductDesc>신선한 유기농 사과</ProductDesc>
            <PriceRow>
              <Price>5,900원</Price>
              <SalesInfo>판매량: 150개</SalesInfo>
            </PriceRow>
            <ExpiryDate>유통기한: 2024-01-31</ExpiryDate>
            <Origin>원산지: 국내산</Origin>
            <Stock>판매량: 150개</Stock>
            <ButtonGroup>
              <EditButton onClick={() => handleEditProduct('product-1')}>
                수정
              </EditButton>
              <DeleteButton>삭제</DeleteButton>
            </ButtonGroup>
          </ProductInfo>
        </ProductCard>
        {/* 추가 상품 카드들... */}
      </ProductGrid>
    </Container>
  );
};

const Container = styled.div`
  padding: 24px;
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
  color: #111827;
`;

const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 10px 16px;
  border: 1px solid #E5E7EB;
  border-radius: 8px;
  font-size: 14px;
  
  &:focus {
    outline: none;
    border-color: #00D54B;
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
  font-size: 14px;
  cursor: pointer;
  
  &:hover {
    background: #F9FAFB;
  }
`;

const AddButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: #00D54B;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
  
  &:hover {
    background: #00C344;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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
  margin-bottom: 4px;
`;

const StatDesc = styled.div`
  font-size: 14px;
  color: #6B7280;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
  margin-top: 24px;
`;

const ProductCard = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const ProductImage = styled.div`
  width: ${props => props.small ? '40px' : '100%'};
  height: ${props => props.small ? '40px' : '200px'};
  background: #F3F4F6;
  border-radius: ${props => props.small ? '6px' : '0'};
  flex-shrink: 0;
`;

const ProductInfo = styled.div`
  padding: ${props => props.small ? '0' : '16px'};
  display: flex;
  flex-direction: column;
  gap: ${props => props.small ? '2px' : '8px'};
`;

const ProductName = styled.div`
  font-size: ${props => props.small ? '14px' : '16px'};
  font-weight: 500;
  color: #111827;
  line-height: 1.2;
`;

const ProductDesc = styled.div`
  font-size: ${props => props.small ? '12px' : '14px'};
  color: #6B7280;
  line-height: 1.2;
`;

const PriceRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
`;

const Price = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #00D54B;
`;

const SalesInfo = styled.div`
  font-size: 14px;
  color: #6B7280;
`;

const ExpiryDate = styled.div`
  font-size: 14px;
  color: #6B7280;
  margin-top: 4px;
`;

const Origin = styled.div`
  font-size: 14px;
  color: #6B7280;
  margin-top: 4px;
`;

const Stock = styled.div`
  font-size: 14px;
  color: #6B7280;
  margin-top: 4px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 16px;
`;

const EditButton = styled.button`
  flex: 1;
  padding: 8px;
  border: 1px solid #00D54B;
  border-radius: 6px;
  background: white;
  color: #00D54B;
  font-size: 14px;
  cursor: pointer;
  
  &:hover {
    background: #F0FDF4;
  }
`;

const DeleteButton = styled.button`
  flex: 1;
  padding: 8px;
  border: 1px solid #EF4444;
  border-radius: 6px;
  background: white;
  color: #EF4444;
  font-size: 14px;
  cursor: pointer;
  
  &:hover {
    background: #FEF2F2;
  }
`;

const RankingSection = styled.div`
  margin: 32px 0;
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 24px 0;
`;

const RankingTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th {
    text-align: left;
    padding: 12px 16px;
    font-size: 14px;
    font-weight: 500;
    color: #6B7280;
    border-bottom: 1px solid #E5E7EB;
  }

  td {
    padding: 16px;
    font-size: 14px;
    color: #111827;
  }
`;

const RankingRow = styled.tr`
  border-bottom: 1px solid #E5E7EB;
  
  &:hover {
    background: #F9FAFB;
  }
`;

const RankCell = styled.td`
  width: 80px;
`;

const RankBadge = styled.div`
  width: 28px;
  height: 28px;
  background: ${props => {
    switch(props.rank) {
      case 1: return '#FFD700';
      case 2: return '#C0C0C0';
      case 3: return '#CD7F32';
      default: return '#E5E7EB';
    }
  }};
  color: ${props => props.rank <= 3 ? 'white' : '#6B7280'};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 14px;
`;

const ProductCell = styled.td`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 16px;
`;

const SalesCount = styled.div`
  font-weight: 500;
`;

const SalesTrend = styled.div`
  font-size: 12px;
  color: ${props => props.positive ? '#10B981' : '#EF4444'};
  margin-top: 4px;
`;

export default ProductPage;
