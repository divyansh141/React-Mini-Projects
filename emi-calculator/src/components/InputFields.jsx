const InputFields = ({ label, min, max, step = 1, value, setValue }) => {
  return (
    <div className="input-field">
      <div className="label">
        <label>{label}</label>
        <input value={value} onChange={(e) => setValue(e.target.value)} />
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={label === "Monthly EMI(Rs.)" ? true : false}
      />
    </div>
  );
};

export default InputFields;
