import { useEffect, useState } from "react";
import ProgressBar from "./components/ProgressBar";

function App() {
  const [percent, setPercent] = useState(0);
  const [status, setStatus] = useState("Loading...");

  const handleProgress = () => {
    setInterval(() => setPercent((prevPercent) => prevPercent + 1), 100);
  };

  const onCompleted = () => {
    setStatus("Completed!");
  };

  const handleReset = () => {
    setPercent(0);
    setStatus("Loading...");
  };

  useEffect(() => {
    handleProgress();
  }, []);

  return (
    <>
      <div className="container">
        <h2>Progress Bar</h2>
        <ProgressBar percent={percent} onCompleted={onCompleted} />
        <button onClick={handleReset}>Reset</button>
        <h3>{status}</h3>
      </div>
    </>
  );
}

export default App;
