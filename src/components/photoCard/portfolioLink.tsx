import links from "../../assets/links.svg";
import styled from "styled-components";

const Link = styled.a`
  display: flex;
  gap: 1px;
  font-family: Helvetica;
  font-weight: 400;
  font-style: Regular;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: right;
  color: #0075eb;
  text-decoration: none;
  padding-top: 4px;

  img {
    height: 12px;
    width: 12px;
  }
`;

interface Props {
  link: string;
  text: string;
}
export default function PortfolioLink({ link, text }: Props) {
  return (
    <Link href={link} target="_blank">
      <img src={links} />
      {text}
    </Link>
  );
}
