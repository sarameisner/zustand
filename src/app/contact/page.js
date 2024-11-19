"use client";
import useStore from "@/app/state/Store";

const Contact = () => {
  const count = useStore((state) => state.count);
  const countUp = useStore((state) => state.countUp);
  return <section>Count: {count}</section>;
};

export default Contact;
