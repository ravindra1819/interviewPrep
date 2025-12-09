import React, { useEffect, useState, useMemo, useCallback } from "react";
import axios from "axios";

// Mock API endpoints
const PRODUCTS_API = "https://dummyjson.com/products";            // returns full product list or filtered
const SPECIALS_API = "https://dummyjson.com/products/#";            // returns promotions / weekly deals
const USER_FAVOURITES_API = "/api/user/favourites";
const DELIVERY_SLOTS_API = "/api/delivery-slots";

function GroceryHomePage() {
  const [products, setProducts] = useState([]);
  const [specials, setSpecials] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [filterNew, setFilterNew] = useState(false);
  const [showOnlySpecials, setShowOnlySpecials] = useState(false);
  const [deliveryAddress, setDeliveryAddress] = useState(null);
  const [deliverySlots, setDeliverySlots] = useState([]);

  // Fetch all products
  useEffect(() => {
    axios.get(PRODUCTS_API).then(res => {
      setProducts(res.data);
    });
  }, []);

  // Fetch current specials / promotions
  useEffect(() => {
    axios.get(SPECIALS_API).then(res => {
      setSpecials(res.data);
    });
  }, []);

  // Fetch user favourites / previous items
  useEffect(() => {
    axios.get(USER_FAVOURITES_API, { headers: { Authorization: "Bearer user-token" }})
      .then(res => {
        setFavourites(res.data);
      });
  }, []);

  // Fetch available delivery slots once address set
  useEffect(() => {
    if (deliveryAddress) {
      axios.get(DELIVERY_SLOTS_API, { params: { address: deliveryAddress } })
        .then(res => setDeliverySlots(res.data));
    }
  }, [deliveryAddress]);

  // Filter + sort logic
  const visibleProducts = useMemo(() => {
    return products.filter(p => {
      if (categoryFilter !== "All" && p.category !== categoryFilter) return false;
      if (filterNew && !p.isNew) return false;
      if (showOnlySpecials && !specials.find(s => s.productId === p.id)) return false;
      return true;
    });
  }, [products, categoryFilter, filterNew, showOnlySpecials, specials]);

  const toggleFavourite = useCallback((productId) => {
    // call API to update favourite, then update local state
    axios.post(USER_FAVOURITES_API, { productId })
      .then(res => {
        setFavourites(res.data);
      });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Shop Groceries</h1>

      {/* Specials / Featured Carousel */}
      <section className="mb-8">
        <h2 className="text-2xl mb-2">This Week’s Specials</h2>
        <div className="flex overflow-x-scroll gap-4">
          {specials.map(s => (
            <div key={s.id} className="min-w-[200px] border rounded p-3">
              <img src={s.image} alt={s.title} className="h-32 w-full object-cover" />
              <h3 className="font-semibold">{s.title}</h3>
              <p className="text-green-600">Save {s.discount}%</p>
              <p className="text-sm text-gray-600">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Filters */}
      <div className="flex gap-4 mb-4">
        <select value={categoryFilter} onChange={e => setCategoryFilter(e.target.value)}>
          <option>All</option>
          <option>Fruits</option>
          <option>Bakery</option>
          <option>Beverages</option>
          <option>Pantry</option>
          {/* ... other categories */}
        </select>
        <label>
          <input type="checkbox" checked={filterNew} onChange={() => setFilterNew(!filterNew)} />
          New Items
        </label>
        <label>
          <input type="checkbox" checked={showOnlySpecials} onChange={() => setShowOnlySpecials(!showOnlySpecials)} />
          On Sale / Specials Only
        </label>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-4 gap-6">
        {visibleProducts.map(p => (
          <div key={p.id} className="border p-4 rounded shadow relative">
            <img src={p.image} alt={p.name} className="h-32 w-full object-contain mb-2" />
            <h3 className="font-semibold">{p.name}</h3>
            <p className="text-gray-700">${p.price}</p>

            {/* Favourite / Buy Again toggle */}
            <button
              onClick={() => toggleFavourite(p.id)}
              className={`absolute top-2 right-2 ${favourites.includes(p.id) ? "text-red-500" : "text-gray-400"}`}
            >
              ♥
            </button>
          </div>
        ))}
      </div>

      {/* Delivery Address & Slot Selector */}
      <section className="mt-10 border-t pt-6">
        <h2 className="text-2xl mb-2">Delivery</h2>
        <div className="mb-4">
          <label>
            Address:{" "}
            <input
              type="text"
              value={deliveryAddress || ""}
              onChange={e => setDeliveryAddress(e.target.value)}
              placeholder="Enter your delivery address"
              className="border p-2 w-full max-w-md"
            />
          </label>
        </div>
        {deliverySlots.length > 0 && (
          <select className="border p-2 max-w-md">
            {deliverySlots.map(slot => (
              <option key={slot.id} value={slot.id}>
                {slot.time}
              </option>
            ))}
          </select>
        )}
      </section>
    </div>
  );
}

export default GroceryHomePage;
