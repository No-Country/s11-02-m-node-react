"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const handleInicio = () => {
    router.push("/");
  };
  const handleLogIn = () => {
    router.push("/LoginPage");
  };
  const handleRegister = () => {
    router.push("/RegisterPage");
  };
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold" onClick={handleInicio}>
          ReciclApp
        </div>
        <div>
          <button
            className="bg-white text-blue-500 px-4 py-2 rounded-lg mr-4"
            onClick={handleLogIn}
          >
            Log In
          </button>
          <button
            className="bg-white text-blue-500 px-4 py-2 rounded-lg"
            onClick={handleRegister}
          >
            Register
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
