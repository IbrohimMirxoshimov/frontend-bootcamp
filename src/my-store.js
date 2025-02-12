import { create } from "zustand";

const useMyStore = create(() => {
  return {
    loading: true,
    products: [],
  };
});

export default useMyStore;
