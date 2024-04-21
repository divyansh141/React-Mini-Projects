import { useState, useEffect, useCallback, useRef } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  // useCallback for cache the function definition for optimized performance
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_=+";

    for (let i = 0; i < length; i++) {
      let charIndex = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(charIndex);
    }

    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  // Copy To Clipboard Logic
  let passwordRef = useRef(null);
  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(
    () => passwordGenerator(),
    [length, numAllowed, charAllowed, passwordGenerator]
  );

  return (
    <>
      <div className="bg-gray-700 text-white shadow-md p-4 mx-auto my-8 text-center max-w-md rounded-lg">
        <h1>Password Generator</h1>
        <div className="flex flex-">
          <input
            type="text"
            value={password}
            className="w-full px-3 py-2 rounded-l-md my-3 outline-none text-orange-400"
            placeholder="Password"
            ref={passwordRef}
            readOnly
          />
          <button
            className="px-3 py-2 my-3 bg-blue-600 rounded-r-md outline-none"
            onClick={copyToClipboard}
          >
            Copy
          </button>
        </div>
        <div className="flex flex-wrap justify-between gap-x-2 text-sm">
          <div className="flex flex-wrap gap-x-1 items-center">
            <input
              type="range"
              min={6}
              max={100}
              className="cursor-pointer w-fit"
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex gap-x-1 items-center">
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              onChange={() => setNumAllowed((prev) => !prev)}
            />
            <label>Number</label>
          </div>
          <div className="flex gap-x-1 items-center">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            <label>Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
