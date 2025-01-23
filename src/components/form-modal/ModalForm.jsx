import { useState } from "react";
import Button from "./Button";
import FormUser from "./FormUser";
import "./style/index.css";
import Modal from "./Modal";

function App() {
  const [visible, setVisible] = useState(true);
  return (
    <div className="w-full m-auto container p-4">
      <Button
        onClick={() => {
          setVisible(true);
        }}
      >
        + qo'shish
      </Button>
      <Modal
        title={"O'quvchi qo'shish"}
        open={visible}
        onClose={() => {
          setVisible(false);
        }}
      >
        <FormUser
          onAdd={(user) => {
            console.log(user);

            setVisible(false);
          }}
        />
      </Modal>
    </div>
  );
}

export default App;
