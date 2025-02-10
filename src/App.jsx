import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import IsmInput from "./components/IsmInput";
import useMyStore from "./my-store";

function App() {
  const state = useMyStore();

  function onAdd() {
    if (state.inputValue.trim() === "") {
      return;
    }

    const bormi = state.students.find((item) => {
      return item.name.toLowerCase() === state.inputValue.toLowerCase();
    });

    if (bormi) {
      // countni + 1 qilish kerak
      const new_arr = state.students.map((item) => {
        if (item.name.toLowerCase() === state.inputValue.toLowerCase()) {
          return {
            ...item,
            count: item.count + 1,
          };
        }

        return item;
      });

      useMyStore.setState({
        students: new_arr,
        inputValue: "",
      });
    } else {
      // yo'q bo'lsa
      // qo'shilish kerak
      const new_arr = state.students.concat({
        id: Math.floor(Math.random() * 10000000),
        name: state.inputValue,
        count: 1,
      });

      useMyStore.setState({
        inputValue: "",
        students: new_arr,
      });
    }
  }

  return (
    <div className="h-screen m-2">
      <div>O'quvchilar ro'yxati</div>

      <div className="flex gap-2">
        <IsmInput onAdd={onAdd} />
        <Button
          onClick={onAdd}
          type="primary"
          icon={<PlusOutlined />}
        />
      </div>

      <div className="border rounded border-orange-800 p-2 mt-2">
        {state.students.map((item, index) => {
          return (
            <div key={item.id}>
              {index + 1}. {item.name} x {item.count}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
