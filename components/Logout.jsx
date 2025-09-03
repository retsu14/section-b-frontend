"use client";
import axios from "axios";
import { useRouter } from "next/navigation";

const API = process.env.NEXT_PUBLIC_API_URL;

const Logout = () => {
  const router = useRouter();
  const handleLogout = async () => {
    try {
      await axios.post(
        `${API}/api/auth/logout`,
        {},
        {
          header: {
            "Content-type": "application/json",
          },
          withCredentials: true,
        }
      );

      router.refresh();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <button onClick={handleLogout} className="bg-blue-500 h-[30px] rounded-md">
      Logout
    </button>
  );
};

export default Logout;
