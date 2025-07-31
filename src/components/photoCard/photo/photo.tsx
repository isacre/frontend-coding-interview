import { useState } from "react";
import styled from "styled-components";
import LoadingSpinner from "../../loadingSpinner";

const Wrapper = styled.div<{ height: number; width: number }>`
  position: relative;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  min-width: ${({ width }) => width}px;
  min-height: ${({ height }) => height}px;
  border-radius: 10px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
`;

const FakeCard = styled.div<{ width: number; height: number }>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  min-width: ${({ width }) => width}px;
  min-height: ${({ height }) => height}px;
  border-radius: 10px;
  background-color: #e5e7eb;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  inset: 0;
`;

interface Props {
  url: string;
  alt: string;
  height?: number;
  width?: number;
}

export default function Photo({ url, height = 75, width = 75, alt }: Props) {
  const [Loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  return (
    <Wrapper height={height} width={width}>
      <img
        src={url}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoading(false)}
        onError={() => {
          setLoading(false);
          setError(true);
        }}
      />
      {(Loading || error) && (
        <FakeCard width={width} height={height}>
          {error ? (
            <div data-testid="error-icon">X</div>
          ) : (
            <LoadingSpinner data-testid="loading-spinner" />
          )}
        </FakeCard>
      )}
    </Wrapper>
  );
}
