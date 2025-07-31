import { PhotoCard } from "../../../components/photoCard";
import type { Photo } from "../../../services/pexels/types";

export default function PhotoComponent({ photo }: { photo: Photo }) {
  const { alt, avg_color, src, photographer, photographer_url } = photo;
  return (
    <PhotoCard.Wrapper tabIndex={0} aria-label={alt}>
      <PhotoCard.LikeButton />
      <PhotoCard.Photo url={src.medium} alt={alt} />
      <PhotoCard.Details name={photographer} alt={alt} avg_color={avg_color} />
      <PhotoCard.PortfolioLink link={photographer_url} text={"Portfolio"} />
    </PhotoCard.Wrapper>
  );
}
