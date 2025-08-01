import { PhotoCard } from "../../components/photoCard";

export default function PhotoCardComposition({
  name,
  alt,
  avg_color,
  link,
  text,
  url,
}: {
  name: string;
  alt: string;
  avg_color: string;
  link: string;
  text: string;
  url: string;
}) {
  return (
    <PhotoCard.Wrapper tabIndex={0} aria-label={alt}>
      <PhotoCard.LikeButton />
      <PhotoCard.Photo url={url} alt={alt} />
      <PhotoCard.Details name={name} alt={alt} avg_color={avg_color} />
      <PhotoCard.PortfolioLink link={link} text={text} />
    </PhotoCard.Wrapper>
  );
}
