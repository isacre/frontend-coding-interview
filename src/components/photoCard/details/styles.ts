import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
`;
export const Name = styled.b`
  font-family: Helvetica;
  font-weight: 700;
  font-style: Bold;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0%;
`;

export const Description = styled.p`
  font-family: Helvetica;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0%;
  margin: 0;

  @media (max-width: 1200px) {
    -webkit-line-clamp: 2;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
export const ColorPreviewWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;
export const MainColor = styled.div<{ color: string }>`
  color: ${({ color }) => color};
  font-size: 14px;
`;
export const ColorPreview = styled.div`
  width: 10px;
  height: 10px;
  background-color: ${({ color }) => color};
`;
