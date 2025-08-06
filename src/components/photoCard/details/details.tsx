import {
  ColorPreview,
  ColorPreviewWrapper,
  Description,
  MainColor,
  Name,
  Wrapper,
} from "./styles";

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
      <Description>{alt}</Description>
      <ColorPreviewWrapper>
        <MainColor color={avg_color}>{avg_color}</MainColor>
        <ColorPreview color={avg_color} data-testid="color-preview" />
      </ColorPreviewWrapper>
    </Wrapper>
  );
}
