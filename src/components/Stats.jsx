export function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <em>
          You don't have any items in your list, start adding the items for your
          trip, and let's get ready for the trip.
        </em>
      </footer>
    );
  const numItem = items.length;
  const packedItem = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedItem / numItem) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything you need! Ready for the trip."
          : `You have ${numItem} item on your list, packed ${packedItem} items, and you
      have already packed ${percentage}%.`}
      </em>
    </footer>
  );
}
