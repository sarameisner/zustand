import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useStore = create((set) => ({
  count: 0,
  countUp: () => set((state) => ({ count: state.count + 1 })),
}));
export default useStore;
