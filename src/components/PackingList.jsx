import { Item } from "./Item";

export function PackingList({ items, onDeleteItem, onCheckedItem }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            key={item.id}
            item={item}
            onDeleteItem={onDeleteItem}
            onCheckedItem={onCheckedItem}
          />
        ))}
      </ul>
    </div>
  );
}
