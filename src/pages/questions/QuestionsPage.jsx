import React, { useState } from 'react';
import styled from 'styled-components';

function QuestionsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [questions] = useState([
    {
      id: 1,
      customerName: '김철수',
      productName: '유기농 사과',
      content: '유통기한이 어떻게 되나요?',
      status: 'pending',
      date: '2023-06-01'
    },
    {
      id: 2,
      customerName: '이영희',
      productName: '프리미엄 소고기',
      content: '원산지가 어디인가요?',
      status: 'answered',
      date: '2023-06-02'
    },
    {
      id: 3,
      customerName: '박지성',
      productName: '글루텐 프리 빵',
      content: '알레르기 정보를 알고 싶어요.',
      status: 'pending',
      date: '2023-06-03'
    },
    {
      id: 4,
      customerName: '최민지',
      productName: '유기농 우유',
      content: '패키지가 재활용 가능한가요?',
      status: 'answered',
      date: '2023-06-04'
    },
    {
      id: 5,
      customerName: '정태준',
      productName: '채식주의자용 햄버거',
      content: '어떤 재료로 만들어졌나요?',
      status: 'pending',
      date: '2023-06-05'
    }
  ]);

  return (
    <Container>
      <Header>
        <Title>식품 문의 관리</Title>
        <StatsSummary>
          <StatsCard>
            <StatsLabel>총 문의</StatsLabel>
            <StatsValue>5</StatsValue>
          </StatsCard>
          <StatsCard>
            <StatsLabel>주요 내용</StatsLabel>
            <CategoryTags>
              <Tag>유통기한</Tag>
              <Tag>원산지</Tag>
              <Tag>알레르기</Tag>
              <Tag>재활용</Tag>
              <Tag>제료</Tag>
            </CategoryTags>
          </StatsCard>
          <StatsCard>
            <StatsLabel>답변 대기</StatsLabel>
            <StatsValue>3</StatsValue>
          </StatsCard>
        </StatsSummary>
      </Header>

      <SearchBar>
        <SearchIcon>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#6B7280">
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </SearchIcon>
        <SearchInput
          type="text"
          placeholder="검색"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </SearchBar>

      <Table>
        <thead>
          <tr>
            <Th>고객명</Th>
            <Th>제품</Th>
            <Th>문의 내용</Th>
            <Th>상태</Th>
            <Th>날짜</Th>
          </tr>
        </thead>
        <tbody>
          {questions.map((question) => (
            <tr key={question.id}>
              <Td>{question.customerName}</Td>
              <Td>{question.productName}</Td>
              <Td>{question.content}</Td>
              <Td>
                <StatusBadge status={question.status}>
                  {question.status === 'pending' ? '답변 대기' : '답변 완료'}
                </StatusBadge>
              </Td>
              <Td>{question.date}</Td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination>
        <PageButton active>1</PageButton>
      </Pagination>
    </Container>
  );
}

const Container = styled.div`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  margin-bottom: 24px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: #111827;
  margin-bottom: 16px;
`;

const StatsSummary = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-bottom: 24px;
`;

const StatsCard = styled.div`
  background: white;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const StatsLabel = styled.div`
  font-size: 14px;
  color: #6B7280;
  margin-bottom: 8px;
`;

const StatsValue = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: #111827;
`;

const CategoryTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tag = styled.span`
  background: #F3F4F6;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  color: #374151;
`;

const SearchBar = styled.div`
  position: relative;
  margin-bottom: 24px;
  max-width: 300px;
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 8px 12px 8px 40px;
  border: 1px solid #E5E7EB;
  border-radius: 8px;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #00D54B;
  }
`;

const Table = styled.table`
  width: 100%;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const Th = styled.th`
  background: #F9FAFB;
  padding: 12px 16px;
  text-align: left;
  font-weight: 500;
  color: #374151;
  font-size: 14px;
`;

const Td = styled.td`
  padding: 12px 16px;
  border-bottom: 1px solid #E5E7EB;
  font-size: 14px;
  color: #374151;
`;

const StatusBadge = styled.span`
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  background: ${props => props.status === 'pending' ? '#FEF2F2' : '#F0FDF4'};
  color: ${props => props.status === 'pending' ? '#DC2626' : '#059669'};
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;
  gap: 8px;
`;

const PageButton = styled.button`
  padding: 8px 12px;
  border: 1px solid ${props => props.active ? '#00D54B' : '#E5E7EB'};
  background: ${props => props.active ? '#00D54B' : 'white'};
  color: ${props => props.active ? 'white' : '#374151'};
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background: ${props => props.active ? '#00C344' : '#F9FAFB'};
  }
`;

export default QuestionsPage;