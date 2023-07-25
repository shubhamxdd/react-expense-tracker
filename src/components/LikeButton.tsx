import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface LikeButtonProps {
  liked: boolean;
  onClick: () => void;
}

const LikeButton = ({ liked, onClick }: LikeButtonProps) => {
  return (
    <>
      <p>LikeButton component</p>
      {liked ? (
        <AiFillHeart
          size="50px"
          color={liked ? "#ff6b81" : null}
          onClick={onClick}
        />
      ) : (
        <AiOutlineHeart
          size="50px"
          color={liked ? "#ff6b81" : null}
          onClick={onClick}
        />
      )}
    </>
  );
};

export default LikeButton;
