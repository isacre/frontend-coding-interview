import notliked from "../../assets/notliked.png";
import liked from "../../assets/liked.png";

export default function LikeButton({
  isLiked,
  setIsLiked,
}: {
  isLiked: boolean;
  setIsLiked: (isLiked: boolean) => void;
}) {
  return (
    <button
      onClick={() => setIsLiked(!isLiked)}
      style={{
        border: "none",
        background: "none",
        alignSelf: "flex-start",
        cursor: "pointer",
      }}
    >
      <img src={isLiked ? liked : notliked} alt="like-button" />
    </button>
  );
}
