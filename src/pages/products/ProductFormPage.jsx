import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const ProductFormPage = () => {
  const navigate = useNavigate();
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Container>
      <Header>
        <TitleSection>
          <BackButton onClick={() => navigate(-1)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
            </svg>
          </BackButton>
          <Title>새 상품</Title>
        </TitleSection>
        <ButtonGroup>
          <SaveButton>저장</SaveButton>
          <DeleteButton>삭제</DeleteButton>
        </ButtonGroup>
      </Header>

      <FormLayout>
        <ImageSection>
          <ImageUploadArea>
            {imagePreview ? (
              <PreviewImage src={imagePreview} alt="상품 이미지" />
            ) : (
              <UploadPlaceholder>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="#9CA3AF">
                  <path d="M4 5h16v14H4V5zm11 9h3l-4-4-4 4h3v4h2v-4z"/>
                </svg>
              </UploadPlaceholder>
            )}
          </ImageUploadArea>
          <UploadButtons>
            <UploadLabel>
              파일 선택 · 선택된 파일 없음
              <input 
                type="file" 
                accept="image/*" 
                onChange={handleImageUpload}
                style={{ display: 'none' }}
              />
            </UploadLabel>
            <ImageButton>메인 이미지 변경</ImageButton>
          </UploadButtons>
        </ImageSection>

        <FormSection>
          <FormGroup>
            <Label>가격</Label>
            <Input type="number" placeholder="0" />
          </FormGroup>

          <FormGroup>
            <Label>설명</Label>
            <TextArea placeholder="상품에 대한 설명을 입력하세요" />
          </FormGroup>

          <FormGroup>
            <Label>유통기한</Label>
            <Input type="date" />
          </FormGroup>

          <FormGroup>
            <Label>원산지</Label>
            <Input type="text" placeholder="원산지를 입력하세요" />
          </FormGroup>

          <FormGroup>
            <Label>알레르기 정보</Label>
            <Input type="text" placeholder="알레르기 정보를 입력하세요" />
          </FormGroup>

          <FormGroup>
            <Label>영양 정보</Label>
            <TextArea placeholder="영양 정보를 입력하세요" />
          </FormGroup>

          <FormGroup>
            <Label>판매량</Label>
            <Input type="number" placeholder="0" />
          </FormGroup>
        </FormSection>
      </FormLayout>
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

const TitleSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const BackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: none;
  background: none;
  color: #6B7280;
  cursor: pointer;
  border-radius: 8px;
  
  &:hover {
    background: #F3F4F6;
    color: #111827;
  }
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: #111827;
  margin: 0;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
`;

const SaveButton = styled.button`
  padding: 8px 16px;
  background: #111827;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background: #1F2937;
  }
`;

const DeleteButton = styled.button`
  padding: 8px 16px;
  background: #EF4444;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background: #DC2626;
  }
`;

const FormLayout = styled.div`
  display: grid;
  grid-template-columns: 400px 1fr;
  gap: 32px;
`;

const ImageSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ImageUploadArea = styled.div`
  width: 100%;
  aspect-ratio: 1;
  background: #F3F4F6;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const UploadPlaceholder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: #9CA3AF;
`;

const UploadButtons = styled.div`
  display: flex;
  gap: 8px;
`;

const UploadLabel = styled.label`
  flex: 1;
  padding: 8px 16px;
  background: white;
  border: 1px solid #E5E7EB;
  border-radius: 8px;
  font-size: 14px;
  color: #374151;
  cursor: pointer;
  text-align: center;

  &:hover {
    background: #F9FAFB;
  }
`;

const ImageButton = styled.button`
  padding: 8px 16px;
  background: #6B7280;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background: #4B5563;
  }
`;

const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const FormGroup = styled.div`
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
  padding: 10px 16px;
  border: 1px solid #E5E7EB;
  border-radius: 8px;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #00D54B;
  }
`;

const TextArea = styled.textarea`
  padding: 10px 16px;
  border: 1px solid #E5E7EB;
  border-radius: 8px;
  font-size: 14px;
  min-height: 100px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #00D54B;
  }
`;

export default ProductFormPage;
