import React, { useState } from "react";
import Parse from "../../utils/parse.js";
import { useRouter } from "next/router";

const LoginRegister = () => {
  const [name, setName] = useState("");
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
        newUser.set("name", name);
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
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Number:
          <input
            type="tel"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LoginRegister;
