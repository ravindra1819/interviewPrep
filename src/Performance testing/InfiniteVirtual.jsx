import { useState } from "react";
import List from "react-window/dist/es/FixedSizeList";
import { InfiniteLoader } from "react-window-infinite-loader";


const ITEM_HEIGHT = 80;
const PAGE_SIZE = 20;

export default function ProductList() {
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  const isItemLoaded = index => !hasMore || index < items.length;

  const loadMoreItems = async () => {
    if (!hasMore) return;

    const page = Math.floor(items.length / PAGE_SIZE) + 1;
    const res = await fetch(
      `/products?page=${page}&limit=${PAGE_SIZE}`
    );
    const data = await res.json();

    setItems(prev => [...prev, ...data.items]);
    setHasMore(data.hasMore);
  };

  const Row = ({ index, style }) => {
    if (!isItemLoaded(index)) {
      return <div style={style}>Loading...</div>;
    }

    const product = items[index];
    return (
      <div style={style} className="product-row">
        <strong>{product.name}</strong>
        <span>₹{product.price}</span>
      </div>
    );
  };

  return (
    <InfiniteLoader
      isItemLoaded={isItemLoaded}
      itemCount={hasMore ? items.length + 1 : items.length}
      loadMoreItems={loadMoreItems}
    >
      {({ onItemsRendered, ref }) => (
        <List
          height={600}
          itemCount={items.length}
          itemSize={ITEM_HEIGHT}
          onItemsRendered={onItemsRendered}
          ref={ref}
          width="100%"
        >
          {Row}
        </List>
      )}
    </InfiniteLoader>
  );
}
