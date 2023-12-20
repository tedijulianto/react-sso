import * as yup from "yup";
import axios from "axios";
import Input from "../components/Input";
import toast from "react-hot-toast";
import Button from "../components/Button";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup
  .object({
    email: yup.string().required("Masukkan email anda"),
    password: yup.string().required("Masukkan password anda"),
  })
  .required();

const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    axios
      .get("http://localhost:8000/users")
      .then((res) => {
        res.data.map((user) => {
          if (user.email === data.email) {
            if (user.password === data.password) {
              console.log("Berhasil login");
              toast.success("Berhasil Login");
              navigate("/");
            } else {
              console.log("Password salah");
              toast.error("Password salah");
            }
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-1/3 flex items-center flex-col gap-6 shadow-xl shadow-slate-200 rounded-md p-4 md:p-8">
        <h1>Silahkan Login</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full">
          <Input id="email" label="Email" register={register} errors={errors} />
          <Input
            id="password"
            label="Password"
            register={register}
            errors={errors}
            type="password"
          />

          <Button label="Login" />
        </form>
      </div>
    </div>
  );
};

export default Login;
