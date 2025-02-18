import { create } from "zustand";

const useMyStore = create((setState, getState) => {
  return {
    profile: undefined,
    liked: [],
    savatcha: [],
    currentSort: "price",
    onAdd(product) {
      const state = getState();

      const new_savatcha = state.savatcha.concat({
        count: 1,
        mahsulot: product,
      });

      setState({
        savatcha: new_savatcha,
      });
    },
  };
});

export default useMyStore;
