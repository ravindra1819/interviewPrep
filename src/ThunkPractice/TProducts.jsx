import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./tActionCreator";
import { useEffect, useState } from "react";

export default function TProducts() {
  const dispatch = useDispatch();

  const { products, loading, error, total, limit } = useSelector(
    state => state
  );

  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(total / limit);

  useEffect(() => {
    dispatch(fetchUsers(page, limit));
  }, [dispatch, page, limit]);

  return (
    <>
      <h2>Carts</h2>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {products.map(cart => (
        <div key={cart.id} style={{ border: "1px solid #ccc", margin: 10, padding: 10 }}>
          <h3>Cart ID: {cart.id}</h3>
          <p>Total: ${cart.total}</p>

          <h4>Products:</h4>
          <ul>
            {cart.products.map(product => (
              <li key={product.id}>
                {product.title} - ${product.price} × {product.quantity}
              </li>
            ))}
          </ul>
        </div>
      ))}

      {/* Pagination Controls */}
      <div style={{ marginTop: 20 }}>
        <button
          disabled={page === 1}
          onClick={() => setPage(prev => prev - 1)}
        >
          Prev
        </button>

        <span style={{ margin: "0 10px" }}>
          Page {page} of {totalPages}
        </span>

        <button
          disabled={page === totalPages}
          onClick={() => setPage(prev => prev + 1)}
        >
          Next
        </button>
      </div>
    </>
  );
}
