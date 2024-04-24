import { useState } from "react";
import Cell from "./components/Cell";
import { config } from "./config/config";

function App() {
  const [order, setOrder] = useState([]);
  const [isUnFilling, setIsUnFilling] = useState(false);

  function fillCell(index) {
    const newOrder = [...order, index];
    if (!order.includes(index)) {
      setOrder(newOrder);
    }

    if (newOrder.length === config.flat(1).filter(Boolean).length) unFillCell();
  }

  function unFillCell() {
    setIsUnFilling(true);
    const timer = setInterval(() => {
      setOrder((prev) => {
        const newOrder = prev.slice();
        newOrder.pop();
        if (newOrder.length === 0) {
          clearInterval(timer);
          setOrder([]);
          setIsUnFilling(false);
        }
        return newOrder;
      });
    }, 300);
  }
  return (
    <>
      <div
        className="cell__container"
        style={{ gridTemplateColumns: `repeat(${config[0].length}, 1fr)` }}
      >
        {config
          .flat()
          .map((item, index) =>
            item ? (
              <Cell
                key={index}
                isFilled={order.includes(index)}
                onClick={() => fillCell(index)}
              />
            ) : (
              <div key={index}></div>
            )
          )}
      </div>
    </>
  );
}

export default App;
