import React, { useState } from "react";
import { PageLayout } from "./components/layout";
import { data } from "./data";
import Input from "./components/input";

function App() {
  const [input, setInput] = useState("");

  const filteredData = input
    ? data.filter((item) => {
        const { city, code } = item;
        const inputValue = input.toLowerCase();
        return (
          city.toLowerCase().includes(inputValue) ||
          code.toString().toLowerCase().includes(inputValue)
        );
      })
    : [];

  return (
    <PageLayout>
      <Input input={input} setInput={setInput}/>

      {filteredData.map((data) => (
        <div key={data.id} className="flex gap-3 border-b border-slate-400 p-4">
          {data.city} :{" "}
          {Array.isArray(data.code) ? data.code.join(", ") : data.code}
        </div>
      ))}
    </PageLayout>
  );
}

export default App;
