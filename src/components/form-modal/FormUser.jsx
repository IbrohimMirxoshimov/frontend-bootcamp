import { useState } from "react";
import Button from "./Button";

export default function FormUser({ onAdd }) {
  const [state, setState] = useState({ name: "", surname: "", age: undefined });

  return (
    <div>
      <div className="flex flex-col mb-2">
        <label>Ism</label>
        <input
          value={state.name}
          onChange={(e) => {
            const new_state = {
              ...state,
              name: e.currentTarget.value,
            };

            setState(new_state);
          }}
          className="border border-gray-600"
        />
      </div>
      <div className="flex flex-col mb-2">
        <label>Familiya</label>
        <input
          value={state.surname}
          onChange={(e) => {
            const new_state = {
              ...state,
              surname: e.currentTarget.value,
            };

            setState(new_state);
          }}
          className="border border-gray-600"
        />
      </div>
      <div className="flex flex-col mb-2">
        <label>Yosh</label>
        <input
          value={state.age}
          onChange={(e) => {
            const new_state = {
              ...state,
              age: e.currentTarget.value,
            };

            setState(new_state);
          }}
          className="border border-gray-600"
          type="number"
        />
      </div>
      <Button
        onClick={() => {
          onAdd(state);
        }}
      >
        + qo'shish
      </Button>
    </div>
  );
}
