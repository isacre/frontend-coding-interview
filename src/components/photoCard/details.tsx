import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
`;
const Name = styled.b`
  font-family: Helvetica;
  font-weight: 700;
  font-style: Bold;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0%;
`;
const DescriptionWrapper = styled.div`
  flex: 1;
  min-width: 0;
  overflow: hidden;
`;
const Description = styled.p`
  font-family: Helvetica;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0%;

  @media (max-width: 1200px) {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
const ColorPreviewWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;
const MainColor = styled.div<{ color: string }>`
  color: ${({ color }) => color};
`;
const ColorPreview = styled.div`
  width: 10px;
  height: 10px;
  background-color: ${({ color }) => color};
`;

interface Props {
  name: string;
  alt: string;
  avg_color: string;
  actionComponent?: React.ReactNode;
}
export default function NameAndDescription({
  name,
  alt,
  avg_color,
  actionComponent,
}: Props) {
  return (
    <Wrapper>
      <div>
        <Name>{name}</Name>
        {actionComponent && actionComponent}
      </div>
      <DescriptionWrapper>
        <Description>{alt}</Description>
      </DescriptionWrapper>
      <ColorPreviewWrapper>
        <MainColor color={avg_color}>{avg_color}</MainColor>
        <ColorPreview color={avg_color} />
      </ColorPreviewWrapper>
    </Wrapper>
  );
}
