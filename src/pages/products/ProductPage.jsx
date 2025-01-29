import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabaseClient';

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [stats, setStats] = useState({
    totalProducts: 0,
    topSellingProduct: null,
    secondTopSellingProduct: null
  });
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
    fetchProductStats();
  }, []);

  const fetchProducts = async () => {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*');

      if (error) throw error;
      setProducts(data || []);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const fetchProductStats = async () => {
    try {
      // 전체 상품 수 조회
      const { count: totalCount } = await supabase
        .from('products')
        .select('*', { count: 'exact' });

      // 판매량 기준 상위 상품 조회
      const { data: topProducts } = await supabase
        .from('products')
        .select('*')
        .order('sales_count', { ascending: false })
        .limit(2);

      setStats({
        totalProducts: totalCount,
        topSellingProduct: topProducts[0],
        secondTopSellingProduct: topProducts[1]
      });
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

  // 만료일까지 남은 일수를 계산하는 헬퍼 함수
  const getDaysToExpiry = (expiryStr) => {
    if (!expiryStr) return Infinity; 
    const today = new Date();
    const expiry = new Date(expiryStr);
    const diff = expiry - today;
    return Math.floor(diff / (1000 * 60 * 60 * 24)); // 일 단위
  };

  // "인증 갱신 필요" 임박 일수 (예: 45일 이하면 표시)
  const RENEWAL_THRESHOLD = 45;

  // 갱신이 필요한 상품 필터링
  const renewalNeededProducts = products.filter(
    (product) => {
      const daysLeft = getDaysToExpiry(product.expiryDate);
      return daysLeft > 0 && daysLeft <= RENEWAL_THRESHOLD;
    }
  );

  // 할랄 인증 만료일 계산 함수 (기존 함수와 별도로 관리)
  const getDaysToHalalExpiry = (certExpiryStr) => {
    if (!certExpiryStr) return Infinity;
    const today = new Date();
    const expiry = new Date(certExpiryStr);
    const diff = expiry - today;
    return Math.floor(diff / (1000 * 60 * 60 * 24));
  };

  // 컴포넌트 내부에 추가할 필터링 로직
  const HALAL_RENEWAL_THRESHOLD = 45; // 할랄 인증 갱신 임박 기준일

  // 할랄 인증 만료 임박 상품
  const nearExpiryHalalProducts = products.filter(
    (product) => 
      product.halal_certified && 
      getDaysToHalalExpiry(product.halal_expiry_date) <= HALAL_RENEWAL_THRESHOLD
  );

  // 할랄 미인증 상품
  const nonHalalProducts = products.filter(
    (product) => !product.halal_certified
  );

  // 할랄 인증 신청 핸들러 추가
  const handleApplyHalal = (productId) => {
    // 실제 구현시에는 인증 신청 페이지로 이동하거나 모달을 띄우는 등의 로직 추가
    navigate(`/products/${productId}/halal-apply`);
  };

  // 갱신하기 핸들러 수정 (할랄 인증 갱신용)
  const handleRenew = (productId) => {
    navigate(`/products/${productId}/halal-renew`);
  };

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
          <StatValue>{stats.totalProducts}</StatValue>
        </StatCard>
        <StatCard>
          <StatTitle>가장 잘 팔리는 상품</StatTitle>
          <StatValue>{stats.topSellingProduct?.name || '-'}</StatValue>
          <StatDesc>{stats.topSellingProduct?.sales_count || 0}개 판매</StatDesc>
        </StatCard>
        <StatCard>
          <StatTitle>두 번째로 잘 팔리는 상품</StatTitle>
          <StatValue>{stats.secondTopSellingProduct?.name || '-'}</StatValue>
          <StatDesc>{stats.secondTopSellingProduct?.sales_count || 0}개 판매</StatDesc>
        </StatCard>
      </StatsGrid>

      {/* 새로 추가된: "인증 갱신이 필요한 상품" 표시 (표 형식) */}
      {renewalNeededProducts.length > 0 && (
        <RenewalSection>
          <SectionTitle>인증 갱신이 필요한 상품</SectionTitle>
          <RenewalTable>
            <thead>
              <tr>
                <th>상품명</th>
                <th>유통기한</th>
                <th>남은 일수</th>
                <th>갱신</th>
              </tr>
            </thead>
            <tbody>
              {renewalNeededProducts.map((item) => {
                const daysLeft = getDaysToExpiry(item.expiryDate);
                return (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.expiryDate}</td>
                    <td style={{ color: daysLeft < 10 ? 'red' : '#111827' }}>
                      {daysLeft}일
                    </td>
                    <td>
                      <RenewButton onClick={() => handleRenew(item.id)}>
                        갱신하러가기
                      </RenewButton>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </RenewalTable>
        </RenewalSection>
      )}

      {/* 할랄 인증 만료 임박 상품 테이블 */}
      {nearExpiryHalalProducts.length > 0 && (
        <HalalSection>
          <SectionTitle>할랄 인증 만료 임박 상품</SectionTitle>
          <HalalTable>
            <thead>
              <tr>
                <th>상품명</th>
                <th>원산지</th>
                <th>인증 만료일</th>
                <th>남은 일수</th>
                <th>갱신</th>
              </tr>
            </thead>
            <tbody>
              {nearExpiryHalalProducts.map((product) => {
                const daysLeft = getDaysToHalalExpiry(product.halal_expiry_date);
                return (
                  <tr key={product.id}>
                    <td>{product.name}</td>
                    <td>{product.origin}</td>
                    <td>{product.halal_expiry_date}</td>
                    <td style={{ 
                      color: daysLeft <= 15 ? '#EF4444' : 
                             daysLeft <= 30 ? '#F59E0B' : '#111827',
                      fontWeight: daysLeft <= 30 ? '600' : '400'
                    }}>
                      {daysLeft}일
                    </td>
                    <td>
                      <RenewButton onClick={() => handleRenew(product.id)}>
                        갱신하기
                      </RenewButton>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </HalalTable>
        </HalalSection>
      )}

      {/* 할랄 미인증 상품 테이블 */}
      {nonHalalProducts.length > 0 && (
        <HalalSection>
          <SectionTitle>할랄 미인증 상품</SectionTitle>
          <HalalTable>
            <thead>
              <tr>
                <th>상품명</th>
                <th>원산지</th>
                <th>상태</th>
                <th>조치</th>
              </tr>
            </thead>
            <tbody>
              {nonHalalProducts.map((product) => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.origin}</td>
                  <td>
                    <StatusBadge status={product.halal_reason}>
                      {product.halal_reason}
                    </StatusBadge>
                  </td>
                  <td>
                    <ApplyButton onClick={() => handleApplyHalal(product.id)}>
                      인증 신청
                    </ApplyButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </HalalTable>
        </HalalSection>
      )}

     

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
        {products.map((product) => (
          <ProductCard key={product.id}>
            {product.halal_certified && (
              <HalalBadge title="할랄 인증 제품">
                <HalalIcon />
              </HalalBadge>
            )}
            <ProductImage />
            <ProductInfo>
              <ProductName>{product.name}</ProductName>
              <ProductDesc>원산지: {product.origin}</ProductDesc>
              <PriceRow>
                <Price>{product.price.toLocaleString()}원</Price>
                <SalesInfo>판매량: {product.sales}개</SalesInfo>
              </PriceRow>
              <ExpiryDate>유통기한: {product.expiryDate}</ExpiryDate>
              <ButtonGroup>
                <EditButton onClick={() => handleEditProduct(product.id)}>
                  수정
                </EditButton>
                <DeleteButton>삭제</DeleteButton>
              </ButtonGroup>
            </ProductInfo>
          </ProductCard>
        ))}
      </ProductGrid>
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
  gap: 24px;
  margin-bottom: 32px;
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
  position: relative;
  border: 1px solid #e5e5e5;
  border-radius: 6px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const HalalBadge = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

const HalalIcon = () => (
  <svg 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="#00A67C"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
  </svg>
);

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

const RenewalSection = styled.section`
  margin-bottom: 32px;
  border: 1px solid #e5e5e5;
  padding: 16px;
  border-radius: 6px;
`;

const RenewalTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  thead {
    background-color: #f3f4f6;
  }

  th, td {
    padding: 12px 8px;
    border-bottom: 1px solid #e5e5e5;
    text-align: left;
  }
`;

const RenewButton = styled.button`
  padding: 6px 10px;
  background-color: #00c853;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const HalalSection = styled.section`
  margin-bottom: 32px;
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const HalalTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th {
    background: #F9FAFB;
    padding: 12px 16px;
    text-align: left;
    font-weight: 500;
    color: #374151;
    border-bottom: 1px solid #E5E7EB;
  }

  td {
    padding: 12px 16px;
    border-bottom: 1px solid #E5E7EB;
  }

  tbody tr:hover {
    background: #F9FAFB;
  }
`;

const StatusBadge = styled.span`
  display: inline-block;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  background: ${props => 
    props.status === '인증 진행중' ? '#FEF3C7' : '#FEE2E2'};
  color: ${props => 
    props.status === '인증 진행중' ? '#92400E' : '#B91C1C'};
`;

const ApplyButton = styled.button`
  padding: 6px 12px;
  background: #4F46E5;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;

  &:hover {
    background: #4338CA;
  }
`;

export default ProductPage;
