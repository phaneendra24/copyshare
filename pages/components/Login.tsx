"use client";
import { FormEvent } from "react";

type eventType = {
  value: any;
};

export default function Login() {
  const submitform = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let flag = (await e.target) as HTMLFormElement;
    const res = await fetch("/api/hello", {
      method: "POST",
      headers: {
        Accept: "application.json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: e.target.input.value }),
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <div className="bg-black h-screen text-white flex justify-center items-center">
      <form action="" className="flex flex-col" onSubmit={(e) => submitform(e)}>
        <label htmlFor="input" className="mb-10 text-4xl">
          username
        </label>
        <input
          type="text"
          id="input"
          className="w-60 text-black p-2"
          placeholder="enter your username"
        />
        <button type="submit" className="mt-5 p-3 bg-green-400 border-3">
          submit
        </button>
      </form>
    </div>
  );
}
