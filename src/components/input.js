import React from 'react'

function Input({input, setInput}) {
  return (
    <div className="flex border-b border-slate-400 p-4">
      <input
        placeholder="Search a liscene plate region code or a city name ..."
        className="grow bg-transparent border-none outline-none h-12"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
          }
        }}
      />
    </div>
  );
}

export default Input