import { useState } from "react";

function App() {
  const [color, setColor] = useState("indigo");
  const colors = [
    {
      name: "Red",
      main: "#ff0000",
      accent: "#ff9a9a",
    },
    {
      name: "Blue",
      main: "#0062fd",
      accent: "#9ac1ff",
    },
    {
      name: "Indigo",
      main: "#4b0082",
      accent: "#d69fff",
    },
    {
      name: "Black",
      main: "#000",
      accent: "#eee",
    },
  ];
  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      ></div>
      <div className="fixed bottom-12 bg-white w-full px-3 py-2 rounded-full flex flex-wrap justify-center">
        <div>
          {colors.map((color) => (
            <button
              key={color.name}
              className="rounded-full px-6 py-2 mx-1"
              style={{ backgroundColor: color.accent, color: color.main }}
              onClick={() => setColor(color.main)}
            >
              {color.name}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
