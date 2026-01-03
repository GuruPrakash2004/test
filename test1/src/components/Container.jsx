import { useState } from "react";
import Button from "./Button";
function Container({ setValue, ...props }) {
  // let isClicked = false;
  const [count, setCount] = useState(0);
  const [isClicked, setClicked] = useState(false);

  function Upgrade() {
    setValue((prev) => prev + 1);
  }

  //for toggel
  const [istog, setIsTog] = useState(true);

  function onToggle() {
    console.log("toggle is clicked");
    setIsTog((prev) => !prev);
  }

  function Press(att) {
    console.log(props.title, "is clicked", att, "min");
    setClicked(true);
    console.log(isClicked);
    // for  local update
    setCount((prv) => prv + 1);
    // for global update
    setValue((prev) => prev + 1);
  }

  return (
    <>
      <div className="card course ms-2 bg-secondary justify-content-center">
        <img
          className="card-img-top p-1 rounded"
          src={props.image}
          alt="couesr1"
        />
        <div className="couser-items card-body">
          <h3 className="card-title">{props.title}</h3>
          <p className="card-text">{props.desp}</p>
          <p>
            <b>{props.rank}</b>
          </p>
          <button onClick={() => onToggle()} className="btn btn-outline-danger">
            click
          </button>
          <p>
            <b>{istog ? "selected " : "not yet selected"}</b>
          </p>
          <br />
          <h2>{count}</h2>
          <button onClick={Upgrade} className="btn btn-warning">
            up
          </button>
        </div>
      </div>
    </>
  );
}

export default Container;
