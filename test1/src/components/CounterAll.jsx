import { useState } from "react";
import Container from "./Container";
import Button from "./Button";

function CounterAll() {
  const [value, setValue] = useState(0);

  return (
    <>
      <h2>Count:{value}</h2>
      <Button setValue={setValue} />
    </>
  );
}

export default CounterAll;
