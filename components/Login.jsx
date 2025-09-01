"use client";

import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

const API = process.env.NEXT_PUBLIC_API_URL;

const Login = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${API}/api/auth/login`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });

      router.refresh();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex">
      <div className="w-full max-w-[550px]">
        <h2 className="text-[50px] text-blue-500 font-black">facebook</h2>
        <p className="text-[30px]">
          Connect with friends and the world around you on facebook.
        </p>
      </div>
      <div className="bg-white shadow-xl rounded-md p-4 w-full max-w-[400px]">
        <form onSubmit={handleLogin} className="space-y-[20px]">
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={onChange}
            className="h-[50px] w-full px-[16px] py-[14px] border border-gray-300 rounded-md focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={onChange}
            className="h-[50px] w-full px-[16px] py-[14px] border border-gray-300 rounded-md focus:outline-none"
          />

          <button
            type="submit"
            className="w-full bg-blue-500 text-white text-center h-[50px] rounded-md text-[16px] font-bold"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
