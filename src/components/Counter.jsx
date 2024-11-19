"use client";
import useStore from "@/app/state/Store";

const Counter = () => {
  const count = useStore((state) => state.count);
  const countUp = useStore((state) => state.countUp);

  return (
    <div>
      <button onClick={countUp}>one up</button>
      <div>{count}</div>
    </div>
  );
};
export default Counter;
