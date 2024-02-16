import { useState } from "react";

export default function ResetButton() {
  const [myCounterState, setMyCounterState] = useState(0);

  return (
    <>
      <button onClick={() => countReset(0)}>Reset Counter</button>
    </>
  );
}
