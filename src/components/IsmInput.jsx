import useMyStore from "../my-store";

function IsmInput({ onAdd }) {
  const state = useMyStore();

  return (
    <input
      className="border rounded border-gray-500 p-2"
      value={state.inputValue}
      placeholder="O'quvchi ismi"
      onChange={(e) => {
        useMyStore.setState({
          inputValue: e.currentTarget.value,
        });
      }}
      onKeyDown={(e) => {
        if (e.code === "Enter") {
          onAdd();
        }
      }}
    />
  );
}

export default IsmInput;
