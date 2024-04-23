import { useEffect, useState } from "react";
import "./App.css";
import InputFields from "./components/InputFields";

function App() {
  const [principalAmount, setPrincipalAmount] = useState(1100000);
  const [interest, setInterest] = useState(5);
  const [tenure, setTenure] = useState(5);
  const [EMI, setEMI] = useState(0);

  const calculateEMI = () => {
    // P x R x (1+R)^N / [(1+R)^N-1]
    const P = principalAmount;
    const R = interest / (12 * 100);
    const N = tenure * 12;
    const EMI = (P * R * (1 + R) ** N) / ((1 + R) ** N - 1);
    setEMI(EMI.toFixed(2));
  };
  useEffect(() => calculateEMI(), [principalAmount, interest, tenure]);
  return (
    <>
      <InputFields
        label={"Loan Amount(Rs.)"}
        min={100000}
        max={10000000}
        step={10000}
        value={principalAmount}
        setValue={setPrincipalAmount}
      />
      <InputFields
        label={"Rate of Interest(% Per Year)"}
        min={5}
        max={85}
        step={0.1}
        value={interest}
        setValue={setInterest}
      />
      <InputFields
        label={"Time Period(Years)"}
        min={1}
        max={50}
        step={1}
        value={tenure}
        setValue={setTenure}
      />
      <InputFields
        label={"Monthly EMI(Rs.)"}
        min={500}
        max={999999}
        value={EMI}
        setValue={setEMI}
      />
    </>
  );
}

export default App;
