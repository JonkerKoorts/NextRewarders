import React, { useState } from "react";
import Parse from "../../utils/parse.js";
import { useRouter } from "next/router";

const LoginRegister = () => {
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let user = await Parse.User.logIn(number, password);
      console.log("User logged in:", user);
      router.push("/home");
    } catch (error) {
      if (error.code === Parse.Error.OBJECT_NOT_FOUND) {
        const newUser = new Parse.User();

        newUser.set("username", number);
        newUser.set("password", password);
        newUser.set("phone", number);

        try {
          await newUser.signUp();
          console.log("User signed up:", newUser);
          router.push("/home");
        } catch (signUpError) {
          console.error("Error signing up:", signUpError);
        }
      } else {
        console.error("Error logging in:", error);
      }
    }
  };

  return (
    <div className="bg-color-2 min-h-screen flex flex-col items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-full max-w-md"
      >
        <div className="mb-4">
          <label htmlFor="number" className="block text-sm font-medium mb-2">
            Number:
          </label>
          <input
            id="number"
            type="tel"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className="w-full px-3 py-2 border border-main rounded focus:outline-none focus:border-secondary"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium mb-2">
            Password:
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-main rounded focus:outline-none focus:border-secondary"
          />
        </div>
        <button
          type="submit"
          className="bg-main hover:bg-secondary text-color-2 px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginRegister;
