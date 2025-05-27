import Item from "./Item";

const ItemList = ({ items }) => {
  if (!Array.isArray(items)) {
    console.error("items is not an array:", items);
    return null;
  }
  return (
    <div>
      {items.map(item => (
        <div key={item.id}>
          <Item {...item} />
        </div>
      ))}
      <div className="h-[190px]"></div>
    </div>
  );
};

export default ItemList;
