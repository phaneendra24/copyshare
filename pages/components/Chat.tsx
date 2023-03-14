import React, { useState } from "react";
import Inbox from "./inbox";

type user = {
  username: string;
  id: number;
};

export default function Chat() {
  const [user, setUser] = useState("");
  const [searchResults, setSearch] = useState([]);

  const search = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser(e.target.value);
    const res = await fetch("/api/search", {
      method: "POST",
      headers: {
        Accept: "application.json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: user }),
    });

    // const data = await res.json();
    // setSearch(data);
    // console.log(searchResults);
  };

  return (
    <div className="h-[100vh] w-[100wh] bg-gray-900 flex">
      <div className="flex flex-col justify-between w-[30%] bg-gray-700 h-[100vh] text-white text-4xl pl-5">
        <div>
          Users
          <input
            value={user}
            type="text"
            onChange={async (e) => {
              search(e);
            }}
            className="mt-5 w-[40vh] text-xl outline-none text-black rounded-sm p-1"
          />
          <div>
            {/* {searchResults.map((user: user) => {
              return (
                <div
                  key={user.id}
                  className="text-xl bg-gray-800 my-2 mr-3 pl-3"
                >
                  {user.username}
                </div>
              );
            })} */}
          </div>
        </div>
        <div className="flex gap-4 pb-5">
          <Inbox />
          <p className="text-xl pt-2">Inbox</p>
        </div>
      </div>
      <div className=" w-full h-full flex flex-col justify-center items-center">
        <input
          type="text"
          className="rounded h-40 w-[80vh] text-center outline-none bg-gray-600 text-white"
          placeholder="paste your text here"
        />
        <button className="w-40 h-16 mt-10 rounded-xl bg-green-500">
          send
        </button>
      </div>
    </div>
  );
}
