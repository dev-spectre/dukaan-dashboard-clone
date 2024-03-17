/* eslint-disable react/prop-types */
export function Circle({ children }) {
  return (
    <div className="rounded-full bg-stone-300 p-2 text-zinc-700 hover:cursor-pointer">
      {children}
    </div>
  );
}
