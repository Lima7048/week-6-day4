import { useState, useEffect } from "react";

export default function Timer({ count, setCount }) {
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => currentCount + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}
