import { useEffect, useState } from "react";
import pubsub from "../pubsub";

let Card = (props) => {
  let [ifClicked, setIfClicked] = useState(false);

  let { updateScore, dog } = props;

  function resetClickStatus() {
    setIfClicked(false);
  }

  useEffect(() => {
    pubsub.subscribe("resetGame", resetClickStatus);

    return function cleanUp() {
      pubsub.unsubscribe("resetGame", resetClickStatus);
    };
  });

  return (
    <div className="image-container">
      <div
        className={`image ${dog}`}
        onClick={() => {
          /* have to set if clicked to true first to call it before resetClickStatus (if it happens)*/
          let tempIfClicked = ifClicked;
          setIfClicked(true);
          updateScore(tempIfClicked);
        }}
      ></div>
    </div>
  );
};

export default Card;
