import React from 'react';
import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';

const OrderDetailPage = () => {
  const { orderId } = useParams();
  const navigate = useNavigate();

  return (
    <Container>
      <Header>
        <TitleSection>
          <BackArrow onClick={() => navigate(-1)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
            </svg>
            <Title>주문 상세</Title>
          </BackArrow>
        </TitleSection>
        <HeaderRight>
          <StatusSelect defaultValue="결제완료">
            <option value="결제완료">결제완료</option>
            <option value="배송준비중">배송준비중</option>
            <option value="배송중">배송중</option>  
            <option value="배송완료">배송완료</option>
          </StatusSelect>
          <UpdateButton>배송처리</UpdateButton>
        </HeaderRight>
      </Header>

      <OrderInfo>
        <OrderBasicInfo>
          <InfoRow>
            <Label>주문번호</Label>
            <Value>{orderId}</Value>
          </InfoRow>
          <InfoRow>
            <Label>주문일시</Label>
            <Value>2024-01-18 14:30</Value>
          </InfoRow>
        </OrderBasicInfo>

        <Section>
          <SectionTitle>주문 상품 정보</SectionTitle>
          <ProductCard>
            <ProductImage>
              <img src="/placeholder.png" alt="상품 이미지" />
            </ProductImage>
            <ProductInfo>
              <ProductName>프리미엄 티셔츠</ProductName>
              <ProductOption>블랙/L</ProductOption>
              <Quantity>2개</Quantity>
              <Price>₩39,000</Price>
            </ProductInfo>
          </ProductCard>

          <PriceTable>
            <PriceRow>
              <PriceLabel>상품금액</PriceLabel>
              <PriceValue>₩78,000</PriceValue>
            </PriceRow>
            <PriceRow>
              <PriceLabel>배송비</PriceLabel>
              <PriceValue>₩3,000</PriceValue>
            </PriceRow>
            <TotalRow>
              <TotalLabel>총 결제금액</TotalLabel>
              <TotalValue>₩78,000</TotalValue>
            </TotalRow>
          </PriceTable>
        </Section>

        <TwoColumnLayout>
          <Section>
            <SectionTitle>구매자 정보</SectionTitle>
            <InfoTable>
              <InfoRow>
                <Label>이름</Label>
                <Value>김철수</Value>
              </InfoRow>
              <InfoRow>
                <Label>연락처</Label>
                <Value>010-1234-5678</Value>
              </InfoRow>
              <InfoRow>
                <Label>배송지</Label>
                <Value>서울특별시 강남구 테헤란로 123 아파트 456호</Value>
              </InfoRow>
            </InfoTable>
          </Section>

          <Section>
            <SectionTitle>결제 정보</SectionTitle>
            <InfoTable>
              <InfoRow>
                <Label>결제 방법</Label>
                <Value>카드결제</Value>
              </InfoRow>
              <InfoRow>
                <Label>카드 정보</Label>
                <Value>**** **** **** 1234</Value>
              </InfoRow>
            </InfoTable>
          </Section>
        </TwoColumnLayout>
      </OrderInfo>
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
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: #111827;
  margin: 0;
`;

const HeaderRight = styled.div`
  display: flex;
  gap: 12px;
`;

const StatusSelect = styled.select`
  padding: 8px 16px;
  border: 1px solid #E5E7EB;
  border-radius: 8px;
  font-size: 14px;
`;

const UpdateButton = styled.button`
  padding: 8px 16px;
  background: #111827;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
`;

const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Section = styled.section`
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 20px 0;
`;

const ProductCard = styled.div`
  display: flex;
  gap: 20px;
  padding-bottom: 24px;
  border-bottom: 1px solid #E5E7EB;
`;

const ProductImage = styled.div`
  width: 120px;
  height: 120px;
  background: #F3F4F6;
  border-radius: 8px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProductInfo = styled.div`
  flex: 1;
`;

const ProductName = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 8px;
`;

const ProductOption = styled.div`
  font-size: 14px;
  color: #6B7280;
  margin-bottom: 4px;
`;

const Quantity = styled.div`
  font-size: 14px;
  color: #6B7280;
`;

const Price = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin-top: 8px;
`;

const PriceTable = styled.div`
  margin-top: 24px;
`;

const PriceRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`;

const TotalRow = styled(PriceRow)`
  border-top: 1px solid #E5E7EB;
  padding-top: 16px;
  margin-top: 16px;
`;

const PriceLabel = styled.span`
  color: #6B7280;
  font-size: 14px;
`;

const PriceValue = styled.span`
  font-size: 14px;
`;

const TotalLabel = styled.span`
  font-weight: 600;
`;

const TotalValue = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: #111827;
`;

const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
`;

const InfoTable = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const InfoRow = styled.div`
  display: flex;
  gap: 16px;
`;

const Label = styled.span`
  width: 80px;
  color: #6B7280;
  font-size: 14px;
`;

const Value = styled.span`
  flex: 1;
  font-size: 14px;
`;

const OrderBasicInfo = styled(Section)`
  display: flex;
  gap: 32px;
`;

const TitleSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const BackArrow = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  color: #6B7280;
  cursor: pointer;
  padding: 4px;
  
  &:hover {
    color: #111827;
  }
`;

export default OrderDetailPage;
