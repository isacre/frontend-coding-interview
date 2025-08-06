import notliked from "../../../assets/notliked.png";
import liked from "../../../assets/liked.png";
import { useState } from "react";
import { Wrapper } from "./styles";

export default function LikeButton() {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <Wrapper onClick={() => setIsLiked(!isLiked)}>
      {isLiked ? (
        <img src={liked} alt="liked-button" data-testid="liked-button" />
      ) : (
        <img
          src={notliked}
          alt="not-liked-button"
          data-testid="not-liked-button"
        />
      )}
    </Wrapper>
  );
}
