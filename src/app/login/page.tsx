"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="flex justify-center items-center p-6 lg:min-h-screen lg:p-0">
      <div className="mx-auto space-y-4 w-full max-w-[22rem] ">
        <div className="p-8 bg-white bg-opacity-25/30 backdrop-blur-lg dark:bg-black dark:bg-opacity-25/30 rounded-lg shadow-lg">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
             {isLogin ? "Login" : "Register"} 
            </h1>
            {/* <p className="text-sm text-gray-500 dark:text-gray-400">Enter your email below to login to your account</p> */}
          </div>
          <div className="space-y-4">
            {!isLogin && (
              <div className="space-y-2">
                <Label
                  className="text-gray-800 dark:text-gray-200"
                  htmlFor="name"
                >
                  Name
                </Label>
                <Input
                  className="w-full border-gray-300 dark:border-gray-700 focus:ring-[#6366F1] dark:focus:ring-[#6366F1]"
                  id="name"
                  placeholder="John Doe"
                  required
                  type="text"
                />
              </div>
            )}
            <div className="space-y-2">
              <Label
                className="text-gray-800 dark:text-gray-200"
                htmlFor="email"
              >
                Email
              </Label>
              <Input
                className="w-full border-gray-300 dark:border-gray-700 focus:ring-[#6366F1] dark:focus:ring-[#6366F1]"
                id="email"
                placeholder="jhon@example.com"
                required
                type="email"
              />
            </div>
            <div className="space-y-2">
              <Label
                className="text-gray-800 dark:text-gray-200"
                htmlFor="password"
              >
                Password
              </Label>
              <Input
                className="w-full border-gray-300 dark:border-gray-700 focus:ring-[#6366F1] dark:focus:ring-[#6366F1]"
                id="password"
                required
                type="password"
                placeholder="******"
              />
            </div>
            <Button className="w-full bg-black text-white hover:bg-opacity-90 focus:ring-black dark:bg-black dark:hover:bg-opacity-90 dark:focus:ring-black">
            {isLogin ? "Login" : "Register"} 
            </Button>
            {isLogin && (
              <>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  or
                </p>
                <Button className="w-full bg-black text-white hover:bg-opacity-90 focus:ring-black dark:bg-black dark:text-white dark:hover:bg-opacity-90 dark:focus:ring-black">
                  Login with Google
                  <Image
                    src={"google.svg"}
                    width={20}
                    height={20}
                    alt="logo"
                    className=" ml-2"
                  />
                </Button>
              </>
            )}
          </div>
        </div>
        
        <div className="text-center text-sm space-x-1">
          <p className="text-gray-500 dark:text-gray-400">
            {isLogin ? "Don't have an account?" : "Already registered?"}
          </p>
          <p
            className="font-medium underline cursor-pointer"
            onClick={() => setIsLogin((prev)=>!prev)}
          >
            {isLogin ? "Sign Up" : "Sign In"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
