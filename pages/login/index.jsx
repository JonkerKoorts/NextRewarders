import React, { useState } from "react";
import Parse from "../../utils/parse.js";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Link from "next/link";

const LoginRegister = () => {
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [snackbar, setSnackbar] = useState({ open: false, message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState("enterNumber");
  const [tempPassword, setTempPassword] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (step === "enterNumber") {
      try {
        // Log out any currently logged-in user
        await Parse.User.logOut();

        const response = await Parse.Cloud.run("createNewUser", { number });
        if (response.success) {
          // Log in the user with the temporary password
          const user = await Parse.User.logIn(number, response.tempPassword);
          const sessionToken = user.getSessionToken();
          localStorage.setItem("sessionToken", sessionToken);

          setTempPassword(response.tempPassword);
          setStep("choosePassword");
        } else {
          setStep("enterPassword");
        }
      } catch (error) {
        console.error("Error adding number:", error);
        showSnackbar("Error adding number. Please try again.");
      }
    } else if (step === "enterPassword") {
      try {
        const user = await Parse.User.logIn(number, password);
        const sessionToken = user.getSessionToken();
        // set the session token in local storage
        localStorage.setItem("sessionToken", sessionToken);
        console.log("User logged in:", user);
        router.push("/home");
      } catch (error) {
        console.error("Error logging in:", error);
        showSnackbar("Error logging in. Please try again.");
      }
    } else if (step === "choosePassword") {
      try {
        const sessionToken = localStorage.getItem("sessionToken");
        // make sure that the user is logged in before performing any actions
        if (sessionToken) {
          let user = await Parse.User.become(sessionToken);
          user.setPassword(password);
          await user.save();

          const newSessionToken = user.getSessionToken();
          // set the new session token in local storage
          localStorage.setItem("sessionToken", newSessionToken);

          console.log("Password set:", user);
          router.push("/home");
        } else {
          throw new Error("User is not logged in");
        }
      } catch (error) {
        console.error("Error setting password:", error);
        showSnackbar("Error setting password. Please try again.");
      } finally {
        setIsLoading(false);
      }
    }

    setIsLoading(false);
  };

  const showSnackbar = (message) => {
    setSnackbar({ open: true, message });
    setTimeout(() => {
      setSnackbar({ open: false, message: "" });
    }, 3000);
  };

  const renderInputField = () => {
    if (step === "enterNumber") {
      return (
        <div className="mb-4">
          <label htmlFor="number" className="block text-sm font-medium mb-2">
            Number:
          </label>
          <input
            id="number"
            type="tel"
            inputMode="numeric"
            pattern="[0-9]{0,10}"
            value={number}
            onChange={(e) => {
              const re = /^[0-9\b]+$/;
              if (e.target.value === "" || re.test(e.target.value)) {
                setNumber(e.target.value.slice(0, 10));
              }
            }}
            className="w-full px-3 py-2 border border-main rounded focus:outline-none focus:border-secondary"
            required
          />
        </div>
      );
    } else if (step === "enterPassword" || step === "choosePassword") {
      return (
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium mb-2">
            {step === "enterPassword" ? "Enter Password:" : "Choose Password:"}
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-main rounded focus:outline-none focus:border-secondary"
            required
          />
        </div>
      );
    }
  };

  return (
    <div className="bg-color-2 min-h-screen flex flex-col items-center justify-center p-6">
      <motion.div
        className="flex justify-center"
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        transition={{
          type: "just",
          stiffness: 100,
          damping: 10,
          mass: 2,
          restDelta: 0.5,
        }}
      >
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded shadow-md"
          style={{ width: "350px" }}
        >
          {renderInputField()}
          <button
            type="submit"
            className="bg-main hover:bg-secondary text-color-2 px-4 py-2 rounded w-full flex items-center justify-center"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="w-6 h-6 border-t-2 border-b-2 border-main rounded-full animate-spin"></div>
            ) : (
              "Submit"
            )}
          </button>
        </form>
        <div
          className={`fixed bottom-0 right-0 m-4 p-4 rounded shadow-md ${
            snackbar.open ? "bg-red-500" : "hidden"
          }`}
        >
          {snackbar.message}
        </div>
        {isLoading ? null : (
          <Link
            className="bg-main text-color-2 py-2 px-4 rounded absolute mt-[300px]"
            href="/"
          >
            Back
          </Link>
        )}
      </motion.div>
    </div>
  );
};

export default LoginRegister;
