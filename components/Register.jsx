"use client";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

const API = process.env.NEXT_PUBLIC_API_URL;

const Register = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
    firstname: "",
    lastname: "",
  });

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${API}/api/auth/register`, formData, {
        header: {
          "Content-type": "application/json",
        },
        withCredentials: true,
      });

      // revalidate url
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
      <div className="bg-white shadow-md rounded-md p-4 w-full max-w-[400px]">
        <form onSubmit={handleSubmit} className="space-y-[20px]">
          <input
            type="text"
            placeholder="username"
            name="username"
            value={formData.username}
            onChange={onChange}
            className="h-[50px] w-full px-[16px] py-[14px] border border-gray-300 rounded-md focus:outline-none"
          />

          <input
            type="text"
            placeholder="FirstName"
            name="firstname"
            value={formData.firstname}
            onChange={onChange}
            className="h-[50px] w-full px-[16px] py-[14px] border border-gray-300 rounded-md focus:outline-none"
          />
          <input
            type="text"
            placeholder="LastName"
            name="lastname"
            value={formData.lastname}
            onChange={onChange}
            className="h-[50px] w-full px-[16px] py-[14px] border border-gray-300 rounded-md focus:outline-none"
          />

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
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
