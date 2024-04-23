import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handlePageChange = (page) => {
    setIsLoading(true);
    if (page >= 1 && page <= totalProducts / 10) {
      setPage(page);
    }
  };

  const getProducts = async () => {
    setIsLoading(true);
    let skip = page * 10 - 10;
    await fetch(`https://dummyjson.com/products?limit=10&skip=${skip}`)
      .then((res) => res.json())
      .then((res) => {
        setProducts(res.products);
        setTotalProducts(res.total);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getProducts();
  }, [page]);
  return (
    <>
      {isLoading ? (
        <div className="loading"></div>
      ) : (
        <div className="products">
          {products.length > 0 &&
            products.map((product) => (
              <div key={product.id} className="products__single">
                <img src={product.thumbnail} />
                <h2>{product.id + " | " + product.title}</h2>
              </div>
            ))}
        </div>
      )}
      <div className="pagination">
        <button
          onClick={() => handlePageChange(page - 1)}
          style={{ display: page <= 1 ? "none" : "block" }}
          disabled={isLoading}
        >
          Prev
        </button>
        {totalProducts > 0 &&
          [...Array(totalProducts / 10)].map((_, i) => (
            <button
              key={i}
              onClick={() => page != i + 1 && handlePageChange(i + 1)}
              className={page == i + 1 ? "selectedPage" : ""}
              disabled={isLoading}
            >
              {i + 1}
            </button>
          ))}
        <button
          onClick={() => handlePageChange(page + 1)}
          style={{ display: page >= totalProducts / 10 ? "none" : "block" }}
          disabled={isLoading}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default App;
