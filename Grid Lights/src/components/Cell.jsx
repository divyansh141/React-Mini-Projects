function Cell({ isFilled, onClick }) {
  return (
    <button
      className={`cell ${isFilled && "cell__filled"}`}
      onClick={onClick}
    ></button>
  );
}

export default Cell;
