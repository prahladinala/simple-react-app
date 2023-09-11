import React from "react";
import ReactDOM from "react-dom/client";
export default function App() {
  return (
    <h1 class="bg-orange-400 text-white p-4 text-3xl font-bold underline">
      Hello world!
    </h1>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
