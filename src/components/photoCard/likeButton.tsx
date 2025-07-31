import notliked from "../../assets/notliked.png";
import liked from "../../assets/liked.png";
import styled from "styled-components";
import { useState } from "react";

const Wrapper = styled.button`
  border: none;
  background: none;
  align-self: flex-start;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

export default function LikeButton() {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <Wrapper onClick={() => setIsLiked(!isLiked)}>
      <img src={isLiked ? liked : notliked} alt="like-button" />
    </Wrapper>
  );
}
