import { create } from "zustand";

const useMyStore = create(() => {
  return {
    inputValue: "",
    students: [{ id: 1, name: "Ozodbek", count: 1 }],
  };
});

export default useMyStore;
