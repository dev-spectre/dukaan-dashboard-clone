/* eslint-disable react/prop-types */
import { useState } from "react";

export default function Search({ type, placeholder }) {
  const [searchValue, setSearchValue] = useState("");

  const styleModifier =
    type === "outline" ? "bg-white outline" : "bg-stone-100";

  return (
    <div
      className={`inline-flex w-full max-w-64 items-center overflow-hidden rounded-md px-2 text-grey outline-1 outline-zinc-600 ${styleModifier}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2.5}
        stroke="currentColor"
        className="mr-2 size-5 pt-1 text-stone-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>
      <input
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
        type="text"
        value={searchValue}
        placeholder={placeholder}
        className="w-full min-w-16 max-w-52 bg-inherit py-2 focus:outline-none"
      />
    </div>
  );
}
