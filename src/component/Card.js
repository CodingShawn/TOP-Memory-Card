import { useEffect, useState } from "react";
import pubsub from "../pubsub";

let Card = (props) => {
  let [ifClicked, setIfClicked] = useState(false);

  let { updateScore, dog } = props;

  function resetClickStatus() {
    console.log("reset click");
    setIfClicked(false);
  }

  useEffect(() => {
    pubsub.subscribe("resetGame", resetClickStatus);

    return function cleanUp() {
      pubsub.unsubscribe("resetGame", resetClickStatus);
    }
  });

  return (
    <div
      className={`image ${dog}`}
      onClick={() => {
        /* have to set if clicked to true first to call it before resetClickStatus (if it happens)*/
        let tempIfClicked = ifClicked
        setIfClicked(true);
        updateScore(tempIfClicked);
      }}
    ></div>
  );
};

export default Card;
