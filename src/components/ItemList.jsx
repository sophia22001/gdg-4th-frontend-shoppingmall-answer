import Item from "./Item";

const ItemList = ({ items }) => {
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
