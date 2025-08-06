import { useState } from "react";
import LoadingSpinner from "../../loadingSpinner";
import { FakeCard, Wrapper } from "./styles";

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
