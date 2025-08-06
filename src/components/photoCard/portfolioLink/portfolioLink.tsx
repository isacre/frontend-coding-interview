import links from "../../../assets/links.svg";
import { Link } from "./styles";

interface Props {
  link: string;
  text: string;
}
export default function PortfolioLink({ link, text }: Props) {
  return (
    <Link href={link} target="_blank" data-testid="portfolio-link">
      <img src={links} />
      {text}
    </Link>
  );
}
