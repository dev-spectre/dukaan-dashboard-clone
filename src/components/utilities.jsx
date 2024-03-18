/* eslint-disable react/prop-types */
export function Circle({ children }) {
  return (
    <div className="rounded-full bg-stone-300 p-2 text-zinc-700 hover:cursor-pointer">
      {children}
    </div>
  );
}

export function Button({ children }) {
  return (
    <button className="flex gap-2 rounded-md border border-zinc-200 bg-white px-3 py-1">
      {children}
    </button>
  );
}

export function RoundButton({ children, isSelected }) {
  const color = isSelected ? "bg-secondary-100 text-white" : "bg-zinc-300";

  return (
    <button className={`rounded-full px-3 py-1 ${color}`}>{children}</button>
  );
}
