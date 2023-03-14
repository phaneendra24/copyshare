"use client";
import { Cookie } from "next/font/google";
import { FormEvent, useState } from "react";

type eventType = {
  value: any;
};

export default function Login() {
  const [value, setvalue] = useState<string>("");
  const submitform = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch("/api/hello", {
      method: "POST",
      headers: {
        Accept: "application.json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: value }),
    });

    if (res.ok) {
      window.location.href = "/chat";
    }
  };

  return (
    <div className="bg-black h-screen text-white flex justify-center items-center">
      <form action="" className="flex flex-col" onSubmit={(e) => submitform(e)}>
        <label htmlFor="input" className="mb-10 text-4xl">
          username
        </label>
        <input
          type="text"
          value={value}
          className="w-60 text-black p-2"
          placeholder="enter your username"
          onChange={(e) => setvalue(e.target.value)}
        />
        <button type="submit" className="mt-5 p-3 bg-green-400 border-3">
          submit
        </button>
      </form>
    </div>
  );
}
