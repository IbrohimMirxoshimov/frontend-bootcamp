import { UserOutlined } from "@ant-design/icons";
import { Button, message, Modal } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

function LoginButtonWithModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);
  const [qadam, setQadam] = useState("ism_nomer");

  function onSubmit(data) {
    console.log(data);
    setLoading(true);
    axios
      .post(`https://gateway.texnomart.uz/api/common/v1/user/register`, data)
      .then((res) => {
        console.log(res.data);

        message.success("Ishladi");
        setQadam("tasdiqlash");
        setLoading(false);
      });
  }

  return (
    <>
      <Button
        icon={<UserOutlined />}
        className="mr-2"
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        Login
      </Button>
      <Modal
        open={isModalOpen}
        onCancel={() => {
          setIsModalOpen(false);
        }}
        footer={false}
      >
        {qadam === "ism_nomer" ? (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="m-4 flex flex-col gap-2"
          >
            <h2 className="text-2xl font-bold text-center mb-2">
              Кириш ёки рўйхатдан ўтиш
            </h2>
            <div className="text-lg flex flex-col gap-1">
              <label>Телефон</label>
              <input
                className="border border-gray-400 p-2 rounded"
                type="number"
                size="large"
                {...register("phone")}
              />
            </div>
            <div className="text-lg flex flex-col gap-1">
              <label>Исм</label>
              <input
                className="border border-gray-400 p-2 rounded"
                size="large"
                {...register("first_name", { required: true })}
              />
            </div>
            <div className="flex justify-center">
              <Button
                type="primary"
                size="large"
                htmlType="submit"
                loading={loading}
              >
                Кодни олиш
              </Button>
            </div>
          </form>
        ) : (
          <div>
            <Button
              onClick={() => {
                setQadam("ism_nomer");
              }}
            >
              Orqaga
            </Button>
            Yangi form
          </div>
        )}
      </Modal>
    </>
  );
}

export default LoginButtonWithModal;
