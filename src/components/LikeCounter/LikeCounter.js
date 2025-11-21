import { useState } from "react";
import "./LikeCounter.css";

function LikeCounter() {
  const [likes, setLikes] = useState(0);
  const counterStyles = {
    color: likes > 5 ? "red" : "black",
  };
  
  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    if (likes < 1) {
      return;
    }
    setLikes(likes - 1);
  };

  return (
    <div className="post">
      <p style={counterStyles}>Fajnyyyy post!! Liczba lików {likes}</p>
      <div className="actions">
        <button onClick={handleLike}>Polub 👍</button>
        <button onClick={handleDislike}>Dislike 👎</button>
      </div>
    </div>
  );
}

export default LikeCounter;
